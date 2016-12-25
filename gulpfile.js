var gulp = require('gulp'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    fs = require('fs');

gulp.task('sass', function () {
     return gulp.src('src/styles/style.scss')
            .pipe(sass({ style: "expanded" }))
            .pipe(gulp.dest("src/styles/"))
            .pipe(rename({suffix: '.min'}))
            .pipe(cssnano())
            .pipe(gulp.dest('src/styles/'))
});

gulp.task('minifyhtml', function () {
    return gulp.src('src/markup.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('src'))
});

gulp.task('build', ['minifyhtml', 'sass'], function () {
    gulp.src('src/script.js')
        .pipe(replace(/SRC_STYLE/, function (s) {
            var style = fs.readFileSync('src/styles/style.min.css', 'utf-8');
            return style;
        }))
        .pipe(replace(/SRC_MARKUP/, function (s) {
            var markup = fs.readFileSync('src/markup.min.html', 'utf-8');
            return markup;
        }))
        .pipe(rename('fork-me-baby.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    return gulp.watch(['src/**/*.html', 'src/**/*.scss', 'src/*.js'], ['build'])
            .on('change', function (event) {
                console.log('building...');
            });
});


gulp.task('default', ['build']);