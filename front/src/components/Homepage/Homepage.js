import heroImg from "../../img/hero-img.jpeg";
import style from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={style.main}>
      <section className={style["section-hero"]}>
        <div className={style["hero-text"]}>
          <h2>Pack it away!</h2>
          <p>Got too many clothes, home textiles or shoes?</p>
          <p>Pack it away and get tokens as rewards!</p>
        </div>
        <img
          className={style["hero-img"]}
          src={heroImg}
          alt="happy woman with textiles"
        ></img>
      </section>
    </main>
  );
}

export default Homepage;
