const gulp = require('gulp');
const awspublish = require('gulp-awspublish');
const cloudfrontInvalidateAwsPublish = require('gulp-cloudfront-invalidate-aws-publish');

gulp.task('publish', () => {
  const publisher = awspublish.create({
		region: 'us-west-2',
		params: {
			Bucket: 'tyc.vision100it.org'
		}
	});

	const headers = {
		'Cache-Control': 'max-age=315360000, no-transform, public'
	};

	const cfSettings = {
		distribution: 'E22FJ7AIIU02KZ'
	};
  
  return gulp.src('./build/**/*')
    .pipe(publisher.publish(headers))
    .pipe(publisher.sync())
    .pipe(cloudfrontInvalidateAwsPublish(cfSettings))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});

gulp.task('default', ['publish']);