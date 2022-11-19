import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import style from "./Homepage.module.css";

function Homepage() {
  const { fetchData } = useFetch();
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return <main className={style.main}>home</main>;
}

export default Homepage;
