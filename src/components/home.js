import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="home-wrapper">
            <h2>Plular Sight Adminstration</h2>
            <p>React, Redux and React Router for ultra-responsive web apps</p>
            <Link to={'/about'} className="btn btn-primary"> {'Learn More'} </Link>
        </div>  );
    }
}
 
export default Home;