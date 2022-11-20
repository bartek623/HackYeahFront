import { useRef } from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import style from "./Authorization.module.css";

function Authorization() {
  const { setData, getData } = useFetch();

  const [canLogin, setCanLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const inputLogin = useRef();
  const inputFName = useRef();
  const inputLName = useRef();
  const inputAddr = useRef();
  const inputP = useRef();
  const inputCP = useRef();

  const zmien = function () {
    setIsRegistering((prev) => !prev);
  };

  const changeHandler = function () {
    if (
      !isRegistering &&
      inputLogin.current.value !== "" &&
      inputP.current.value !== ""
    ) {
      setCanLogin(true);
      return;
    }

    if (
      inputFName.current?.value === "" ||
      inputLogin.current?.value === "" ||
      inputLName.current?.value === "" ||
      inputAddr.current?.value === "" ||
      inputCP.current?.value === "" ||
      inputP.current?.value === ""
    ) {
      setCanLogin(false);
      return;
    }

    setCanLogin(true);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    console.log("submitted");

    let data;
    if (isRegistering) {
      data = {
        idClient: Math.random(),
        login: inputLogin.current.value,
        password: inputP.current.value,
        firstName: inputFName.current.value,
        lastName: inputLName.current.value,
        address: inputAddr.current.value,
      };
      setData(data, () => {}, "clients");
    } else {
      data = {
        login: inputLogin.current.value,
        password: inputP.current.value,
      };
      getData((data) => {
        console.log(data);
      }, "clients");
    }
  };

  return <div className={style.container}>
    <section className={style.card}>
      <fieldset onSubmit={submitHandler}>
        <legend className={style.legend}>FILL USER DATA TO PROCEED</legend>
        <form>
        <div className={style.formik}><div className={style.left}>

        <div>
        <label htmlFor="login" >User name: </label> <br></br>
        <input type="text" ref={inputLogin} onChange={changeHandler} name="login"></input>
        </div>

        {isRegistering && <div className={style['left', 'confPass']}>
        <div>
        <label htmlFor="firstname" >First name: </label> <br></br>
        <input type="text" ref={inputFName} onChange={changeHandler} name="firstname"></input>
        </div>
        <div>
        <label htmlFor="lastname" >Last name: </label> <br></br>
        <input type="text" ref={inputLName} onChange={changeHandler} name="lastname"></input>
        </div>

        <div>
        <label htmlFor="address" >Address: </label> <br></br>
        <input type="text" ref={inputAddr} onChange={changeHandler} name="address"></input>
      </div>
      </div>}

      </div><div className={style.right}>
          <div>
        <label htmlFor="password">Password: </label> <br></br>
        <input ref={inputP} onChange={changeHandler} type="password" name="password"></input>
        </div>
        {isRegistering && <div className={style.confPass}><div> <br></br> <label htmlFor="confirm">Confirm password</label>  <br></br> <input ref={inputCP} onChange={changeHandler} type="password"></input></div></div>}

        </div></div>

        <div className={style.buttons}>
        <button className={style.btn} onClick={zmien}>{isRegistering==1 ? "LOG IN" : "SIGN UP"}</button>
        {canLogin &&  <button >SEND</button>} 
        </div>
        </form>
      </fieldset>

    </section></div>
}

export default Authorization;
