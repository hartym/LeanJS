DOCKER_IMAGE=rdorgueil/leanjs
.PHONY: docker-build docker-run

docker-build:
	npm run build
	(cd build; docker build -t $(DOCKER_IMAGE) .)

docker-run:
	docker run -it -p 3000:3000 $(DOCKER_IMAGE)
