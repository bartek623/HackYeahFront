import ListItem from "./ListItem";
import style from "./List.module.css";

function List(props) {
  const items = [{ login: "asd" }, { login: "bsd" }];

  const listItems = items.map((item, i) => (
    <ListItem key={"l" + i} info={item} />
  ));

  return <ul className={style.list}>{listItems}</ul>;
}

export default List;
