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

## reusing components with Props

This is for making a component that is re-usable with different data, but has the same format. These may even have some different styles for selection. in this example, They were using different icons and words for different foods.

Props is a concept that makes the component re-usable.

For instance, the `style` inside the tag of an element is a prop. You pass data into the prop to adjust the component the way that we want to.

The `source` is also a prop.  Right now we hard code these into the files, but we can render them dynamically.

For any custom component we can give them custom props and call them whatever we want.

we can make custom props in the App.js file to use.

we grab props from what gets entered in the parentheses of the function we're defining for the component.

the initial way we did this is to define the props in the App.js file, but we want to do this in a better way.

## Flatlist rendering

This is the best way to render multiple re-usable components.

First we separate all the data for our components in an array. This could be done in the App.js file, or be sent from a database.

So instead of rendering the data with one component, you add a FlatList compoenent in App.js.

We also provide a `keyExtractor` to extract the key from the object in the array. This allows us to remove data from the array passed in easily, without having to re-render the entire list.

You might need to work with the styling of a flatlist with margins and stuff, but you would not put a view around the flatlist to do this. 

Instead, you would do this by extracting the index of the element in the flatlist. Each element in our array has an index and it can be extracted, and you can pass this in as a prop. 

Then you can do conditional expressions based on the elements index.  We did this and defined a tertiary (3 equal sign) prop in the CategoryItem component, so that we had a conditional rendering, one choice if the item was first (index 0) and another if the item is not first.

## State

Next we want to change the selection of the category based on the click event of the user.

This is done through the concept of state. The current state of your app may be that the burger category is selected, but when you click on dessert it is the active category, and the state has changed.

This is what state is, the current state of your application, and state is what can change and change the UI of the application.

State will be a search term, which is will have a default set. We have th ability to change the search term from one category to another. This will change the background color of the selected item.

You could use another prop to access the active state of your application but this would make changing the state difficult. This is because a variable can change, but our components don't re-render just because of this. So every time a state change happens, we need to re-render. By assigning this state change to a variable, we don't know when the state changes.

We use a built in hook from react called `useState` which is a proper way to manage the state of your application. 

Then we can update the state of the application based on user events.

## User Events

we want to handle the event of clicking, and this will color the background. There are plenty of events that react-native can handle, but we want to use click events.

Only two components that respond to a press event, the first is a button, and the second is touchable opacity.

We use TouchableOpacity for this use case.

This is because a button is limited; it can't be used with all the children we would want to. Buttons restrict the area a person can click on, and because of that, it's limiting. 

We want a touchable opacity because its not present visually, but we can wrap any component with touchable opacity, and handle clicks on anything contained within that touchable opacity.

## More Events and States

We can use these concepts to handle the search bar. 

What we want to do is to update the term searched for that effects the state of the category, from the user input in the search bar.

## Housekeeping

We did a lot within our App.js file with the flat list, and we can move that into its own component and then render it. 