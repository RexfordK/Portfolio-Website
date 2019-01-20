var gulp = require("gulp");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");

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

gulp.task("build-styles", function() {
  return (
    gulp
      .src([
        "./lib/resources/css/scss/style.scss",
        "lib/resources/css/scss/queries.scss"
      ])
      //compile sass
      .pipe(sass().on('error', sass.logError))
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

gulp.task('compressJS', function (cb) {
    return gulp.src("lib/resources/javascript/*.js")
        .pipe(concat("main-min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/resources/javascript/"))
  });

gulp.task("img-min", () =>
  gulp
    .src("lib/resources/css/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/resources/css/img/"))
);

gulp.task("default",["img-min","compressJS","build-styles"])