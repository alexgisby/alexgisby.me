server:
	NODE_ENV=development node_modules/.bin/babel-watch --presets react,es2015 bin/www

watch:
	gulp watch

webpack:
	gulp webpack

sass:
	gulp sass
