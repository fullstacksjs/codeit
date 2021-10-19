module.exports = {
  root: true,
  extends: ['@fullstacksjs'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.base.json',
      },
    },
  },
};
