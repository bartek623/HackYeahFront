import style from "./ListItem.module.css";

function ListItem(props) {
  return <li className={style.item}>{props.info.login}</li>;
}

export default ListItem;
