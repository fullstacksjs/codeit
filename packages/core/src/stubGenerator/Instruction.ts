import { Loop } from './Loop';
import { Loopline } from './Loopline';
import { Read } from './Read';
import { Write } from './Write';

export type Instruction = Loop | Loopline | Read | Write;
