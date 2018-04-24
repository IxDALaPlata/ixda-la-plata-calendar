const gulp = require('gulp')
const gulpif = require('gulp-if')
const htmlmin = require('gulp-htmlmin')
const injectSvg = require('gulp-inject-svg')
const rename = require('gulp-rename')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.blog.tempHTML)
            .pipe(
                rename(function(path) {
                    path.basename = path.basename.substring(path.basename.indexOf('-') + 1)
                })
            )
            .pipe(injectSvg({ base: 'src/' }))
            .pipe(gulpif(config.isProduction, htmlmin(config.htmlminOptions)))
            .pipe(gulp.dest(config.dest.blog))
    }
}
