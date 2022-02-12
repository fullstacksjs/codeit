import type { Tree } from '@nrwl/devkit';
import {
  addProjectConfiguration,
  getWorkspaceLayout,
  joinPathFragments,
} from '@nrwl/devkit';

import type { Schema } from './index';

export function addProject(host: Tree, options: Schema) {
  if (!options.publishable && !options.buildable)
    return addProjectConfiguration(
      host,
      options.name,
      {
        root: options.projectRoot,
        sourceRoot: joinPathFragments(options.projectRoot, 'src'),
        projectType: 'library',
        tags: options.parsedTags,
      },
      true,
    );

  const { libsDir } = getWorkspaceLayout(host);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buildTarget: any = {
    builder: '@nrwl/web:rollup',
    outputs: ['{options.outputPath}'],
    options: {
      outputPath: `dist/${libsDir}/${options.projectDirectory}`,
      tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
      project: `${options.projectRoot}/package.json`,
      entryFile: `${options.projectRoot}/src/index.ts`,
      external: ['react/jsx-runtime'],
      rollupConfig: `@nrwl/react/plugins/bundle-rollup`,
      compiler: options.compiler ?? 'babel',
      assets: [
        {
          glob: `${options.projectRoot}/README.md`,
          input: '.',
          output: '.',
        },
      ],
    },
  };

  return addProjectConfiguration(
    host,
    options.name,
    {
      root: options.projectRoot,
      sourceRoot: joinPathFragments(options.projectRoot, 'src'),
      projectType: 'library',
      targets: { build: buildTarget },
      tags: options.parsedTags,
    },
    true,
  );
}
