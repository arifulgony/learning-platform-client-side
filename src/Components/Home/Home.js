import React from 'react';
import './Home.css'
import catun from './catun.png'
import Fooder from '../Fooder/Fooder';
import {  Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className="benar-sectio">
            <div className='container'>
            <section className="">
             <div className="container-xl container-md">
                <div className="row">
                    <div className="col-xl-6 col-md-6 benar">
                       <div className="benar-details">
                       <h1>Develop your Skills Online with learnJS</h1>
                       <p>If you’re interested in learning to code, you’ve probably noticed that JavaScript (JS) is a hot topic. JavaScript (a scripting language used to build dynamic web content like animated features, interactive forms, scrolling video, etc.) is a pillar of web development, which means JavaScript developers are in high demand (Indeed lists over 28,000 JavaScript jobs as of this writing(opens in a new tab)) and JavaScript jobs are lucrative (Glassdoor lists average JavaScript developer pay at $72,500 as of this writing(opens in a new tab)).</p>
                     
                       <button > <Link to="/courses">start now</Link>  </button>
                       </div>
                    </div>
                    <div className="col-xl-6  col-md-6">
                        <div className='benar-img'>
                        <img src={catun} alt="" />
                        </div>
                     </div>
                </div>
            </div>
            </section>
           
        </div>
        
        </div>
                <Fooder></Fooder>

        </>
    );
};

export default Home;