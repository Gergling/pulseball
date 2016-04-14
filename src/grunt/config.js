var grunt = require('grunt');

var expand = function (blobs) {
    return grunt.file.expand(blobs.map(function (blob) {
        return 'src/client/**/' + blob;
    }));
};

module.exports = {
    paths: {
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
    }
};
