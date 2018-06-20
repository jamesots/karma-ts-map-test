var path = require('path');

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],

        basePath: path.resolve(__dirname),

        files: [
            'build/js/*.js',
            'test/*.ts'
        ],

        jsdom: {
            pretendToBeVisual: true,
            resources: 'usable',
            runScripts: 'dangerously'
        },

        preprocessors: {
            'build/js/*.js': 'coverage',
            'test/*.ts': 'karma-typescript'
        },

        karmaTypescriptConfig: {
            tsconfig: 'test/tsconfig.json'
        },

        coverageReporter: {
            type: 'html',
            dir: 'coverage',
            subdir: '.'
        },

        reporters: [
            'progress',
            'karma-typescript',
            'coverage'
        ],

        plugins: [
            'karma-jsdom-launcher',
            'karma-coverage',
            'karma-jasmine',
            'karma-typescript'
        ],

        browsers: ['jsdom'],

        singleRun: true
    })
}