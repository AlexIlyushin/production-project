module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'lex-ander-plugin',
        'unused-imports',
        'import',
    ],
    rules: {
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: './**.module.*',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
        // 'react/jsx-indent': [2, 4], // кол-во отступов для обычных файлов jsx tsx
        // 'react/jsx-indent-props': [2, 4], // кол-во отступов в аттрибутах к компоненту
        'unused-imports/no-unused-imports': 'error',
        // indent: [2, 4], // кол-во отступов для обычных файлов js
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', 'tsx'] },
        ],
        'import/no-unresolved': 'off', // незарезовленные импорты
        'import/prefer-default-export': 'off', // именнованые экспорты
        'no-unused-vars': 'warn', // неиспользуемые переменные
        'react/require-default-props': 'off', // пропсы с вопросиком (необязательные)
        'react/react-in-jsx-scope': 'off', // импорт реакта в каждый компонент
        'react/jsx-props-no-spreading': 'warn', // спред для пропрсов
        'react/function-component-definition': 'off', // использовать в компонентах function declaration
        'no-shadow': 'off',
        'import/extensions': 'off', // расширения импортов
        'import/no-extraneous-dependencies': 'off', // импорт зав-ей из devDependencies (off - разрешить)
        'no-underscore-dangle': 'off', // двойные подчеркивания в наименовании переменных
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'border',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                    'role',
                    'as',
                ],
            },
        ], // отсут-е переводов в разметке jsx
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off', // правило отвечающее за глоб переменные
        'lex-ander-plugin/path-checker': ['error', { alias: '@' }],
        'lex-ander-plugin/fsd-public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'lex-ander-plugin/layers-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'react/no-array-index-key': 'off', // ключи в списках из индексов
        'react/jsx-max-props-per-line': [2, { maximum: 4 }], // кол-во свойств в одной строке
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
