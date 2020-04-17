import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux' //have to import

function App() {
  // useSelector pulls state from redux
  const counter = useSelector((state)=> state.counter)
  //useDispatch is used to pull actions from redux
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      {/* pull increment action type from rootReducer using useDispatch */}
      <button onClick={()=> dispatch({type: "INCREMENT"})}>Addith One</button>
      <button onClick={()=> dispatch({type: "DECREMENT"})}>Takith Away</button>
    </div>
  );
}

export default App;
