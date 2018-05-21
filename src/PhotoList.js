import React from 'react';
import axios from "axios";
import {NavLink} from 'react-router-dom';


class PhotoList extends React.Component {


	state = { //setting initial state, can be done without using constructor also
		photos: [],
		visiblePhotos: []
	};


	componentDidMount() { // ajax request is send, after a component is mount
		axios.get("https://jsonplaceholder.typicode.com/photos") //ajax request sent using axios
			.then((response) => {
				//console.log(response.data);
				this.setState({
					photos: response.data.slice(0,10), // got 5000 photos in reply from api of the above webpage.
					visiblePhotos: response.data.slice(0,10)
				})									  			// only used initial 10 photos.
			});
	}

	filterPhotos = () => {
		//console.log(this.filterText.value); 

		const filterPhotoList = this.state.photos.filter(photo => { //filter property used in photos stored in state.
			return photo.title.indexOf(this.filterText.value) !== -1; // and comparing those photo with the typed letters in input field
					//value of input field, is available through this.filterText.value using ref in the input type field, which only gives true value, 
					//by saying not equal to -1 means, only photos which match the typed letters. 
		});

		this.setState({
			visiblePhotos: filterPhotoList
		});

	}

	render() {  
		return <section>
				 <div className="row">
				 	<input type="text" className="col s4 m4" onChange={this.filterPhotos} ref={node => (this.filterText = node)}/>
				 	
				 	
				 	<button className="btn col s2 m2" onChange={this.filterPhotos}>Filter</button>
				 </div>

				  <div className="row">
					{this.state.visiblePhotos.map(photo =>{
						return(
							<div key={photo.id} className="col s4 m4">
  							<div className="card">
    							<div className="card-image">
      								<img src={photo.thumbnailUrl} alt="thumbnailUrl"/>
      								<span className="card-title">{photo.title}</span>
   								</div>
    							<div className="card-action">
      								<NavLink to={`/${photo.id}`}>This is a link</NavLink>
    							</div>
  							</div>
						 </div>
					  );
					})}
				 </div>
				</section>
	}
}
export default PhotoList;


///Note: Materialize.css library is used to easily provide design to the photos received. And to convert the css code
//from materialize.css to react.js, another website https://magic.reactjs.net/htmltojsx.htm is used.
//using ref, any dom element can be accessed, or any value can be accessed & used from the DOM.
