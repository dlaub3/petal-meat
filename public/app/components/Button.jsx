import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  background: 'salmon',
  padding: '1.2em 1em',
  textAlign: 'center',
  fontSize: '1.4em',
}

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  
  render() {
    
    return (
        <div className={this.props.className} style={styles}>
        {this.props.number}
       </div>
      
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