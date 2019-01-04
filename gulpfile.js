var gulp = require("gulp");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("./lib/resources/css/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(gulp.dest("lib/resources/css"));
});

gulp.task('sass:watch', function () {
    gulp.watch('./lib/resources/css/scss/*.scss', ['sass']);
  });


