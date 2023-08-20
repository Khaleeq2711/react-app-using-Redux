import { useRef } from "react";
import { formActions } from "../store/store";
import { useSelector } from "react-redux/es/hooks/useSelector";

import "./InputForm.css";
import { useDispatch } from "react-redux";

function InputForm(props) {
  const state = useSelector((store) => store.formReducer);
  const dispatch = useDispatch();
  
  const nameRef = useRef("");

  const ageHandler = (e) => {};

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(formActions.login());
  };

  console.log(state.authentication);

  return (
    <div>
      <form className="add-main__form" onSubmit={submitHandler}>
        <div className="add-main">
          <div className="add-name">
            <label>Email</label>
            <input type={"email"} ref={nameRef} />
          </div>
          <div className="add-age">
            <label>Password</label>
            <input
              type={"password"}
              max={"200"}
              step={"1"}
              onChange={ageHandler}
            />
          </div>
        </div>
        <div className="add-button">
          <button>
            <b>Login</b>
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
