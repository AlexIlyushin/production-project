module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
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
    ],
    rules: {
        'react/jsx-indent': [2, 4], // кол-во отступов для обычных файлов jsx tsx
        'react/jsx-indent-props': [2, 4], // кол-во отступов в аттрибутах к компоненту
        indent: [2, 4], // кол-во отступов для обычных файлов js
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
        'i18next/no-literal-string': ['error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            }], // отсут-е переводов в разметке jsx
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off', // правило отвечающее за глоб переменные
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
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
