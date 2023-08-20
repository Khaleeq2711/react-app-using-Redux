import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import InputForm from "./components/InputForm";
import Header from "./UI/Header";


function App() {
  const state = useSelector((store)=>store.formReducer);


  return (
    <div className="App">
      <Header/>
      {!state.authentication && <InputForm/>}

      {state.authentication ? <Counter /> : <h1>Please Log-in</h1>}
    </div>
  );
}

export default App;
