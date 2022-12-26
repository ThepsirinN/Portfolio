import Chula from "./img/Chula.png";
import styles from "./Education.module.css"
const Education = () => {
  return (
    <section className={styles["education"]}>
      <h2 className={styles["education-header"]}>Education</h2>
      <div className={styles["uni"]}>
        <div className={styles["inside-context"]}>
          <a href="https://www.chula.ac.th/en/" target="blank">
            <img src={Chula} alt="Chulalongkorn University" />
            &nbsp;Chulalongkorn University
          </a>
          <p className={styles["inside-context"]}>
            Bachelor of Education - B.Ed, Mathematics and Computer Education
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
