DOCKER_IMAGE=rdorgueil/leanjs
.PHONY: start build docker-build docker-run

start:
	npm run start

build:
	npm run build

docker-build: build
	(cd build; docker build -t $(DOCKER_IMAGE) .)

docker-run:
	docker run -it -p 3000:3000 $(DOCKER_IMAGE)
