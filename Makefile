server:
	NODE_ENV=development node_modules/.bin/babel-watch --presets react,es2015 bin/www

watch:
	gulp watch

webpack:
	./node_modules/.bin/webpack -p

sass:
	gulp sass

build: webpack sass
	NODE_ENV=production node_modules/.bin/babel --presets react,es2015 app --out-dir build/app
	rm -rf build/app/views
	cp -rp app/views build/app/views
	claudia generate-serverless-express-proxy --express-module build/app/js/server

deploy: build
	claudia create --handler lambda.handler --deploy-proxy-api --region eu-west-1

destroy:
	claudia destroy
