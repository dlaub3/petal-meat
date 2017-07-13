import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  
  render() {
    
    return (
        <span className={this.props.className}>
        {this.props.number}
       </span>
      
    )
    
  }
  
}

Button.defaultProps ={
  number: 0
}

Button.propTypes = {
  number: PropTypes.number
}

module.exports = Button;