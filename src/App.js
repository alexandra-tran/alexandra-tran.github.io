import React from 'react';
import './App.css';
import { Bar } from './Components';
import { Route, Switch, BrowserRouter, HashRouter} from 'react-router-dom';

// TODO: Import route components here
import { Hello } from './Views/Hello';
import { Goodbye } from './Views/Goodbye';
import { Landing } from './Views/Landing';
import { Lacrosse } from './Views/Lacrosse';
import { Projects } from './Views/Projects';

class App extends React.Component {

  render(){
    return (
      <div className="App">
      <Bar landing={true} hello={false} goodbye={false} projects={false}/>
      <HashRouter basename='/'>
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
            <Route exact path='/Projects' render={() => 
                            (<Projects />)}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;