module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-template');
    
    var expand = function (blobs) {
        return grunt.file.expand(blobs.map(function (blob) {
            return 'src/client/**/' + blob;
        }));
    };
    
    var paths = {
        css: {
            vendor: [
                'node_modules/bootstrap/dist/css/bootstrap.css'
            ],
            src: expand([
                '*.css'
            ]),
        },
        js: {
            vendor: [
                'angular/angular.js',
                'angular-ui-router/release/angular-ui-router.js',
                'jquery/dist/jquery.js',
                'bootstrap/dist/js/bootstrap.js'
            ].map(function (path) {
                return 'node_modules/' + path;
            }),
            src: expand([
                'module',
                '*'
            ].map(function (blob) {
                return blob + '.js';
            }))
        }
    };

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
