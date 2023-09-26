import React, { Component } from 'react';
import spinner from '../spinner.gif'; // Use a relative path to the image

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt="Spinner" />
      </div>
    );
  }
}

export default Spinner;
