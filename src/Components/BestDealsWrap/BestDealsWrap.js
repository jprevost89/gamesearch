import React, { Component } from 'react';
import BestDeals from '../BestDeals/BestDeals';
import DealsNavbar from '../DealsNavbar/DealsNavbar'
import './BestDealsWrap.css';

class BestDealsWrap extends Component {
    render() {
        return (
            <div className="bestDealsWrap">
                <DealsNavbar/>
                <BestDeals/>
            </div>
        )
    }
}

export default BestDealsWrap;