import React from 'react';
import GameDisplay from '../GameDisplay/GameDisplay';
import BestDealsWrap from '../BestDealsWrap/BestDealsWrap';
import Decoration from '../Decoration/Decoration';
import '../SearchWrap/SearchWrap.css';

const SearchWrap = () => {
    return (
        <div className="search-wrap">
            <Decoration/>
            <GameDisplay/>
            <BestDealsWrap/>
        </div>
    )
}

export default SearchWrap;