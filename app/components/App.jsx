/*
    ./client/components/App.jsx
*/
import React from 'react';
import Button from './Button.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    let buttons = this._generateNumButtons(9);
    return (
    <MuiThemeProvider>
     <div style={{textAlign: 'center'}}>
        <h1>Hello World From React</h1>
        <div>
         {buttons}  
             <RaisedButton label="Secondary" secondary={true} />
        </div>
    </div>
   </MuiThemeProvider>);
  }
  _generateNumButtons(n){
    let buttons = [];
    for(let i = 0; i <= n; i++) {
      buttons.push(<Button number={i} key={i} className="number"/>);
    }
    return buttons;
  }
}
