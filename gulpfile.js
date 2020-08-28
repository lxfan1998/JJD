var {series,src,dest}=require("gulp");

var minifyCss=require("gulp-cssmin");
var minifyHtml=require("gulp-htmlmin");
var uglify=require("gulp-uglify");
var autoprefixer=require("gulp-autoprefixer");
var babel=require("gulp-babel");
var sass=require("gulp-sass");
var webserver=require("gulp-webserver");
var clean=require("gulp-clean");
const htmlmin = require("gulp-htmlmin");

function doCss(){
    return src("./origin/sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(dest("./origin/sass"));
}

function doJS(){
    return src("./origin/js/**/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest("./origin/js"));
}

function doHTML(){
    return src("./origin/**/*.html")
    .pipe(minifyHtml({
        collapseWhitespace:true
    }))
    .pipe(dest("./origin/"));
}

function doResource(){
    return src("./origin/resource/**/*.*")
    .pipe(dest("./origin/resource"));
}

function doClean(){
    return src("./publish/",{read:false,allowEmpty:true})
    .pipe(clean());
}

function webServer(){
    // 定位资源 
    gulp.src("./publish")
    .pipe(webserver({
        host: "localhost",
        port: 3001,
        livereload: true,
        open: "index.html",
    }));
}

module.exports.webserver=webserver;
module.exports.doResource=doResource;
module.exports=series(doClean,[doCss,doHTML,doJS,doResource],webserver);
