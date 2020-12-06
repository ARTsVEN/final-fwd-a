import React from 'react';
import axios from 'axios';
import { Markup } from 'interweave';
	

class Info extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			success: false
		}
	}

	// window.location.href.split('/')[4]

	componentDidMount(){
		axios.get(`http://api.tvmaze.com/shows/${window.location.href.split('/')[4]}`)
		.then(res => {
			const result = res.data;
			this.setState({
				success: true,
				hasil: result
			});
		})
	}

	render(){	
		if(this.state.success === true){	
			
			return(
				<div className="card mb-3 m-3">
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src={this.state.hasil.image.original} className="card-img" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title"><b>Judul : </b>{this.state.hasil.name}</h5><br></br>
								<p className="card-text"><b>Ringkasan : </b><Markup content={this.state.hasil.summary} /></p><br></br>
								<p className="card-text"><b>Type   :</b> {this.state.hasil.type}</p><br></br>
								<p className="card-text"><b>Bahasa :</b>  {this.state.hasil.language}</p>
								<br></br>
								<p className="card-text"><b>Ditayangkan pada :</b>  {this.state.hasil.premiered}</p>
							</div>
						</div>
					</div>
				</div>
			)
			
			
		}
		else{
			return(
				<div className="card mb-3 m-3">
					<h2>.</h2>
				</div>
			)
		}
	}
}


export default Info;