import React, { Component } from 'react';
import './GameDisplay.css';
import '../Search/Search.css';
import data from '../../Data/gameDeals.json';

class GameDisplay extends Component {
    state={
        search:null
    };
  
    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }
  
    render(){
        const items = data.filter((data)=>{
            if(this.state.search == null)
                return data
            else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
        }}).map(data=>{
        return(
            <div>
                    <li>
                        <span>{data.name}</span>
                    </li>
            </div>
        )
    })
  
      return (
        <div className="search">
            <input type="text" placeholder="Search" onChange={(e)=>this.searchSpace(e)} />
            <div className="gameDisplay">
                <h3>{items}</h3>
            </div>
        </div>
      )
    }
  }

export default GameDisplay;