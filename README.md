# Project-Test

## Getting Started

### Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.14.1

    $ npm --version
    6.13.4

### Installation

`npm install`

### Run

`npm run start:reload`

Then open [http://localhost:3042](http://localhost:3042). The start script is set to reload the app and keep the state just after a file is saved , no need for manual refresh.

### Build

`npm run build`

### Test

`npm run test`

[Jest](https://facebook.github.io/jest/docs/api.html) and [Enzyme](http://airbnb.io/enzyme/docs/api/) are the tools in place for unit testing the project code. Unit test files inside `src` must be named with `*.spec.js` or `*.test.js`.

### Folder structure and Suggested Workflow

This is the basic project folder structure

```javascript
...
  src
  └──assets // designed to contain general assets like images
  └──dataSource // designed to contain the requests file
  └──layout // designed to contain the layout components
    └──footerComponent // designed to contain the footers components layout.
    └──headerComponent // designed to contain the header components layout.
    └──sidebarComponent // designed to contain the sidebar components layout.
  └──pages // designed to contain application pages
    └──home // designed to contain components used in Home
    └──login // designed to contain components used in Login
    └──notFound // designed to contain components used to render the page not found
    └──sharedComponents // designed to contain shareable components among all other pages
  └──redux // designed to contain action and reducers to be used by redux
    └──actions // designed to contain files that make requests and trigger actions for the redux
    └──actiontypes // designed to contain the types of actions
    └──reducers // designed to contain redux reducers
    | store.js // Javascript file that is responsible for creating the app store
  └──routes // designed to contain the route settings
    | AuthRoute.jsx // React component that deals with authenticated routes
    | Routes.jsx // React component that deals with routes
  └──utils // designed to contain useful methods throughout the application
    | constants.js // designed to contain app constants
    | format.js // designed to contain methods for formatting data
    | helpers.js // designed to contain useful methods
    | masks.js // designed to contain masks for fields
    | response-messages.js // designed to contain standard messages
    | users.js // designed to contain methods for manage user data on local storage
    | validations.js // designed to contain methods for data validation
    ...
  | App.jsx // designed to be the entry point of the application
  ...
...
```

Basically, the entry point of the `index.js` project renders the `App` component that renders the pages components according to the route.

Given the structure of the project, the suggested workflow is:
1. Create a page component and, if necessary, the other components and elements that will depend on similar actions and reducers.
2. Link the page component created with the Route in the _Routes.jsx_ file.

---

## Languages & tools

### JavaScript

- [Webpack](https://webpack.js.org/) is used to aggregate JavaScript files for use in a browser.
- [Babel](https://babeljs.io/) is used as a JavaScript compiler and configurable transpiler.
- [ESLint](https://eslint.org/) is used to prevent JavaScript error.
- [React](http://facebook.github.io/react) is used for UI.
- [React Router](https://www.npmjs.com/package/react-router) is used to manipulate routes.
- [Redux](https://redux.js.org/) is used to manage application state.
- [Ant Design](https://ant.design/) is used as a library of previously stylized components to give visual identity to the application.
- [Jest](https://jestjs.io/) + [Enzyme](https://github.com/airbnb/enzyme) - is used for unit tests.

---

## Important details

### How does authentication work?

The application makes a request to the backend, and a response is returned with the access token.
This token is encrypted and stored in the localStorage, along with other authentication information.

### How does logout work?

To log out, simply remove the access token information from the localStorage. The Routes file will check if the user is authenticated, and if not, will redirect you to the login page.



