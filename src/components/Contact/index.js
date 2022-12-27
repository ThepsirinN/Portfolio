import styles from "./Contact.module.css";
import resume from "./img/Thepsirin_Resume.pdf";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import email from "./img/Email.png"

const Contact = () => {
  return (
    <section className={styles["contact"]}>
      <h2 className={styles["contact-header"]}>Contact</h2>
      <div className={styles["contact-info"]}>
        <div className={styles["contact-section"]}>
          <a
            href="https://www.linkedin.com/in/thepsirin-nawngerndee-16523733/"
            target="blank"
          >
            <img src={linkedin} alt="linkedin-img" />
            <p className={styles["contact-text"]}>Thepsirin Nawngerndee</p>
          </a>
        </div>

        <div className={styles["contact-section"]}>
          <a href="https://github.com/ThepsirinN" target="blank">
            <img src={github} alt="github-img" />
            <p className={styles["contact-text"]}>ThepsirinN</p>
          </a>
        </div>

        <div className={`${styles["contact-section"]} ${styles["contact3"]}`}>
          <a href="mailto:thepsirin.naw@gmail.com" target="blank">
            <img src={email} alt="github-img" />
            <p className={styles["contact-text"]}>Thepsirin.naw@gmail.com</p>
          </a>
        </div>
      </div>


      <div className={styles["resume-link"]}>
        <a href={resume} target="blank">
          Download Resume
        </a>
      </div>
      <br />
    </section>
  );
};

export default Contact;
