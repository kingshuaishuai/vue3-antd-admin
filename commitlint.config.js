module.exports = {
  'extends': [
    '@commitlint/config-conventional',
  ],
  'roles': {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'WIP',
        'build',
      ],
    ],
  },
  'subject-case': [ 0 ],
};
