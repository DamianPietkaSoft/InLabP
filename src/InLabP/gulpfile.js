/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task("libs", () => {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**/*.js',
        'zone.js/dist/**',
        '@angular/**/bundles/**'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("wwwroot/lib"));

});

gulp.task("bootstrap", () => {
    return gulp.src([
        'bootstrap/**/*'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("wwwroot/lib"));

});


gulp.task("build", ['libs', 'bootstrap'], () => {
    console.log("Building the project ...");
});

