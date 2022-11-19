import { useState, useRef } from "react";

import style from "./BagForm.module.css";

function BagForm() {
  const [canSubmit, setCanSubmit] = useState(false);
  const [tokens, setTokens] = useState(0);
  const codeRef = useRef();
  const sortRef = useRef();
  const weightRef = useRef();

  const submitHandler = function (e) {
    e.preventDefault();
  };

  const changeHandler = function () {
    if (
      codeRef.current.value === "" ||
      sortRef.current.value === "" ||
      weightRef.current.value === ""
    ) {
      setCanSubmit(false);
      return;
    }

    setCanSubmit(true);
  };

  return (
    <main className={style.main}>
      <form className={style["form-card"]} onSubmit={submitHandler}>
        <h3 className={style.heading}>Send request</h3>

        <div className={style.control}>
          <label htmlFor="code">Code</label>
          <input ref={codeRef} id="code" onChange={changeHandler}></input>
        </div>

        <div className={style.control}>
          <label htmlFor="code">Is sorted?</label>
          <select ref={sortRef} id="code" onChange={changeHandler}>
            <option value="">Select option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className={style.control}>
          <label htmlFor="weight">Weight</label>
          <input
            ref={weightRef}
            type="number"
            id="weight"
            placeholder="Type weight of your bag"
            onChange={changeHandler}
          ></input>
        </div>

        <div className={style.tokens}>
          <div>You will get: </div>
          <span>{tokens}</span>
        </div>

        <button disabled={!canSubmit} className={style.submit} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default BagForm;
