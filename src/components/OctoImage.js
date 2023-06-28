import React from 'react';


export function OctoImage(props) {

    const src = props.src;
    
    console.log(src);

    return (
        <div className="octo-img__bg">
            <div className="octo-img__wrapper">
                <img className="octo-img__img" src={src} alt="-"/>
            </div>
        </div>
    )
}

export default OctoImage;