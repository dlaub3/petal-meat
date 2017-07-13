/*
    ./client/components/App.jsx
*/
import React from 'react';
import Button from './Button.jsx';

export default class App extends React.Component {
  render() {
    let buttons = this._generateButtons(9);
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World From React</h1>
        {buttons}
    </div>);
  }
  _generateButtons(n){
    let buttons = [];
    for(let i = 0; i <= n; i++) {
      buttons.push(<Button number={i} className="number"/>);
    }
    return buttons;
  }
}
