import type { GeneratorCallback, Tree } from '@nrwl/devkit';
import {
  convertNxGenerator,
  formatFiles,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  updateJson,
} from '@nrwl/devkit';
import { jestProjectGenerator } from '@nrwl/jest';
import type { Schema as InitSchema } from '@nrwl/web/src/generators/init/schema';
import { runTasksInSerial } from '@nrwl/workspace/src/utilities/run-tasks-in-serial';

import { addProject } from './addProject';
import { createFiles } from './createFile';
import { reactInitGenerator } from './init';

export interface Schema extends InitSchema {
  name: string;
  directory: string;
  tags: string;
  publishable: boolean;
  buildable: boolean;
  importPath: string;
  compiler: 'babel' | 'swc';

  fileName: string;
  projectRoot: string;
  routePath: string;
  projectDirectory: string;
  parsedTags: string[];
}

export async function libraryGenerator(tree: Tree, schema: Schema) {
  const options = validateOptions(normalizeOptions(tree, schema));
  const initTask = await reactInitGenerator(tree, {
    ...options,
    skipFormat: true,
  });

  addProject(tree, options);
  createFiles(tree, options);
  updateBaseTsConfig(tree, options);

  const jestTask =
    options.unitTestRunner === 'jest'
      ? await createJestTask(tree, schema)
      : null;

  if (options.publishable || options.buildable)
    updateLibPackageNpmScope(tree, options);

  if (!options.skipFormat) await formatFiles(tree);

  const tasks: GeneratorCallback[] = [initTask, jestTask].filter(
    Boolean,
  ) as GeneratorCallback[];

  return runTasksInSerial(...tasks);
}

function createJestTask(tree: Tree, options: Schema) {
  return jestProjectGenerator(tree, {
    project: options.name,
    setupFile: 'none',
    supportTsx: true,
    skipSerializers: true,
    compiler: options.compiler,
  });
}

function validateOptions(options: Schema) {
  if (options.publishable && !options.importPath) {
    throw new Error(
      `For publishable libs you have to provide a proper "--importPath" which needs to be a valid npm package name (e.g. my-awesome-lib or @org/my-lib)`,
    );
  }
  return options;
}

function updateBaseTsConfig(host: Tree, options: Schema) {
  updateJson(host, 'tsconfig.base.json', json => {
    const c = json.compilerOptions;
    c.paths = c.paths ?? {};
    Reflect.deleteProperty(c.paths, options.name);

    if (c.paths[options.importPath]) {
      throw new Error(
        `You already have a library using the import path "${options.importPath}". Make sure to specify a unique one.`,
      );
    }

    const { libsDir } = getWorkspaceLayout(host);

    c.paths[options.importPath] = [
      joinPathFragments(libsDir, `${options.projectDirectory}/src/index.ts`),
    ];

    return json;
  });
}

function normalizeOptions(tree: Tree, options: Schema): Schema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;

  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const fileName = projectName;
  const { libsDir, npmScope } = getWorkspaceLayout(tree);
  const projectRoot = joinPathFragments(libsDir, projectDirectory);

  const parsedTags = options.tags
    ? options.tags.split(',').map(s => s.trim())
    : [];

  const importPath = options.importPath || `@${npmScope}/${projectDirectory}`;

  const normalized: Schema = {
    ...options,
    fileName,
    routePath: `/${name}`,
    name: projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    importPath,
  };

  return normalized;
}

function updateLibPackageNpmScope(tree: Tree, options: Schema) {
  return updateJson(tree, `${options.projectRoot}/package.json`, json => {
    json.name = options.importPath;
    return json;
  });
}

export default libraryGenerator;
export const librarySchematic = convertNxGenerator(libraryGenerator);
