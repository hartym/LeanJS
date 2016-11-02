# Configuration (override with environment)
NODE_BIN ?= node_modules/.bin
BABEL ?= $(NODE_BIN)/babel-node
DOCKER_SERVER ?= $(shell docker-machine ip)
DOCKER_IMAGE ?= rdorgueil/leanjs
GIT_CHANGES = $(shell git status --porcelain | wc -l)
VERSION ?= $(shell git describe)

# Utilities
DOCKER ?= $(shell which docker)
NPM ?= $(shell which yarn || which npm)

# Phony targets (targets without matching file)
.PHONY: start build doc docker-build docker-run docker-run-bash lint test

# Start a development server.
# You need to run "npm install" before that.
start:
	$(NPM) run start

# Builds a production-ready release, under /build.
# It will be self contained, and it's the base of the docker image.
build:
	$(NPM) run build

# Install dependencies (dev + prod)
install:
	$(NPM) install

# Removes anything that was generated, including uncommited changes and node_modules
clean:
	@if [ $(GIT_CHANGES) -gt 0 ]; then \
		echo "You have uncommited changes, aborting."; \
		exit 1; \
	fi
	git clean -fdx

# Build the html documentation. Read the `doc` subdirectory's Makefile if you want more options than HTML.
doc:
	(cd doc; make html)

# Build a production docker image.
docker-build: build
	(cd build; $(DOCKER) build -t $(DOCKER_IMAGE) .)
	$(DOCKER) tag $(DOCKER_IMAGE) $(DOCKER_IMAGE):$(VERSION)

# Runs the docker image (won't rebuild, you're responsible for triggering the builds).
docker-run:
	$(DOCKER) run -it -p 3080:3080 $(DOCKER_IMAGE):$(VERSION)

# Push current and latest version. TODO: don't push latest if it's not?
docker-push:
	$(DOCKER) push $(DOCKER_IMAGE):$(VERSION)
	$(DOCKER) push $(DOCKER_IMAGE):latest

# Drop a shell in the docker image, same rules as above for the builds.
docker-run-bash:
	$(DOCKER) run -it -p 3080:3080 $(DOCKER_IMAGE):$(VERSION) bash

# Check coding standards
lint:
	$(NODE_BIN)/eslint config src test

# Run the test suite. For now, only client side tests are running, in a chrome browser.
test:
	$(NODE_BIN)/karma start config/karma.js | bin/faucet

