var gulp = require('gulp');

var compass = require('gulp-compass');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');

var paths = {
  sass: 'sass/*.scss',
  html: '*.html',
  images: 'src/**/*'
};

gulp.task('compass', function() {
  gulp.src(paths.sass)
  .pipe(compass({
    css: 'stylesheets',
    sass: 'sass'
  }))
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

gulp.task('imagemin', function() {
  gulp.src(path.images)
  .pipe(imagemin({optimizationLevel: 5}))
  .pipe(gulp.dest('images'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compass']);
  gulp.watch(paths.html, ['bs-reload']);
  gulp.watch(paths.images, ['imagemin']);
});

gulp.task('default', ['watch', 'compass', 'browser-sync', 'imagemin']);
