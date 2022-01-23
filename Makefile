BIN_DIR=node_modules/.bin
GATSBY=${BIN_DIR}/gatsby
PRETTIER=${BIN_DIR}/prettier
ESLINT=${BIN_DIR}/eslint

.PHONY:
install:
	npm install

.PHONY: lint
lint:
	${ESLINT} --fix src

.PHONY: format
format:
	${PRETTIER} --write --ignore-path .gitignore .

.PHONY: develop
develop:
	${GATSBY} develop

.PHONY: build 
build:
	${GATSBY} build

.PHONY: serve
serve:
	${GATSBY} serve

.PHONY: clean 
clean:
	${GATSBY} clean 
	