const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
  gulp.src(['app/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('sass', () => gulp.src('app/main.sass') // Берем источник
  .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
  .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
  .pipe(gulp.dest('app/')) // Выгружаем результата в папку app/css
  .pipe(browserSync.reload({ stream: true })));

gulp.task('browser-sync', () => { // Создаем таск browser-sync
  browserSync({ // Выполняем browserSync
    server: { // Определяем параметры сервера
      baseDir: 'app' // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});

gulp.task('watch', ['sass', 'browser-sync'], () => {
  gulp.watch('app/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
  gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
  gulp.watch('app/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});

gulp.task('default', ['watch']);
