import React from 'react';
import './Home.css'
import catun from './catun.png'

const Home = () => {
    return (
        <div className='contain'>
            <section>
                <div className="container  bg-color">
                    <div className="row">
                        <div className="col-6">
                           <div className="detail">
                           <div className="details">
                            <h1>Large educational programs</h1>
                                <p>If you’re interested in learning to code, you’ve probably noticed that JavaScript (JS) is a hot topic. JavaScript (a scripting language used to build dynamic web content like animated features, interactive forms, scrolling video, etc.) is a pillar of web development, which means JavaScript developers are in high demand (Indeed lists over 28,000 JavaScript jobs as of this writing(opens in a new tab)) and JavaScript jobs are lucrative (Glassdoor lists average JavaScript developer pay at $72,500 as of this writing(opens in a new tab)).</p>
                                <button className='btn bg-info' >lest ho</button>
                           </div>
                           </div>
                        </div>
                        <div className="col-6">
                            <div className="benar-img">
                            <img src={catun} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;