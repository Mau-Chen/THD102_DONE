const{src,dest,series,parallel,watch}=require("gulp");function task(s){console.log("gulp ok"),s()}function taskA(s){console.log("taskA"),s()}function taskB(s){console.log("taskB"),s()}function img_copy(){return src(["images/*.*","images/**/*.*"]).pipe(dest("dist/images"))}exports.a=task,exports.sync=parallel(taskA,taskB),exports.async=series(taskA,taskB);const cleanCSS=require("gulp-clean-css");function minify(){return src("css/*.css").pipe(cleanCSS()).pipe(dest("dist/css"))}exports.cssmini=minify;const uglify=require("gulp-uglify");function minijs(){return src(["js/*.js","js/**/*.js"]).pipe(uglify()).pipe(dest("dist/js"))}exports.js=minijs;const sass=require("gulp-sass")(require("sass")),sourcemaps=require("gulp-sourcemaps"),autoprefixer=require("gulp-autoprefixer");function styleSass(){return src("./sass/*.scss").pipe(sourcemaps.init()).pipe(sass.sync().on("error",sass.logError)).pipe(autoprefixer({cascade:!1})).pipe(sourcemaps.write()).pipe(dest("./dist/css"))}exports.style=styleSass;const fileinclude=require("gulp-file-include");function includeHTML(){return src("*.html").pipe(fileinclude({prefix:"@@",basepath:"@file"})).pipe(dest("./dist"))}function watchfile(){watch(["*.html","layout/*.html"],includeHTML),watch(["sass/*.scss","sass/**/*.scss"],styleSass)}exports.html=includeHTML,exports.w=watchfile;const browserSync=require("browser-sync"),reload=browserSync.reload;function browser(s){browserSync.init({server:{baseDir:"./dist",index:"index.html"},port:3e3}),watch(["*.html","layout/*.html"],includeHTML).on("change",reload),watch(["sass/*.scss","sass/**/*.scss"],styleSass).on("change",reload),watch(["images/*.*","images/**/*.*"],img_copy).on("change",reload),watch(["js/*.js","js/**/*.js"],minijs).on("change",reload),s()}exports.default=browser;const imagemin=require("gulp-imagemin");function min_images(){return src(["images/*.*","images/**/*.*"]).pipe(imagemin([imagemin.mozjpeg({quality:70,progressive:!0})])).pipe(dest("dist/images"))}exports.pic=min_images;const babel=require("gulp-babel");function babel5(){return src(["js/*.js","js/**/*.js"]).pipe(babel({presets:["@babel/env"]})).pipe(dest("dist/js"))}exports.es=babel5;const clean=require("gulp-clean");function clear(){return src("dist",{read:!1,allowEmpty:!0}).pipe(clean({force:!0}))}exports.c=clear,exports.dev=series(parallel(includeHTML,styleSass,minijs,img_copy),browser),exports.online=parallel(includeHTML,styleSass,babel5,min_images);