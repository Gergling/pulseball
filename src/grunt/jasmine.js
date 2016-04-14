module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    var paths = require('./config').paths;

    return {
        pivotal: {
            src: paths.js.src,
            options: {
                specs: 'src/spec/unit/**/*.js'
            }
        }
    };
};
