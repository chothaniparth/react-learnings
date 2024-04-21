import React from "react";

export const PostCard = (props)=>{
    return (
        <div className="post-card">
            <img src={props.img} alt="imagexs"></img>
            <h3>{props.title}</h3>
        </div>
    )
}   