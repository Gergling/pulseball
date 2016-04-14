module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    var paths = require('./config').paths;

    return {
        options: {
            helpers: 'node_modules/angular-mocks/angular-mocks.js',
            specs: 'src/spec/unit/**/*.js',
            vendor: paths.js.vendor
        },
        client: {
            src: paths.js.src
        }
    };
};
