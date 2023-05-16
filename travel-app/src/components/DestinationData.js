import Ledakh from "../assets/ladakh.avif";
import Ledakh1 from "../assets/ladakh1.avif";
import Ledakh2 from "../assets/ladakh2.avif";
import Ledakh3 from "../assets/ladakh3.avif"; 
import { Component } from "react";
import "./Destination.css";
 class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        )
    }
 }
 export default DestinationData