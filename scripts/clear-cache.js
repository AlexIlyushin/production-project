// кастомный скрипт для удаления кеша
const fs = require('fs');
const path = require('path');

const clearCache = () => {
    const nodeModulesPath = path.resolve(__dirname, '..', 'node_modules');
    const cachePath = path.join(nodeModulesPath, '.cache');

    if (fs.existsSync(cachePath)) {
        fs.rmSync(cachePath, { recursive: true });
        console.log('Cache cleared successfully!');
    } else {
        console.log('Cache directory does not exist.');
    }
};

clearCache();
