import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import ws from "gulp-webserver";
import image from "gulp-image";
import gulp_sass from "gulp-sass";
import node_sass from "node-sass";

const sass = gulp_sass(node_sass);

const routes = {
  pug: {
    watch: "src/**/*.pug",
    src: "src/*.pug",
    dest: "build",
  },
  img : {
    src: "src/img/*",
    dest: "build/img",
  },
  scss: {
    watch: "src/scss/**/*.scss",
    src: "src/scss/style.scss",
    dest: "build/css"
  }
}

const pug = () =>
  gulp
    .src(routes.pug.src)
    .pipe(gpug())
    .pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build"]);

const webserver = () => 
  gulp
    .src("build")
    .pipe(ws({ livereload: true }));

const styles = () =>
  gulp
    .src(routes.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(routes.scss.dest));

const watch = () => {
  gulp.watch(routes.pug.watch, pug);
  gulp.watch(routes.scss.watch, styles);
}

const img = () =>
  gulp.src(routes.img.src)
    .pipe(image())
    .pipe(gulp.dest(routes.img.dest));

const prepare = gulp.series([clean, img]);

const assets = gulp.series([pug, styles]);

const postDev = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, postDev]);