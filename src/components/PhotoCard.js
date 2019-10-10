import React from "react";

const PhotoCard = props => {
    return ( <
        div className = "daily_photo" >
        <
        img src = { props.url }
        alt = "" / > < /
        div >
    );
};

export default PhotoCard;