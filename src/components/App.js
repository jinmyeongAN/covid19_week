import React from "react";
import axios from "axios";
//import corona from "corona";

class App extends React.Component {
	state = {
		isloading: true,
		corona: []
	};

	get_corona = async () => {
	
	
		await axios.get('/korea/country/new/?serviceKey=process.env.REACT_APP_SERVICE_KEY').then((Response)=>{
    	console.log(Response);
		}).catch((Error)=>{
    	console.log(Error);
		})
	
	};

	componentDidMount(){
		this.get_corona();
	}

	render(){
		const { isloading } = this.state;
		return <div>{isloading ? "Loading..." : "We are ready!"}</div>
		
	}
	
	
	
  
}

export default App;
