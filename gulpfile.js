var pkg = require('./package.json'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  plumber = require('gulp-plumber'),
  rimraf = require('gulp-rimraf'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  through = require('through'),
  opn = require('opn'),
  ghpages = require('gh-pages'),
  path = require('path'),
  browserify = require('gulp-browserify'),
  debowerify = require('debowerify'),
  isDist = process.argv.indexOf('serve') === -1;


gulp.task('js', ['clean:js'], function() {
  return gulp.src('src/scripts/main.js')
    .pipe(isDist ? through() : plumber())
    .pipe(browserify({ transform: ['debowerify'], debug: !isDist }))
    .pipe(isDist ? uglify() : through())
    .pipe(rename('build.js'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('html', ['clean:html'], function() {
  return gulp.src('src/index.html')
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('md', ['clean:md'], function() {
  return gulp.src(['src/**/*.md', 'README.md'])
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('css', ['clean:css'], function() {
  return gulp.src('src/styles/main.styl')
    .pipe(isDist ? through() : plumber())
    .pipe(stylus({
      // Allow CSS to be imported from node_modules and bower_components
      'include css': true,
      'paths': ['./node_modules', './bower_components']
    }))
    .pipe(autoprefixer('last 2 versions', { map: false }))
    .pipe(isDist ? csso() : through())
    .pipe(rename('build.css'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('images', ['clean:images'], function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());
});

gulp.task('attachments', ['clean:attachments'], function() {
  return gulp.src(['src/attachments/**/*'])
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/attachments'))
    .pipe(connect.reload());
});

gulp.task('favicon', function() {
  return gulp.src(['favicon.ico'])
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('bower', function() {
  return gulp.src(['bower_components/**/*'])
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/bower_components'))
    .pipe(connect.reload());
});

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(rimraf());
});

gulp.task('clean:html', function() {
  return gulp.src('dist/index.html')
    .pipe(rimraf());
});

gulp.task('clean:md', function() {
  return gulp.src('dist/**/*.md')
    .pipe(rimraf());
});

gulp.task('clean:js', function() {
  return gulp.src('dist/build/build.js')
    .pipe(rimraf());
});

gulp.task('clean:css', function() {
  return gulp.src('dist/build/build.css')
    .pipe(rimraf());
});

gulp.task('clean:images', function() {
  return gulp.src('dist/images')
    .pipe(rimraf());
});

gulp.task('clean:attachments', function() {
  return gulp.src('dist/attachments')
    .pipe(rimraf());
});

gulp.task('connect', ['build'], function(done) {
  connect.server({
    root: ['dist'],
    livereload: true,
    port: 8081
  });

  opn('http://localhost:8081', done);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.md', ['md']);
  gulp.watch('README.md', ['md']);
  gulp.watch('src/styles/**/*.styl', ['css']);
  gulp.watch('src/images/**/*', ['images']);
  gulp.watch([
    'src/scripts/**/*.js',
    'bespoke-theme-*/dist/*.js' // Allow themes to be developed in parallel
  ], ['js']);
});

gulp.task('deploy', function(done) {
  ghpages.publish(path.join(__dirname, 'dist'), { logger: gutil.log }, done);
});

gulp.task('build', ['js', 'html', 'md', 'css', 'images', 'attachments', 'favicon' ]);
gulp.task('serve', ['connect', 'watch']);
gulp.task('default', ['serve']);
