var gulp = require("gulp");
var uglify = require('gulp-uglify-es').default;
var sass = require("gulp-sass");
var concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
var pump = require('pump');



// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  "ie >= 8",
  "ie_mob >= 9",
  "ff >= 28",
  "chrome >= 32",
  "safari >= 6",
  "opera >= 21",
  "ios >= 6",
  "android >= 4.3",
  "bb >= 9"
];

gulp.task('uglify-error-debugging', function (cb) {
  pump([
    gulp.src('app/**/*.js'),
    uglify(),
    gulp.dest('./dist/')
  ], cb);
});

gulp.task("build-styles", function() {
  var pattern = [
    "./lib/resources/css/scss/reusables.scss",
    "./lib/resources/css/scss/about.scss",
    "./lib/resources/css/scss/contact-footer.scss",
    "./lib/resources/css/scss/header.scss",
    "./lib/resources/css/scss/javascript-ani.scss",
    "./lib/resources/css/scss/portfolio.scss",
    "./lib/resources/css/scss/skills.scss",
    "./lib/resources/css/scss/queries.scss"
  ];
  return (
    gulp
      .src(pattern)
      //compile sass
      .pipe(sass().on("error", sass.logError))
      //   combine sass files
      .pipe(concat("styles-min.css"))
      //auto-prefix css styles
      .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
      //minify the file
      .pipe(csso())
      //output
      .pipe(gulp.dest("dist/resources/css/"))
  );
});

gulp.task("compressJS", function(cb) {
  return gulp
    .src("lib/resources/javascript/*.js")
    .pipe(concat("main-min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/resources/javascript/"));
});

gulp.task("img-min", () =>
  gulp
    .src("lib/resources/css/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/resources/css/img/"))
);

gulp.task("watch", function() {
  gulp.watch("lib/resources/javascript/*.js", ["compressJS"]);
  gulp.watch("lib/resources/css/img/*", ["img-min"]);
  gulp.watch("lib/resources/css/scss/*.scss", ["build-styles"]);
});

gulp.task("default", ["img-min","uglify-error-debugging", "compressJS", "build-styles"]);
