const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        '**/dist/',
    ],
    words: [
        ...baseConfig.words,
        'openapi',
    ],
};
