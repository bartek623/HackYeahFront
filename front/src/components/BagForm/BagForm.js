import style from "./BagForm.module.css";

function BagForm() {
  return (
    <main className={style.main}>
      <form className={style["form-card"]}>
        <h3 className={style.heading}>Send request</h3>

        <div className={style.control}>
          <label htmlFor="code">Code</label>
          <input id="code"></input>
        </div>

        <div className={style.control}>
          <label htmlFor="code">Is sorted?</label>
          <select id="code">
            <option value="">Select option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className={style.control}>
          <label htmlFor="weight">Weight</label>
          <input id="weight"></input>
        </div>

        <div className={style.tokens}>
          <div>You will get: </div>
          <span>0</span>
        </div>

        <button className={style.submit} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default BagForm;
