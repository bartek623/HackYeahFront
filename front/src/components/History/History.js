import List from "../List/List";
import style from "./History.module.css";

function History() {
  return (
    <main className={style.main}>
      <div className={style.card}>
        <List></List>
      </div>
    </main>
  );
}

export default History;
