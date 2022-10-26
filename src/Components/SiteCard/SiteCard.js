import React from 'react';
import { Link } from 'react-router-dom';
import './SiteCard.css'

const SiteCard = () => {
    return (
        <div>
            <div className="side-card">
                   <h1>Our Topic</h1>
                  <h3><Link>Angular</Link></h3>
                   <h3><Link>React</Link></h3>
                   <h3><Link> Vue.js</Link></h3>
                   <h3><Link>Ember.js</Link></h3>
                   <h3><Link>Meteor</Link></h3>
                   <h3><Link>Mithril</Link></h3>
                </div>
        </div>
    );
};

export default SiteCard;