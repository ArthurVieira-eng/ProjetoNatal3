import React from "react"; 
import Tree from './Tree';
import OrnamentPanel from './OrnamentPanel';
import './Room.css'; 

export default function Room() {
    return(
        <div className="room">
        <Tree /> 
        <OrnamentPanel /> 
        </div>
    );
}
