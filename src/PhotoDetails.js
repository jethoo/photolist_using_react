import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class PhotoDetails extends React.Component {
	state={
		photoDetails: {}
	};

	componentDidMount() {
		const {match} = this.props; //match should be inside {}, because it's contains object properties.
		axios
		.get(
			`https://jsonplaceholder.typicode.com/photos/${match.params.photo_id}` //can check in console, that this.props or say PhotoDetails.props or say PhotoDetails class properties are 
		) // history, location and match . And inside match and in params , there is photo_id.
		.then((response) => {
			this.setState({ // inside parenthesis, there is curly braces becoz you are sending object inside.
				photoDetails: response.data
			}) //always when using object inside, you must have {}
		})
	}



	render() {

		const { photoDetails } = this.state;

		return(
			<div className="row">
			   <div>

			   	 <NavLink to="/"> Back </NavLink>

			   </div>

				<div key={photoDetails.id} className="col s4 m4">
  					<div className="card">
    				<div className="card-image">
      				<img src={photoDetails.thumbnailUrl} alt="thumbnailUrl"/>
      				<span className="card-title">{photoDetails.title}</span>
   				</div>
    							
  				</div>
				</div>
			</div>
			);
					
			
	
	}
}

export default PhotoDetails;