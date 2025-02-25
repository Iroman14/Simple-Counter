import React from "react";
import ReactDom from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo, faClock } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap';

import '../styles/index.css'

function SimpleCounter (props) {
    return (
        <div className="Counter"> 
            <div className="Clock"> 
                <FontAwesomeIcon icon={faClock}/>
            </div>
            <div className="hours">
                {props.hours % 10}
            </div>
            <div className="hour">
                {props.hour % 10}
            </div>  
            <div className="minutes">
                {props.minutes % 10}
            </div>
            <div className="minute">
                {props.minute % 10}
            </div>
            <div className="seconds">
                {props.seconds % 10}
            </div>
            <div className="second">
                {props.second % 10}
            </div>
        </div> 
    );
};

export default SimpleCounter;