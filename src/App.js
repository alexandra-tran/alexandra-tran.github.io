import React from 'react';
import './App.css';
import { Bar } from './Components';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// TODO: Import route components here
import { Hello } from './Views/Hello';
import { Goodbye } from './Views/Goodbye';
import {Landing } from './Views/Landing';

class App extends React.Component {

  render(){
    return (
      <div className="App">
      <Bar landing={true} hello={false} goodbye={false}/>
      <BrowserRouter>
          <Switch> { /* Switch statement for routes */ }
            { /* Routes display different page components*/ }
            <Route exact path='/' render={() => 
                            (<Landing appState={this.state}/>)}/>
            <Route exact path='/Hello' render={() => 
                            (<Hello appState={this.state}/>)}/>

            <Route exact path='/Goodbye' render={() => 
                            (<Goodbye appState={this.state}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;