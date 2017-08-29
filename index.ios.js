//index.ios.js (place code here for IOS)
// components are a thing that produces some text or shape that can be rendered on device. We will create a collection of components.

// Import a library to help create a component
//Import statements are a part of ES6. No file gets access to any globar variable without import. 

import React from 'react';
//import text property from react library
// Only the root file(this file) uses 'AppRegisty'
import { Text, AppRegistry } from 'react-native';

// React - Knows how a component should behave
// knows how to take a bunch of components and make them work together

// React Native - knows how to take the output from a component and place it on the screen
// Provides default core components(image, text)




// Create a component
//JS6 is an extension of JS that looks a lot like HTML. Its a mask over vanilla JS.
const App = () => (
  <Text>Some Text</Text>
);

// In react, nothing gets wired up for you, you have to specfically tell react that you want to render it.
// Always create one component PER file.
// Always make sure every variable is defined.
// Try to make components reusable as possible.

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
