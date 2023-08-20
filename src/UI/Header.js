import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/store";
import "./Header.css";

function Header() {

    const state = useSelector((store=>store.formReducer));
    const dispatch = useDispatch();

    const logoutHandler =(e)=>{
        dispatch(formActions.logout());
    }
    console.log(state.authentication);

  return (
    <header className="header">
      <section className="logo">
        <h1>Redux App (part-1)</h1>
      </section>
      {state.authentication && <section className="heading">
        <h2>Products</h2>
        <h2>Sales</h2>
        <button className="btn-logout" onClick={logoutHandler}>Log Out</button>
      </section>}
    </header>
  );
}

export default Header;
