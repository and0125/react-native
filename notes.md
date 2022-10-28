# React Native notes.

## Project Setup

Used blank managed template from expo to start project.

- initialize with: `expo init <project_name>`.

uses yarn to install packages.

## Project Setup - Files

- assets: any asset we want to bundle with the app. This is images, audio files, songs, etc. that the app will reference.
- App.js: where we start from; uses a View and Text elements, instead of the raw HTML div components like in react. React uses function components instead of class components.

App.js has a styles constant that is css like, and it transfers the properties to the view its associated to.


The View component is mapped to a UIView on iOS, and mapped to AndroidView on Android. This makes the app platform independent. This is how these apps are actually native apps when built.


## Additional Configuration

seems to require the installation of the following packages to run the application in the web browser:

`npx expo install react-native-web@~0.18.7 react-dom@18.0.0  @expo/webpack-config@0.17.0`

Also is useful to install react development tools I think:

`npm install --save-dev react-devtools`.

Also need to install `npm install -g sharp-cli`.

All these packages work together to present the web-based version of the app, which is useful for local development.

There's the Expo app which can help you view the application from your phone as a simulator.

It's best to start the application with `npx expo start` so that the warning doesn't appear.

Also seems to need the following `npx expo install @expo/webpack-config@^0.17.0`.

All of the above was necessary to setup the app, and then you have to run it with the `w` command to start the server in the browser.

**NOTE**: switched to a new video.
