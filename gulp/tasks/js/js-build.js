const babelify = require('babelify')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const envify = require('envify/custom')
const es = require('event-stream')
const glob = require('glob')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const yoYoify = require('yo-yoify')

module.exports = function(config) {
    return function(done) {
        glob(config.src.js, (err, files) => {
            if (err) done(err)

            var tasks = files.map(entry => {
                const bundler = browserify({
                    debug: config.browserify.isDebug,
                    entries: entry,
                    transform: [
                        babelify.configure({
                            presets: ['env']
                        }),
                        envify(config.envify),
                        yoYoify
                    ]
                })
                const bundleName = entry.substring(entry.lastIndexOf('/') + 1)

                return bundler
                    .bundle()
                    .pipe(source(bundleName))
                    .pipe(buffer())
                    .pipe(gulpif(!config.isProduction, sourcemaps.init({ loadMaps: true })))
                    .pipe(gulpif(config.isProduction, uglify()))
                    .pipe(gulpif(!config.isProduction, sourcemaps.write('./')))
                    .pipe(gulp.dest(config.dest.js))
            })

            es.merge(tasks).on('end', done)
        })
    }
}
