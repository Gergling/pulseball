module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-template');

    var paths = require('./config').paths;

    return {
        'process-html-template': {
            options: {
                data: {
                    paths: {
                        css: paths.css.vendor.concat(paths.css.src),
                        js: paths.js.vendor.concat(paths.js.src)
                    }
                }
            },
            files: {
                'index.html': ['src/template/index.html.tpl']
            }
        }
    };
};
