import React from 'react';

import './home-style.scss';

///import Teste from './teste';


const Home = () => {
    return(
        <div>
            <h1>Welcome to Covid-News</h1>
            <div>
                <section className='gridtemplate'>
                    <div className='banner'>
                        <div className="image-banner">
                            <p> COVID-19 </p>
                        </div>
                        <h2>Coronavirus pandemic</h2>
                    </div>
                    <div className="container">
                        <div className='content1'>
                            <div >
                                <img src="https://ichef.bbci.co.uk/wwfeatures/live/1600_900/images/live/p0/8d/hz/p08dhzgp.jpg" alt="future"/>
                                <h3>
                                    Why singing can make you feel better in lockdown
                                </h3>
                                <p className="tx-info">
                                Whether you have the voice of a songbird or sound like some ball-bearings in a blender, singing can have some remarkably positive effects.
                                </p>
                                
                            </div>
                                <p className="tx-info2"><strong>|</strong> FUTURE</p>
                        </div>
                        
                        <div className='content2'>
                            <div >
                                <img src="https://s.france24.com/media/display/bf800c80-90b1-11ea-8ca8-005056a98db9/w:980/p:16x9/73084772d55da50f1e6c8a116626f576b2b5078f.webp" alt="reality_check"/>
                                <h3>
                                    What we know about anti-malarial drugs and Covid-19
                                </h3>
                                <p className="tx-info">
                                    Studies are underway to examine if hydroxychloroquine (and a similar drug chloroquine) is effective against the coronavirus
                                </p>
                            </div>
                                <p className="tx-info2"><strong>|</strong> REALITY CHECK</p>
                        </div>

                        <div className='content3'>
                            <div >
                                <img src="https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/8d/hl/p08dhltl.jpg" alt="future_planet"/>
                                <h3>
                                    Why more forest are being chopped down
                                </h3>
                                <p className="tx-info">
                                    With fewer planes in the sky and cars on the road, lockdown has brought many benefits to the environment. So why is it harming tropical rainforests?
                                </p>
                            </div>
                                <p className="tx-info2"><strong>|</strong> FUTURE PLANET</p>
                        </div>

                        <div className='content4'>
                            <div >
                                <img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/97A9/production/_112252883_coronavirus_jobs_by_risk_index_976.jpg" alt="work_safe"/>
                                <h3>
                                    How exposed is your job to coronavirus
                                </h3>
                                <p className="tx-info">
                                    Millions of workers are doing their day jobs from makeshift setups in their living rooms and kitchens, while those who can't work from home are not encouraged to go back in if they can do so safely.
                                </p>
                            </div>
                                <p className="tx-info2"><strong>|</strong> WORK SAFE</p> 
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default Home;
