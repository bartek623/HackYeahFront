import style from "./Profile.module.css";
import { useRef } from "react";
import { useState } from "react";

function Profile() {
  const inputUName = useRef();
  const inputAddr = useRef();
  const inputFName = useRef();
  const inputLName = useRef();
  const [isDisabled, setDisabled] = useState(true);
  const changeHandler = function () {
    if (
      inputUName.current.value !== "" ||
      inputAddr.current.value !== "" ||
      inputLName.current.value !== "" ||
      inputFName.current.value !== ""
    ) {
      setDisabled(false);
      return;
    }

    setDisabled(true);
  };

  return (
    <div className={style.container}>
      <fieldset className={style.fildek}>
        <div className={style.divek}>
          <label>User name: </label>
        </div>
        <div className={style.divek}>
          <label>Number of tokens: </label>
        </div>
        <div className={style.divek}>
          <label>First name: </label>
        </div>
        <div className={style.divek}>
          <label>Last name: </label>
        </div>
        <div className={style.divek}>
          <label>Address: </label>
        </div>

        <hr></hr>

        <div className={style.divek}>
          <label>New user name: </label>
          <input ref={inputUName} onChange={changeHandler} type="text"></input>
        </div>
        <div className={style.divek}>
          <label>New first name: </label>
          <input ref={inputFName} onChange={changeHandler} type="text"></input>
        </div>
        <div className={style.divek}>
          <label>New last name: </label>
          <input ref={inputLName} onChange={changeHandler} type="text"></input>
        </div>
        <div className={style.divek}>
          <label>New address: </label>
          <input ref={inputAddr} onChange={changeHandler} type="text"></input>
        </div>
        <button className={style.btn} disabled={isDisabled}>
          Update
        </button>
      </fieldset>
    </div>
  );
}

export default Profile;
