import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


//component will mount gets/loads immediately.
//class level property
	//set initial state(empty list of albums)
	// Rules of State
	// - Definition of state: a plain javascript object to record and respond to user-triggered events.
	// - When we need to update what a component shows, call `this.setState`
	// - Only change state with `setState`, do not do `this.state = 123 or something`
	// - Difference between prop and state(props are parent to child communication and state is for component internal record keeping)
	// Whenver you need to reference any javascript inside JSX you use brackets{}.

class AlbumList extends Component {

	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data })); //udpate date album state after fetching data.
	}
// Key property must be unique and must be the same value and must be the same across rerenders of the list.

	renderAlbums() {
		return this.state.albums.map(album =>
			//pass in prop album, make self closing
			//name of variable does not have to be the same as prop, so data={album} or something.
 			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		console.log(this.state);

		return (
			<View>
			{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;