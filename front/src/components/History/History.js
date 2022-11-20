import List from "../List/List";
import style from "./History.module.css";

function History() {
  return (
    <main className={style.main}>
      <div className={style.card}>
        <div className={style.results}>
          <List></List>
        </div>
      </div>
    </main>
  );
}

export default History;
