import styles from './Experience.module.css'

const Expreience = () => {
  const dateNow = new Date();
  const calDay = (date) => {
    return date/(1000*60*60*24)
  }
  const calYear = (date) => {
    return Math.floor(calDay(date)/365)
  }
  const calMonth = (date) => {
    return  Math.floor(calDay(date)/30 - 12*Math.floor(calDay(date)/365))
  }

  const dateLearner = dateNow - new Date("09/01/2022");
  const dateAlgo = dateNow - new Date("04/01/2021");

  return (
    <section className={styles["experience"]}>
      <h2 className={styles["exprience-heading"]}>Experience</h2>

      <div className={styles["expreience-row"]}>
        <div className={styles["experience-row-head"]}>
          <h4>Software Development Student ·&nbsp;</h4>
          <h5 className={styles['experience-company']}>&nbsp;Generation Thailand</h5>
          <h5>&nbsp;· Internship</h5>
        </div>
        <div className={styles["experience-row-year"]}>
          <small>
            Sep 2022 - Present · {calYear(dateLearner) === 0 ? "" : `${calYear(dateLearner)} yr` }  {calMonth(dateLearner) === 0 ? "" : `${calMonth(dateLearner)} mos` } · Bangkok, Thailand
          </small>

        </div>
      </div>

      <div className={styles["expreience-row"]}>
        <div className={styles["experience-row-head"]}>
          <h4>Tutor ·&nbsp;</h4>
          <h5 className={styles['experience-company']}>&nbsp;Algorithmics Bangkok</h5>
          <h5>&nbsp;· Part-time</h5>
        </div>
        <div className={styles["experience-row-year"]}>
          <small>
            Apr 2021 - Present · {calYear(dateAlgo) === 0 ? "" : `${calYear(dateAlgo)} yr` }  {calMonth(dateAlgo) === 0 ? "" : `${calMonth(dateAlgo)} mos` } · Bangkok, Thailand
          </small>
        </div>
      </div>

      <div className={styles["expreience-row"]}>
        <div className={styles["experience-row-head"]}>
          <h4>Computer Teacher ·&nbsp;</h4>
          <h5 className={styles['experience-company']}>&nbsp;Patumwan Demonstration School</h5>
          <h5>&nbsp;· Full-time</h5>
        </div>
        <div className={styles["experience-row-year"]}>
          <small>
            Oct 2019 - Jun 2022 · 2 yrs 9 mos · Bangkok, Thailand
          </small>
        </div>
      </div>

      <div className={styles["expreience-row"]}>
        <div className={styles["experience-row-head"]}>
          <h4>Mathematics Teacher ·&nbsp;</h4>
          <h5 className={styles["experience-company"]}>&nbsp;Prasarnmit Demonstration School (Secondary)</h5>
          <h5>&nbsp;· Full-time</h5>
        </div>
        <div className={styles["experience-row-year"]}>
          <small>May 2019 - Oct 2019 · 6 mos · Bangkok, Thailand</small>
        </div>
      </div>
    </section>
  );
};

export default Expreience;
