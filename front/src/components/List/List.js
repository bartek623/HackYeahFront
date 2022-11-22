import ListItem from "./ListItem";
import style from "./List.module.css";

function List(props) {
  const items = [
    { login: "asd" },
    { login: "bsd" },
    { login: "asd" },
    { login: "bsd" },
    { login: "bsd" },
    { login: "asd" },
    { login: "bsd" },
    { login: "bsd" },
    { login: "bsd" },
    { login: "asd" },
    { login: "bsd" },
    { login: "bsd" },
    { login: "asd" },
    { login: "bsd" },
    { login: "bsd" },
  ];

  const listItems = items.map((item, i) => (
    <ListItem key={"l" + i} info={item} />
  ));

  return (
    <div className={style["list-container"]}>
      <ul className={style.list}>{listItems}</ul>
    </div>
  );
}

export default List;
