DOCKER_IMAGE=rdorgueil/leanjs
.PHONY: start build docker-build docker-run docker-run-bash

# Start a development server.
# You need to run "npm install" before that.
start:
	npm run start

# Builds a production-ready release, under /build.
# It will be self contained, and it's the base of the docker image.
build:
	npm run build

# Build a production docker image.
docker-build: build
	(cd build; docker build -t $(DOCKER_IMAGE) .)

# Runs the docker image (won't rebuild, you're responsible for triggering the builds).
docker-run:
	docker run -it -p 3000:3000 $(DOCKER_IMAGE)

# Drop a shell in the docker image, same rules as above for the builds.
docker-run-bash:
	docker run -it -p 3000:3000 $(DOCKER_IMAGE) bash

