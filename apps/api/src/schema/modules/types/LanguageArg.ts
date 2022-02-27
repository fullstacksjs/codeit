import { Languages } from '@codeit/core';
import { enumType } from 'nexus';

export const LanguageArg = enumType({
  name: 'Language',
  members: Object.values(Languages).map(lang => ({ name: lang })),
});
