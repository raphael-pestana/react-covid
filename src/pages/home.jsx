import React from 'react';
import Banner from '../images/banner-covid.png'
import News from '../components/News/News'
import './home-style.scss';
import Rodape from '../images/rodape.png';

///import Teste from './teste';


const Home = () => {
    return(
        <div>
            <h1>Welcome to Covid-News</h1>
            <div>
                <header>    
                    <img src={Banner} />
                </header>

                <section>
                    <div>
                        <h2 className= 'title-news'>News</h2>
                    <div className='divNews'>
                    <News newsImg="https://ichef.bbci.co.uk/wwfeatures/live/1600_900/images/live/p0/8d/hz/p08dhzgp.jpg"
                    newsTitle='Why singing can make you feel better in lockdown'
                    newsTx='Whether you have the voice of a songbird or sound like some ball-bearings in a blender, singing can have some remarkably positive effects.' 
                    newsFooter='FUTURE'
                    />
                   <News newsImg="https://s.france24.com/media/display/bf800c80-90b1-11ea-8ca8-005056a98db9/w:980/p:16x9/73084772d55da50f1e6c8a116626f576b2b5078f.webp"
                    newsTitle='What we know about anti-malarial drugs and Covid-19'
                    newsTx='Studies are underway to examine if hydroxychloroquine (and a similar drug chloroquine) is effective against the coronavirus' 
                    newsFooter='REALITY CHECK'
                    />
                    <News newsImg="https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/8d/hl/p08dhltl.jpg"
                    newsTitle='Why more forest are being chopped down'
                    newsTx='With fewer planes in the sky and cars on the road, lockdown has brought many benefits to the environment. So why is it harming tropical rainforests?' 
                    newsFooter='FUTURE PLANET'
                    />
                    <News newsImg="https://ichef.bbci.co.uk/news/660/cpsprodpb/97A9/production/_112252883_coronavirus_jobs_by_risk_index_976.jpg"
                    newsTitle='How exposed is your job to coronavirus'
                    newsTx="Millions of workers are doing their day jobs from makeshift setups in their living rooms and kitchens, while those who can't work from home are not encouraged to go back in if they can do so safely." 
                    newsFooter='WORK SAFE'
                    />
                    </div>
                    </div>
                </section>
            </div>

            <div className="img-background">
                <img src={Rodape} alt="COVID-19" />
            </div>
        </div>
    )
}


export default Home;
