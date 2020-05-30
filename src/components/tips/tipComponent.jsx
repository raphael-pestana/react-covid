import React from 'react';

import './tipComponent.scss';


const TipsComponent = ({title, image, content}) => {
    return(
        <div className="main-tips">
            <div className="container-tip">
                <h1> {title} </h1>

                <div className="img-tip">
                    <img src={image} alt={title} />
                </div>

                <div className="content-tip">
                    {content}
                </div>

            </div>

        </div>
    )
}


export default TipsComponent;