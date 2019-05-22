import React, {Component} from 'react';
import Home from './components/Home';
// import {Route, BrowserRouter, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {

    render() {
        return (
                <div className="App">
                   <Home/>
                </div>
        );
    }
}

export default App;
