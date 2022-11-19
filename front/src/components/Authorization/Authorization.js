import { useRef } from "react";
import { useState } from "react";
import style from "./Authorization.module.css";

function Authorization() {
  const [canLogin, setCanLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const inputP = useRef();
  const inputCP = useRef();

  const zmien = function () {
    setIsRegistering((prev) => !prev);
  };
  const changeHandler = function () {
    if (
      !isRegistering &&
      input1.current.value !== "" &&
      inputP.current.value !== ""
    ) {
      setCanLogin(true);
      return;
    }

    if(input1.current.value ==='') {
      setCanLogin(false)
      return};
    if(input2.current.value ==='') {
      setCanLogin(false)
      return};
    if(input3.current.value ==='') {
      setCanLogin(false)
      return};
    if(input4.current.value ==='') {
      setCanLogin(false)
      return};
    if(inputCP.current.value ==='') {
      setCanLogin(false)
      return};
    if(inputP.current.value ==='') {
      setCanLogin(false)
      return};
        
    setCanLogin(true) 
       
  }

  return <div className={style.container}>
    <section className={style.card}>
      <fieldset>
        <legend className={style.legend}>FILL USER DATA TO PROCEED</legend>
        <div className={style.formik}><div className={style.left}>

        <label htmlFor="login" >User name: </label> <br></br>
        <input type="text" ref={input1} onChange={changeHandler} name="email"></input>

      {isRegistering && <div className={style.left}>
        <label htmlFor="login" >First name: </label> <br></br>
        <input type="text" ref={input2} onChange={changeHandler} name="email"></input>

        <label htmlFor="login" >Last name: </label> <br></br>
        <input type="text" ref={input3} onChange={changeHandler} name="email"></input>

        <label htmlFor="login" >Address: </label> <br></br>
        <input type="text" ref={input4} onChange={changeHandler} name="email"></input>
      </div>}

        </div><div className={style.right}>
        <label htmlFor="password">Password: </label> <br></br>
        <input ref={inputP} onChange={changeHandler} type="password" name="password"></input>
        {isRegistering && <div> <br></br> <label htmlFor="confirm">Confirm password</label>  <br></br> <input ref={inputCP} onChange={changeHandler} type="password"></input></div>}

        </div></div>

        <div className={style.buttons}>
        <button className={style.btn} onClick={zmien}>{isRegistering==1 ? "LOG IN" : "SIGN UP"}</button>
        {canLogin &&  <button >SEND</button>} 
        </div>
      </fieldset>

    </section></div>
}

export default Authorization;
