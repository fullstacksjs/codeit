import { queryType } from 'nexus';

export const Query = queryType({
  definition(t) {
    t.nullable.string('name');
    t.list.field('users', {
      type: 'User',
      resolve: (_, __, context) => context.prisma.user.findMany({}),
    });
  },
});
