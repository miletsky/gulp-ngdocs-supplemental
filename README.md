# gulp-ngdocs-supplemental

Additional styling for [gulp-ngdocs](https://github.com/nikhilmodak/gulp-ngdocs)
generator.

## Usage

```bash
# Install
bower install git@github.com:miletsky/gulp-ngdocs-supplemental.git

# Update
bower update gulp-ngdocs-supplemental
```

Add additional style to the `styles` array in your ngdocs bundle:

```javascript
gulp.task('ngdocs', [], function () {
  var gulpDocs = require('gulp-ngdocs');
  var options = {
    scripts: ['..'],
    html5Mode: true,
    startPage: '/api',
    // Add the style like this
    styles: ['bower_components/gulp-ngdocs-supplemental/dist/style.css']
  }
  return gulp.src('path/to/src/*.js')
    .pipe(gulpDocs.process(options))
    .pipe(gulp.dest('./docs'));
});
```

## Development

```bash
# Run sample dev site
gulp serve
```
