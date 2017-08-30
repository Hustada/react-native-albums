//index.ios.js (place code here for IOS)
// components are a thing that produces some text or shape that can be rendered on device. We will create a collection of components.

// Import a library to help create a component
//Import statements are a part of ES6. No file gets access to any globar variable without import. 

import React from 'react';
//import text property from react library
// Only the root file(this file) uses 'AppRegisty'
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// REACT - Knows how a component should behave
//  knows how to take a bunch of components and make them work together

// React Native - knows how to take the output from a component and place it on the screen
// Provides default core components(image, text)

// FUNCTIONAL COMPONENT
//  - Used for presenting static data
//  - Can't handle fetching data
//  - Easy to write

    // EX. const Header () => {
    //   return <Text>Hi there!</Text>
    // }

//  CLASS BASED COMPONENTS - Used for dynamic sources of data
//  - Handles any datat that might change(fetching data, user events, etc)
//  - Knows when it gets rendered to the device(useful for data fetching)
//  - More code to write

      // EX. class Header extends Component {
      //   render() {
      //     return <Text>Hi There!</Text>
      //   }
      // }


// Create a component
//JS6 is an extension of JS that looks a lot like HTML. Its a mask over vanilla JS.

//Whenever we want to pass some data from app to child we use the props component
// self closing tag, pass in prop of 'headerText'
const App = () => (
 <View>
  <Header headerText={'Albums'} /> 
  <AlbumList />
 </View>
);



// In react, nothing gets wired up for you, you have to specfically tell react that you want to render it.
// Always create one component PER file.
// Always make sure every variable is defined.
// Try to make components reusable as possible.

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
