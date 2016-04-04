var gulp = require('gulp');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var less = require('gulp-less');
var uglify = require('gulp-uglify');

var source = require('vinyl-source-stream');

var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');

var browserSync = require('browser-sync').create();

var path = {
  build: 'build',
  jade: './app/**/*.jade',
  jade_build: 'index.html',
  less: './app/**/*.less',
  less_build: 'bundle.css',
  js: './app/app.jsx',
  js_build: 'bundle.js'
};

gulp.task('less', function() {
  return gulp.src(path.less)
      .pipe(concat(path.less_build))
      .pipe(less())
      .pipe(gulp.dest(path.build))
      .pipe(browserSync.stream());
});

gulp.task('jade', function() {
  gulp.src(path.jade)
      .pipe(jade())
      .pipe(gulp.dest(path.build))
      .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: path.build
    }
  });

  gulp.watch(path.less, ['less']);
  gulp.watch(path.jade, ['jade']);

  var watcher = watchify(browserify({
    entries: [path.js],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.js_build))
      .pipe(gulp.dest(path.build))
      .pipe(browserSync.stream())
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.js_build))
    .pipe(gulp.dest(path.build))
    .pipe(browserSync.stream());
});

gulp.task('js', function(){
    browserify({
      entries: [path.js],
      transform: [reactify],
      extensions: ['.jsx'],
    })
    .bundle()
    .pipe(browserSync.stream());
});


gulp.task('default', ['jade', 'js', 'less', 'watch']);