import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./Store/store";
import { Provider } from "react-redux";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
       <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
