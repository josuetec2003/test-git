const gulp = require('gulp')

gulp.task('reload', () => {
    nodemon({
	script: 'mac.js'
    })
})