import React, { Component } from 'react';
import Deals from '../Deals/Deals';
import './BestDeals.css';

class BestDeals extends Component {
    render() {
        return(
            <div className="bestDeals">
                <Deals/>
            </div>
        )
    }
}

export default BestDeals;