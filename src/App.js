import React, { Component } from 'react';
import './App.css';
import Main from "./components/MainComponent";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import { ConfigureStore } from "./redux/configureStore";



class App extends Component {
    constructor(props) {
        super(props);

    }
  render() {
    return (
            <Provider store={ ConfigureStore()}>
        <BrowserRouter>
        <div className="App">
            <Main />
        </div>
        </BrowserRouter>
            </Provider>
    );
  }


}

export default App;
