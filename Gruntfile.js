module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        template: require('./src/grunt/template')(grunt),
        jasmine: require('./src/grunt/jasmine')(grunt)
    });

    grunt.registerTask('default', [ 'build' ]);

    grunt.registerTask('build', [
        'template' // Build the template
    ]);
};
