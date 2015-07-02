var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
// 如果直接执行gulp 默认会在task里面找gulp命令
gulp.task('default',function(){
  gulp.src('assets/javascripts/*.js')
  .pipe(uglify())
  .pipe(concat('app.js'))
  .pipe(gulp.dest('build'))
})
