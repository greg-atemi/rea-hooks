import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () =>{
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-187.jpg"
                                    secondaryImg="/static/speakers/col/Speaker-187.jpg"
                                    alt="pic1"/>
            &nbsp; &nbsp; &nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-1124.jpg"
                                    secondaryImg="/static/speakers/col/Speaker-1124.jpg"
                                    alt="pic2"/>
        </div>
    );
};

export default ImageChangeOnMouseOver;