# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Check commands

> node --version
v18.17.0
> git --version
git version 2.27.0.windows.1
> npm --version
9.8.1

## Create the project

> npx create-react-app react-pages --template typescript
> cd  cd react-pages

## Install the gh-pages npm package

This will allow the deploy the project in github-pages.

> npm install gh-pages --save-dev

After it is installed following dependency will be recorded in package.json file.

```js

  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
```

## Adding deploy property to the script object of package.json:

'''json

  "scripts": {
    "predeploy":"npm run build",
    "deploy":"gh-pages -d build",
  }

'''

## Add a "remote" that points to the GitHub repository

## Install DevTool

> npm install @hookform/devtools -D

## Install React Hook Form

> npm install react-hook-form

## Debug Code and Fix

If the error persists, try to delete your:

- 'node_module' folder
- package-lock.json file
- run following command to clean npm cache:
  > npm cache clean --force
- install packages by
  > npm install
- then try to update npm by
  > npm update
  > npm audit fix
  > npm install -g npm@latest
  > npm audit fix --force
- Try using following package to update packages, but commit the current code into git.
  > npx npm-check-updates
    > npx ncu -u
    > npm install
  
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
