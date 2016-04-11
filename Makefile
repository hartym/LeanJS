# Configuration (override with environment)
NODE_BIN ?= node_modules/.bin
BABEL ?= $(NODE_BIN)/babel-node
DOCKER_IMAGE ?= rdorgueil/leanjs

# Phony targets (targets without matching file)
.PHONY: start build docker-build docker-run docker-run-bash test

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

test:
	$(BABEL) test.js | $(NODE_BIN)/faucet
