var gulp = require('gulp')
var standard = require('gulp-standard')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var cleanCSS = require('gulp-clean-css')
var cssBase64 = require('gulp-css-base64')
var path = require('path')
var notify = require('gulp-notify')
var inlinesource = require('gulp-inline-source')
var browserSync = require('browser-sync')
var imagemin = require('gulp-imagemin')
var del = require('del')
var cache = require('gulp-cache')
var uglify = require('gulp-uglify')
var autoprefixer = require('gulp-autoprefixer')
var runSequence = require('run-sequence')

// Task to lint JavaScript
gulp.task('standard', function () {
  return gulp.src(['./src/js/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      breakOnWarning: true,
      showRuleNames: true,
      showFilePath: true,
      quiet: true
    }))
})

// Task to compile SCSS
gulp.task('sass', function () {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: false,
      paths: [ path.join(__dirname, 'scss', 'includes') ]
    })
    .on('error', notify.onError(function (error) {
      return 'Failed to Compile SCSS: ' + error.message
    })))
    .pipe(cssBase64())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/css/'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(notify('SCSS Compiled Successfully :)'))
})

// Task to Minify JS
gulp.task('jsmin', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
})

// Minify Images
gulp.task('imagemin', function () {
  return gulp.src('./src/img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('./dist/img'))
})

// BrowserSync Task (Live reload)
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: './src/'
    }
  })
})

// Gulp Inline Source Task
// Embed scripts, CSS or images inline (make sure to add an inline attribute to the linked files)
// Eg: <script src="default.js" inline></script>
// Will compile all inline within the html file (less http requests - woot!)
gulp.task('inlinesource', function () {
  return gulp.src('./src/**/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./dist/'))
})

// Gulp Watch Task
gulp.task('watch', ['browserSync'], function () {
  gulp.watch('./src/scss/**/*', ['sass'])
  gulp.watch('./src/**/*.html').on('change', browserSync.reload)
})

// Gulp Clean Up Task
gulp.task('clean', function () {
  del('dist')
})

// Gulp Default Task
gulp.task('default', ['watch'])

// Gulp Build Task
gulp.task('build', function () {
  runSequence('clean', 'standard', 'sass', 'imagemin', 'jsmin', 'inlinesource')
})
