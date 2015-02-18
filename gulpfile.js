var gulp = require('gulp');

var compass = require('gulp-compass');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

function swallowError(error) {
  console.log(error.toString());
  this.emit('end');
}

var paths = {
  sass: 'src/sass/**/*.scss',
  js: [ 'src/js/**/*.js', 'src/js/**/*.jsx' ]
};

gulp.task('js', function() {
  return browserify({
    entries: './src/js/app.js',
    paths: [ './node_modules', './src/js' ]
  })
    .transform('reactify')
    .on('error', swallowError)
    .bundle()
    .on('error', swallowError)
    .pipe(source('./public/js/bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('compass', function() {
  return gulp.src(paths.sass)
  .pipe(compass({
    css: 'public/css',
    sass: 'src/sass',
  }))
  .on('error', swallowError)
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "public"
    }
  });
});

gulp.task('bs-reload', function() {
  gulp.src(paths.html)
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compass']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('build', ['compass', 'js']);
gulp.task('default', ['build', 'watch', 'browser-sync']);
