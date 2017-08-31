import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


//component will mount gets/loads immediately.

class AlbumList extends Component {
	//class level property
	//set initial state(empty list of albums)
	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data })); //udpate date album state after fetching data.
	}

	render() {

		console.log(this.state);
		return (
			<View>
				<Text>Album List!!!!</Text>
			</View>
		);
	}
}

export default AlbumList;