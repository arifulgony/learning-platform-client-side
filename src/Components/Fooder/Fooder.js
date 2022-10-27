import React from 'react';
import './Fooder.css'

const Fooder = () => {
    return (
        <div className='main-footer'>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-xl-4  col-md-4">
                    <h1>About Skillcrush</h1>
                          <p> We’re on a mission to support our students—especially those marginalized by gender, race, and/or age—to learn in-demand tech skills and land higher paying and more fulfilling jobs.</p>
                    </div>
                    <div className="col-xl-4  col-md-4">
                            <h3>COURSES</h3>
                            <div className="d-flex">
                                <div><p>Angular</p>
                                     <p>React</p>
                                     <p>Vue.js</p>
                                </div>
                                <div className='mx-5'>
                                <p>Ember.js</p>
                                 <p>Meteor</p>
                                 <p>Mithril</p>
                                </div>
                            </div>
                            
                            
                         
                        </div>
                   
                    <div className="col-xl-4  col-md-4">
                        <h3>CONTACT</h3>
                        <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        <p>Official: web@programming-hero.com</p>
                        <p>Official: web@programming-hero.com</p>
                        
                    </div>
                </div>  
            </div>


        </div>
    );
};

export default Fooder;