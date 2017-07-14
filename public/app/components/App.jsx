/*
    ./client/components/App.jsx
*/

import React from 'react';
import Button from './Button.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {

  gridList: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end'
  }
};

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 0
    }
  }
  render() {
    let buttons = this._generateNumButtons(9);
    
    return (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        
         <Card style={{width: 400, height: 600 }}>
             <AppBar iconElementLeft={<span/>} style={{justifyContent: 'right'}}  >
               <h1>{this.state.value}</h1>
             </AppBar>
           
          <GridList cols={4} cellHeight={100} style={{margin: 10, width: 380}} >  
            
              <GridList cols={4} cellHeight={100} 
                style={{display: 'flex',
                flexWrap: 'nowrap'}} >
                
                <Button number={'('}  onClick={() => this.props.onClick()} />
                <Button number={')'}/>
                <Button number={'%'}/>
                <Button number={'CE'}/>
              </GridList>           
            
                <GridList cols={3} cellHeight={100}  styles={styles.gridList}>
                {buttons.reverse()} 
                  <Button number={'.'}/>
                  <Button number={'='}/>
                </GridList>
            
                <GridList cols={1} cellHeight={100}  >  
                <Button number={'/'}/>
                <Button number={'*'}/>
                <Button number={'-'}/>
                <Button number={'+'}/>
                </GridList>
            
          </GridList>
         </Card>    
    </div>
  );
 
}
_handleClick(num) {
   this.setState({
     value: num
   })
  
 }

  _generateNumButtons(n){
    let buttons = [];
    for(let i = 0; i <= n; i++) {
      buttons.push(<Button key={i} number={i} className={'number'} />);
    }
    return buttons;
  }
}
