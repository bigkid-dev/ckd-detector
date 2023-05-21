var gulp = require("gulp");

const sass = require("gulp-sass")(require("sass"));

// gulp.task("default", function () {
//   return tsProject
//     .src("src/styles/**/*.scss")
//     .pipe(tsProject())
//     .js.pipe(gulp.dest("css"));
// });

function buildStyle() {
  return gulp
    .src("styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("styles/dist/css"));
}

function watchTask() {
  gulp.watch(["styles/**/*.scss"], buildStyle);
}

exports.default = gulp.series(buildStyle, watchTask);
