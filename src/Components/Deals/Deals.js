import React from 'react';
import './Deals.css';
import data from '../../Data/gameDeals.json';

const Deals = () => {
    return (
        <div>
            {data.map((data, id) => {
                return(
                    <div className="deals" id={id}>
                        <h3>{data.name}</h3>
                        <h3>{data.release}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Deals;

/* <p>
    {data.platform.map((plat) => {
        return (
            <h4>{plat}</h4>
        )
    })}
</p>
<p>Critic: {data.critic_score}</p>
<p>User: {data.user_score}</p>
<p>Price: {data.price}</p>
<p>
    {data.microtransaction.map((mic) => {
        return(
                <li>{mic}</li>
        )
    })}
</p> */