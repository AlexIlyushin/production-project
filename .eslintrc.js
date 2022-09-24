module.exports = {
    env: {
        browser: true,
        es2021: true,
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
    ],
    rules: {
        'react/jsx-indent': [2, 4], // кол-во отступов для обычных файлов jsx tsx
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4], // кол-во отступов для обычных файлов js
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'import/no-unresolved': 'off', // незарезовленные импорты
        'import/prefer-default-export': 'off', // именнованые экспорты
        'no-unused-vars': 'warn', // неиспользуемые переменные
        'react/require-default-props': 'off', // пропсы с вопросиком (необязательные)
        'react/react-in-jsx-scope': 'off', // импорт реакта в каждый компонент
        'react/jsx-props-no-spreading': 'warn', // спред для пропрсов
        'react/function-component-definition': 'off', // использовать в компонентах function declartion
        'no-shadow': 'off',
        'import/extensions': 'off', // расширения импортов
        'import/no-extraneous-dependencies': 'off', // импорт зав-ей из devDependencies (off - разрешить)
        'no-underscore-dangle': 'off', // двойные подчеркивания
    },
    globals: {
        __IS_DEV__: true,
    },
};
