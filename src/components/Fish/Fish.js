import React from 'react';
import './Fish.css';
import formatPrice from '../../helpers';

class Fish extends React.Component {
  render () {
    const { details } = this.props;
    const image = require(`${details.image}`);
    const isAvailable = details.status === 'available';
    return (
      <li className="Fish">
        <img src={image} alt={details.name}/>
        <h3 className="name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button
          disabled={!isAvailable}
        >
          {isAvailable ? 'Add to Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
