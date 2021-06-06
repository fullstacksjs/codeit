import { objectType, stringArg } from 'nexus';

export const User = objectType({
  name: 'User',
  sourceType: {
    module: require.resolve('@prisma/client'),
    export: 'User',
  },
  definition(t) {
    t.nonNull.string('name', {
      args: { lastName: stringArg({ default: 'Foo' }) },
      resolve: source => source.name ?? 'Untitled',
    });
    t.list.field('friends', {
      type: 'User',
      resolve: () => [],
    });
  },
});
