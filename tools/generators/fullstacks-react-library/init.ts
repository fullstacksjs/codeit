import type { GeneratorCallback, Tree } from '@nrwl/devkit';
import { jestInitGenerator } from '@nrwl/jest';
import { webInitGenerator } from '@nrwl/web';
import type { Schema } from '@nrwl/web/src/generators/init/schema';
import { runTasksInSerial } from '@nrwl/workspace/src/utilities/run-tasks-in-serial';

export async function reactInitGenerator(tree: Tree, schema: Schema) {
  const jestTask: GeneratorCallback | null =
    schema.unitTestRunner === 'jest' ? jestInitGenerator(tree, {}) : null;
  const initTask = await webInitGenerator(tree, schema);

  const tasks = [jestTask, initTask].filter(Boolean) as GeneratorCallback[];

  return runTasksInSerial(...tasks);
}
