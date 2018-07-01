const util = require('gulp-util')

const CALENDAR_API = 'https://ux-google-spreadsheet-api-oyeaabfqck.now.sh'

module.exports = {
    browserify: {
        isDebug: !util.env.production === false
    },
    clean: {
        assets: 'dist/assets/*',
        browserConfig: 'dist/browserconfig.xml',
        cname: 'dist/CNAME',
        css: 'dist/css/*',
        html: 'dist/**/*.html',
        js: 'dist/js/*',
        manifest: 'dist/manifest.json',
        sw: 'dist/sw.js'
    },
    dest: {
        assets: 'dist/assets',
        browserConfig: 'dist/',
        cname: 'dist/',
        css: 'dist/css',
        html: 'dist/',
        js: 'dist/js',
        manifest: 'dist/',
        pkg: './'
    },
    envify: {
        CALENDAR_API
    },
    eslint: {
        files: 'src/js/**/*.js'
    },
    isProduction: util.env.production,
    htmlminOptions: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
    },
    src: {
        assets: 'src/assets/**/*.*',
        browserConfig: 'src/browserconfig.xml',
        cname: 'src/CNAME',
        css: 'src/css/main.css',
        html: ['src/*.html', '!src/blog.html'],
        js: 'src/js/*.js',
        manifest: 'src/manifest.json',
        pkg: 'package.json',
        root: 'src/'
    },
    staticServer: {
        dir: './dist',
        name: 'ixda-la-plata-calendar'
    },
    stylelint: {
        css: 'src/css/**/*.css'
    },
    sw: {
        file: 'dist/sw.js',
        runtimeCaching: [CALENDAR_API]
    },
    watch: {
        css: 'src/css/*.css',
        html: 'src/**/*.html',
        js: 'src/js/**/*.js'
    }
}