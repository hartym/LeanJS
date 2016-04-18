# Configuration (override with environment)
NODE_BIN ?= node_modules/.bin
BABEL ?= $(NODE_BIN)/babel-node
DOCKER_SERVER ?= $(shell docker-machine ip)
DOCKER_IMAGE ?= rdorgueil/leanjs

# Phony targets (targets without matching file)
.PHONY: start build doc docker-build docker-run docker-run-bash lint test

# Start a development server.
# You need to run "npm install" before that.
start:
	npm run start

# Builds a production-ready release, under /build.
# It will be self contained, and it's the base of the docker image.
build:
	npm run build

# Install dependencies (dev + prod)
install:
	npm install

# Build the html documentation. Read the `doc` subdirectory's Makefile if you want more options than HTML.
doc:
	(cd doc; make html)

# Build a production docker image.
docker-build: build
	(cd build; NPM_CONFIG_REGISTRY=http://$(DOCKER_SERVER):8081/content/groups/npm/ docker build -t $(DOCKER_IMAGE) .)

# Runs the docker image (won't rebuild, you're responsible for triggering the builds).
docker-run:
	docker run -it -p 3000:3000 $(DOCKER_IMAGE)

# Drop a shell in the docker image, same rules as above for the builds.
docker-run-bash:
	docker run -it -p 3000:3000 $(DOCKER_IMAGE) bash

# Check coding standards
lint:
	$(NODE_BIN)/eslint config src test

# Run the test suite. For now, only client side tests are running, in a chrome browser.
test:
	$(NODE_BIN)/karma start config/karma.js | bin/faucet

