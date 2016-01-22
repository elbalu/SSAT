"use strict";

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX
var gls = require('gulp-live-server');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './js/*.html',
        js: './js/**/*.js',
        images: './css/images/*',
        css: [
            './css/bootstrap.css',
            './css/style.css',
            './css/font.css',
            './css/atlanticfont.css',
            './css/font-awesome.css',
            './css/na.css',
            './bower_components/bootstrap-select/dist/css/bootstrap-select.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};


// gulp.task('js', function() {
//     browserify(config.paths.mainJs)
//         .transform(reactify)
//         .bundle()
//         .on('error', console.error.bind(console))
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest(config.paths.dist + '/scripts'))
//         .pipe(connect.reload());
// });

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

// gulp.task('server', function() {
//     var server = gls.new('../nodeApp/app.js');
//     server.start();
// });

gulp.task('server', function() {
    nodemon({
        script: "./../bin/www"
    })
})

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(lint({
            config: 'eslint.config.json'
        }))
        .pipe(lint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.server, ['server']);
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['server', 'css', 'lint', 'watch']);
