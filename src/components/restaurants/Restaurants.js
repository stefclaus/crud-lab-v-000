import React, { Component } from 'react';
import Restaurant from './Restaurant';


class Restaurants extends Component {
  render(){
    const { restaurants } = this.props

    return (
      <div>
        <ul>
          {restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
        </ul>
      </div>
    );

};
  }


export default Restaurants;
