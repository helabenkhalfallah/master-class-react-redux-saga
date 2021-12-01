module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
  ],
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  plugins: [
    '@babel',
    'react',
    'jsx-a11y',
  ],
  overrides: [
    {
      files: [
        '**/*-Test.js?(x)',
        '**/*.test.js?(x)',
        '**/*-test.js?(x)',
        '**/*.spec.js',
      ],
      rules: {
        'max-lines-per-function': 'off',
        'max-statements': 'off',
        'max-depth': 'off',
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
      },
    },
    {
      files: [
        '*.jsx',
      ],
      rules: {
        'max-lines-per-function': 'off',
        'max-statements': 'off',
      },
    },
  ],
  rules: {
    'react/jsx-no-useless-fragment': 0,
    'default-param-last': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': 0,
    // maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    'max-depth': [
      'error',
      3,
    ],

    // maximum depth that callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': [
      'error',
      2,
    ],

    // maximum line length
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      1,
      120,
      2, {
        ignoreComments: true,
      },
    ],

    // maximum file length
    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'error',
      {
        max: 1500,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
      'error',
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    // maximum number of statements allowed in function blocks
    // https://eslint.org/docs/rules/max-statements
    'max-statements': [
      'error',
      20,
    ],

    // maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    'max-params': [
      'error',
      3,
    ],

    // max props per line
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md#limit-maximum-of-props-on-a-single-line-in-jsx-reactjsx-max-props-per-line
    'react/jsx-max-props-per-line': [
      1, {
        maximum: 1,
        when: 'always',
      },
    ],

    // prefer state inside class rather than constructor
    'react/state-in-constructor': 0,

    'linebreak-style': [
      'error',
      'unix',
    ],

    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],

    'comma-dangle': [
      2,
      {
        arrays: 'always',
        objects: 'always',
        imports: 'always',
        exports: 'always',
        functions: 'never',
      },
    ],

    'no-console': 'error',

    'react/static-property-placement': [
      2,
      'static public field',
      {
        defaultProps: 'static public field',
        propTypes: 'static public field',
      },
    ],

    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: [
          '**/*-Test.js?(x)',
          '**/*.test.js?(x)',
          '**/*-test.js?(x)',
          '**/*.spec.js',
          '**/webpack.*.js',
          '**/jestTransformer.js',
          '**/setupTests.js',
        ],
        optionalDependencies: false,
      },
    ],
  },
};
