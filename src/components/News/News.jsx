import React from 'react';
import './News-style.css'

const News = ({newsImg, newsTitle, newsTx, newsFooter}) => {
    return (
        <div className="container">
        
            <div className='content1'>
                <span className='tx-span'><strong>|</strong> {newsFooter}</span>
                <div >
                    <img src={newsImg} alt={newsFooter}/>
                    <h3>
                        {newsTitle}
                    </h3>
                    
                    <div className="tx-info">
                    <p>{newsTx}</p>
                    </div>
                    
                </div>
                    
            </div>
        </div>
    );
}

export default News;