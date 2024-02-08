# Homes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Prerequisites

Before running the project, ensure you have the following installed:

### Node.js

This project requires Node.js to run. Download and install Node.js from [https://nodejs.org/](https://nodejs.org/). Node.js 14.x or later is recommended. This project uses Node.js v20.11.0

You can check your Node.js installation by running:

```bash
node --version
```

### Angular CLI

After installing Node.js, install the Angular CLI globally using npm by running:

```bash
npm install -g @angular/cli
```

This will allow you to run Angular commands such as ng serve and ng build.

You can verify your Angular CLI installation by checking its version:

```bash
ng --version
```

### JSON Server

To mock REST API responses, json-server is used. Install it globally using npm:

```bash
npm install -g json-server
```

This setup ensures you have all necessary tools to run and develop the project efficiently.

## Installing NPM Packages

After cloning the project and ensuring all prerequisites are installed, navigate to the project directory in your terminal and run the following command to install the required npm packages:

```bash
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running mock backend server

In a separate terminal, start json-server to watch the db.json file at the root of the project:

```bash
json-server db.json
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.