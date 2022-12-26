import backend from "./img/carrosel/backend.png";
import backend2 from "./img/carrosel/backend2.png";
import iPass from "./img/carrosel/iPass.png";
import IStudent from "./img/carrosel/PDS-IStudent.png";
import Jammming from "./img/carrosel/Jammming.png";
import fitness from "./img/carrosel/fitness-frog.png"
import styles from "./ExamplePort.module.css";

import ImgMediaCard from "./cardComp";

const ExamplePort = () => {
  return (
    <section className={styles["example-port"]}>
      <h2 className={styles["port-header"]}>Example Project</h2>
      <div className={styles["example-project"]}>
        {/* For Generation */}
        <h3>At Generation : I use JS, React, Node, Express and MongoDB for building projects.</h3>
        <div className={styles["generation"]}>
          <ImgMediaCard
            imgSrc={fitness}
            Heading={"Fitness Frog "}
            Text={
              "Fitness Frog is my final group project of Generation. I'm Leader of this project."
            }
            showButton={true}
            link="https://fitness-frog.vercel.app/"
          />
          <ImgMediaCard
            imgSrc={Jammming}
            Heading={"Jammming "}
            Text={
              "Jamming is a project that you can add some playlist to your spotify"
            }
            showButton={true}
            link="https://barko-jam.pages.dev/"
          />
        </div>
        {/* For PDS */}
        <h3>Before Generation : I mainly use PHP, MSSQL and Bootstrap for build some websites.</h3>
        <div className={styles["before-generation"]}>
          <ImgMediaCard
            imgSrc={backend}
            Heading={"Backend Student M1 Satit Patumwan"}
            Text={"This is the back-office for officer to manage the test user payment result (change payment status)."}
            showButton={false}
          />
          <ImgMediaCard
            imgSrc={backend2}
            Heading={"Inside Backend Student M1 Satit Patumwan"}
            Text={"Inside Backend Student M1 Satit Patumwan"}
            showButton={false}
          />
          <ImgMediaCard
            imgSrc={iPass}
            Heading={"Student Information For New Student (M1)"}
            Text={"This website provide information for newcomer student (M1) eg. manual, email and some of schedule and line group"}
            showButton={false}
          />
          <ImgMediaCard
            imgSrc={IStudent}
            Heading={"Student Information System"}
            Text={"PDS iStudent is the website students can view their transcript and upload the semenster payment result (I've built the backend for managing this website too)."}
            showButton={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ExamplePort;
