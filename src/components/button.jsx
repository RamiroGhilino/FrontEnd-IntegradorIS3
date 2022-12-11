import React from "react";

export default function Button ({id, className, onClick, value}){
    return <button id={id} className={className} onClick ={onClick}> <span> {value} </span> </button>
}
