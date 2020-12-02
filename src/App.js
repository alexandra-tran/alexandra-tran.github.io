import React from 'react';
import './App.css';
import { Bar } from './Components';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// TODO: Import route components here
import { Hello } from './Views/Hello';
import { Goodbye } from './Views/Goodbye';
import { Landing } from './Views/Landing';
import { Lacrosse } from './Views/Lacrosse';

class App extends React.Component {

  render(){
    return (
      <div className="App">
      <Bar landing={true} hello={false} goodbye={false}/>
      <BrowserRouter>
          <Switch> { /* Switch statement for routes */ }
            { /* Routes display different page components*/ }
            <Route exact path='/' render={() => 
                            (<Landing />)}/>
            <Route exact path='/Hello' render={() => 
                            (<Hello />)}/>
            <Route exact path='/Goodbye' render={() => 
                            (<Goodbye />)}/>
            <Route exact path='/Lacrosse' render={() => 
                            (<Lacrosse />)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;