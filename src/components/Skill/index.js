import styles from "./Skill.module.css";
import html from "./img/html.png";
import css from "./img/css.png";
import react from "./img/react.png";
import mongodb from "./img/mongodb.png";
import node from "./img/node.png";
import github from "./img/github.png";
import php from "./img/php.png";
import MSSQL from "./img/MSSQL.png";

const Skill = () => {
  return (
    <section className={styles["skill"]}>
      <div className={styles["Tech-skill"]}>
        <h3 className={styles["Tech-skill-header"]}>Technical Skills</h3>
        <div className={styles["tech-list"]}>
          <div className={styles["img-group"]}>
            <img src={html} alt="HTML" />
            <span>HTML</span>
          </div>
          <div className={styles["img-group"]}>
            <img src={css} alt="CSS" />
            <span>CSS</span>
          </div>
          <div className={styles["img-group"]}>
            <img src={react} alt="REACT" />
            <span>REACT</span>
          </div>
          <div className={styles["img-group"]}>
            <img src={mongodb} alt="MONGO" />
            <span>Mongo DB</span>
          </div>
          <div className={styles["img-group"]}>
            <img src={node} alt="NODE" />
            <span>Node & Express JS</span>
          </div>
          <div className={styles["img-group"]}>
            <img src={github} alt="GITHUB" />
            <span>Github</span>
          </div>
          <div className={styles["img-group"]}>
            <img src={php} alt="PHP" />
            <span>PHP</span>
          </div>
          <div className={styles["img-group"]}>
            <img src={MSSQL} alt="MSSQL" />
            <span>MSSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
