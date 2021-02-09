var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("saas", function (done) {
  gulp.src("./scss/**/*.scss").pipe(sass()).pipe(gulp.dest("./styles"));
  done();
});
gulp.task("saas:watch", function (done) {
  gulp.watch("./scss/**/*.scss", ["saas"]);
  done();
});
gulp.task("default", function (done) {
  done();
});
gulp.task("watch", function () {
  gulp.watch("./scss/**/*/.scss", gulp.series("saas"));
});
function done() {
  console.log("Hello");
}
