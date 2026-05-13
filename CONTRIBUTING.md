This file contains instructions for developers.

Note that this application is based on our [cookiecutter webapp deluxe template](https://github.com/CentreForDigitalHumanities/cookiecutter-webapp-deluxe); the instructions below come from the general repository.

However, unlike most of our applications, digital ATLAS works without a backend or database: all necessary data is included in the frontend. There is a python `data` module to pre-collect the data.

## Before you start

You need to install the following software:

 - Python >= 3.8
 - virtualenv
 - Node.js >= 22
 - Yarn
 - [WebDriver][2] for at least one browser (only for functional testing)
 - WSGI-compatible webserver (deployment only)


[1]: https://wiki.python.org/moin/WindowsCompilers
[2]: https://pypi.org/project/selenium/#drivers


## How it works

This project integrates four isolated subprojects, each inside its own subdirectory with its own code, package dependencies and tests:

- **data**: reads the Excel sheet with all the collected data and exports it to a format which can be used by the frontend

 - **frontend**: the client side web application based on [Angular](https://angular.io)


## Development

### Quickstart

First time after cloning this project:

```console
$ cd frontend
$ yarn
$ yarn build
```

Running the application in [development mode][8] (hit ctrl-C to stop):

```console
$ yarn start
```

This will run the frontend and watch all source files for changes. You can visit the frontend on http://localhost:4200/.


### Commands for common tasks

The `package.json` next to this README defines several shortcut commands to help streamline development. Most commands may be regarded as implementation details of other commands, although each command could be used directly. Below, we discuss the commands that are most likely to be useful to you. For full details, consult the `package.json`.

Install the pinned versions of all package dependencies in all subprojects:

```console
$ yarn
```

Run frontend in [production mode][8]:

```console
$ yarn start-p
```

Run *all* tests (mostly useful for continuous integration):

```console
$ yarn test
```

Manage the frontend package dependencies:

```console
$ yarn fyarn (add|remove|upgrade|...) (PACKAGE ...) [OPTIONS]
```



### Notes on Python package dependencies

The data package is Python-based and package versions are pinned using [pip-tools][13].

[13]: https://pypi.org/project/pip-tools/

### Development mode vs production mode

The purpose of development mode is to facilitate live development, as the name implies. The purpose of production mode is to simulate deployment conditions as closely as possible, in order to check whether everything still works under such conditions. A complete overview of the differences is given below.

dimension  |  Development mode  |  Production mode
-----------|--------------------|-----------------
command  |  `yarn start`  |  `yarn start-p`
frontend server (angular-cli)  |  serves  |  watch and build
frontend sourcemaps  |  yes  |  no
frontend optimization  |  no  |  yes


## Deployment

The frontend application has a section dedicated to deployment in its own README. You should read this section entirely before proceeding.
