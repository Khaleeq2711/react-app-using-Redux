import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/store";

import "./Counter.css";

const Counter = () => {
  const state = useSelector((state) => state.counterReducer); //in actual state is coming
  console.log("State Counter : ", state);
  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(counterActions.reset());
    console.log("Reset");
  };
  const IncrementHandler = () => {
    dispatch(counterActions.increment(5));
  };
  const DecrementHandler = () => {
    dispatch(counterActions.decrement(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <div className="main">
      <h2>Redux Counter</h2>
      {state.showCounter && (
        <div className="counter">
          {state !== undefined ? state.counter : "0"}
        </div>
      )}
      <div className="btn">
        <button onClick={resetHandler}>Reset</button>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>

      <div className="btn">
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </div>
  );
};

export default Counter;

//in Class-Based COmponents...
// import {connect} from 'reacr-redux';

// class Counter extends Component{

// incrementhandler (){
//   this.props.Increment();
// }
// }

// const mapStatetoProps = (state)=>{
//   return{
//     counter: state.counter}
//    };

//   const mapDispatchToProps = (dispatch) => {
//     return {
//       increment: () => dispatch({ type: "INCRESE" }),
//       decrement: () => dispatch({ type: "DECRESE" }),
//     };
//   }
//exort default connect(mapStateToProps, mapDispatchToProps)(CLASS_COMPONENT_NAME);
