import React from 'react';
import axios from 'axios';
import { Markup } from 'interweave';
import {Link} from "react-router-dom";

class Main extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			success: false
		}
	}


	componentDidMount(){
		axios.get(`http://api.tvmaze.com/schedule/web?date=2020-05-29`)
		.then(res => {
			const result = res.data;
			this.setState({
				success: true,
				hasil: result
			});
			// console.log(result)
		})
	}


	render(){
		if(this.state.success){
			const test = this.state.hasil.filter((i) => i._embedded.show.image != null)
			// console.log(test)
			return(
				<div className="card-columns mt-3 p-2">
					{test.map((i) => 
							<div className="card shadow-sm">
								<Link to={`/info/${i._embedded.show.id}`}><img src={i._embedded.show.image.original} className="card-img-top" alt="..." /></Link>
								<div className="card-body">
									<h5 className="card-title">{i.name}</h5>
									<p className="card-text"><Markup content={i._embedded.show.summary} key={i.id} /></p>
								</div>
							</div>
					)}
				</div>
			)
		}
		else{
			return(
				<div>
					.
				</div>
			)
		}
	}
}


export default Main;