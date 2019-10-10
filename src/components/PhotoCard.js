import React from "react";

const PhotoCard = props => {
    return ( <
        div className = "daily_photo" >
        <
        img src = { props.url }
        alt = "" / >
        <
        h2 > { props.title } < /h2> <
        p > { props.copyright } < /p> <
        p > { props.date } < /p> <
        p className = "description" > {
            props.explanation
        } < /p> < /
        div >
    );
};

export default PhotoCard;