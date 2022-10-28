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

## New Tutorial

https://www.youtube.com/watch?v=1oYw1uwDZb8

went with the expo setup as well.

Ran the application on our physical mobile device.

went over downloading Expo Go. We run `npm run start` to use the `expo start` command.

I ran this in tunnel mode and had to connect my phone to the same internet network for this to run properly on my phone.

## Exploring the Boilerplate code

Defines how our application looks currently.

The export default statement defines an App, which defines a function `App` that is being exported so it can be used in other files.

You can make updates to this file, and the rendering will reload as you make changes in Expo Go.

We replaced the standard App.js file with the code below:

```javascript
import { View, Text, StyleSheet}  from "react-native";


export default function App() {
  // this is how we start to render things in the App
  return (
    // elements in here are similar to html, but they are JSX
    <View style={styles.container}>
      <Text>This is all we need to run the app</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  }
})
```

You use the style sheets to style the View and text elements in any way you want to.

For the components, you can either make a start and end tag, or you can add the `/>` to the first tag to keep the code clean.

Note that the main App.js file comes with the Statusbar included, which renders the top part of the mobile device screen. The common icons, time, service, wifi, and battery life. So that rendering comes a bit standard.

## Components

The first react-native concept is components. This will be integral for development.

if you look at a home page of an app, you can see that the page is made up of several different parts. Some of these are repeated, some are not, and in order to build these parts you will need to build a custom component.

There are some native components (view, and text) but we'll create custom components that will be rendered by the App.js file.

We render custom components by importing them into the App.js file, and rendering them in order with single tags. 

We'll have the following components and more:

- header
- nav bar
- categories
- etc.

### creating first component -- Header

To create a component, create a `src` directory, then create a `component` folder within that.

once you do that, you create a file like `<component name>.js` where you will create the function that will return the JSX.

To use this component in the App.js file, you need to import it with:

- `import Component from "./src/components/<file name>`

To use the component, we use a single tag with the component name to render it:

- `<Compoment />`


**NOTE:** make sure you build the `src` folder in the directory of the project smh. This will cause problems, but if you create the folders with VS Code button, you may not have the proper directory selected to make them in.

## Adjusting Component - Header

We can manipulate the header now from the Header.js file.

We updated the JSX in this file to match the example text.

Note that to do multiple lines of text, you do not want to use two Text elements, because this will cause problems because there would be two parent elements with the same name.

Inside the parent element, you can have multiple elements, but you can't have multiple parent elements.

We use the View component as the `div` class, and can put multiple Text elments within it.

Then we can style the text so it matches the example, by creating a stylesheet.

We made the style sheet, but realized we don't have to style the text with margins, but can do it for the whole view.

## Interactive Components

Components can interact with the user, and we'll build a search function that the users can use. it won't be functional, but we'll build the component.

Created the `search.js` file for this.

To create a text input, we import the text input component from react-native package. Then render it in the app.

You'll be able to click this on the app rendered on the phone, it'll be on the line below the previous element (like right beneath it).

You can add a placeholder to the component, which will fill in text before the user types things in.

We also can use some expo vector icons to import a bunch of font libraries, which can style text as well.

We imported the FontAwesome icon library from `@expo/vector-icons`, but there are other libraries of icons available too. We got the magnifying glass for searching.

We then wanted to change the view to match the search bar with the curved edges and we did this with a style sheet. We updated the shadow the view to outline the search bar, and added padding to the search bar to bring the text further away from the search icon.

## Common Styles

Note that there are features that may be consistent in styles for several components.

When that happens you can extract these features to create a common styles.js file.

You do this by creating a new folder in the `src` folder called `common` and make a style.js file. which will export some common styles. 

This is useful for making container styles consistent.

You apply this like the constant styles, but you make a list of styles in the tag of the element.

**Note:** the app commonly goes out of sync, so the best thing you can do when you want to see new changes that aren't going through is to reboot the app from the command line, then reload the app.