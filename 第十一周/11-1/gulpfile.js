//引入gulp及其组件
var gulp    = require('gulp'),                 //基础库
    imagemin = require('gulp-imagemin'),       //图片压缩
    sass = require('gulp-ruby-sass'),          //sass
    minifycss = require('gulp-minify-css'),    //css压缩
    jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),          //合并文件
    clean = require('gulp-clean'),             //清空文件夹
   
    tinylr = require('tiny-lr'),               //livereload
    server = tinylr(),
    port = 35729,
    livereload = require('gulp-livereload'); 
       //livereload

// HTML处理
gulp.task('html', function() {
    var htmlSrc = '*.html',
        htmlDst = 'dist/';  //dist为发布环境

    gulp.src(htmlSrc)
       // .pipe(livereload(server))
        .pipe(gulp.dest(htmlDst))
});

// 样式处理
gulp.task('sass', function () {
	return sass('Stylesheets/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/css'));
    /*var cssSrc = 'Stylesheets/*.scss',
        cssDst = 'dist/css';

    gulp.src(cssSrc)
        .pipe(sass({ style: 'expanded',}))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        //.pipe(minifycss())
       // .pipe(livereload(server))
        .pipe(gulp.dest(cssDst));
        */
});

// 图片处理
gulp.task('images', function(){
    var imgSrc = 'Images/**',
        imgDst = 'dist/images';
    gulp.src(imgSrc)
        .pipe(imagemin())
      //  .pipe(livereload(server))
        .pipe(gulp.dest(imgDst));
})

// js处理
gulp.task('js', function () {
    var jsSrc = 'Scripts/*.js',
        jsDst ='dist/js';

    gulp.src(jsSrc)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
      //  .pipe(livereload(server))
        .pipe(gulp.dest(jsDst));
});

// 清空图片、样式、js
//gulp.task('clean', function() {
//   gulp.src(['./dist/css', './dist/js', './dist/images'], {read: false})
//       .pipe(clean());
//});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
//gulp.task('default', ['clean'], function(){
//    gulp.start('html','css','images','js');
//});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

    server.listen(port, function(err){
        if (err) {
            return console.log(err);
        }

        // 监听html
        gulp.watch('*.html', function(event){
            gulp.run('html');
        })

        // 监听css
        gulp.watch('Stylesheets/scss/*.scss', function(){
            gulp.run('css');
        });

        // 监听images
        gulp.watch('Images/**', function(){
            gulp.run('images');
        });

        // 监听js
        gulp.watch('Scripts/*.js', function(){
            gulp.run('js');
        });

    });
});