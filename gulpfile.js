var gulp = require('gulp');

var compass = require('gulp-compass');
var browserSync = require('browser-sync');

function swallowError(error) {
  console.log(error.toString());
  this.emit('end');
}

var paths = {
  sass: 'sass/**/*.scss',
  html: '*.html',
  images: 'src/**/*'
};

gulp.task('compass', function() {
  return gulp.src(paths.sass)
  .pipe(compass({
    css: 'public/css',
    sass: 'sass',
  }))
  .on('error', swallowError)
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function() {
  gulp.src(paths.html)
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compass']);
  gulp.watch(paths.html, ['bs-reload']);
});

gulp.task('default', ['watch', 'compass', 'browser-sync']);
