import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Main from "./pages/main";


class App extends React.Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path='/' render={() => <Main type="DB"/>}/>
                    <Route path='/db' render={() => <Main type="DB"/>}/>
                    <Route path='/language' render={() => <Main type="Language"/>}/>
                    <Route path='/service' render={() => <Main type="Service"/>}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
