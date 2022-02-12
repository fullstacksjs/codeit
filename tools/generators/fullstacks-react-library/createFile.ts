import type { Tree } from '@nrwl/devkit';
import {
  generateFiles,
  joinPathFragments,
  names,
  offsetFromRoot,
} from '@nrwl/devkit';

import type { Schema } from './index';

export function createFiles(tree: Tree, options: Schema) {
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    options.projectRoot,
    {
      ...options,
      ...names(options.name),
      tmpl: '',
      offsetFromRoot: offsetFromRoot(options.projectRoot),
    },
  );

  if (!options.publishable && !options.buildable) {
    tree.delete(`${options.projectRoot}/package.json`);
  }
}
