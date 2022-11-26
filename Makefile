.DEFAULT_GOAL := build
build:
	cd distill;npm run build
	cp distill/dist/template.* ./

install:
	sudo rm -rf /var/www/ai-music/*
	sudo cp -r *.html *.js *.js.map book blog /var/www/ai-music/
