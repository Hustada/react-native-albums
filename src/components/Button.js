import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


// if you pass one component to another it will show up as 'props.children'
// "Touchable "" is just an fancy name for button with some user feedback
const Button = () => {
	return (
		<TouchableOpacity>
			<Text>Click Me!!!</Text>
		</TouchableOpacity>
	);
};



export default Button;
