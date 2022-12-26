import thepsirinIMG from "./img/Thepsirin.jfif";
import styles from "./AboutMe.module.css";
const AboutMe = () => {
  return (
    <section className={styles["about-me"]}>
      <div className={styles["about-me-img"]}>
        <img src={thepsirinIMG} alt={"Thepsirin-img"} />
      </div>
      <div className={styles["about-me-detail"]}>
        <div className={styles["detail-fullname"]}>
          <h1>Thepsirin Nawngerndee</h1>
          <h3>Software Development Student / Partime Python Tutor</h3>
        </div>
        <div className={styles["detail-context"]}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software Development Student / Partime Python Tutor who has a
            passion for coding in Backend and Frontend side consecutively. I'm
            able to work under pressure with an energetic, responsible, and
            smart with growth mindset. I've learned a lot of coding in many
            languages, like JS, SQL, MongoDB, HTML, and CSS; moreover, I can
            code in PHP, Python, and C.
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
