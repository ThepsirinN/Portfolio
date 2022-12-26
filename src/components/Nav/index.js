import { MyPageContext } from "../../context/PageContext";
import styles from './Nav.module.css'

const Nav = () => {
  const { page,setPageValue } = MyPageContext();

  const handleOnClick = (e) => {
    e.preventDefault()
    setPageValue(e.target.innerText);
  };

  const isActivePage = (pageName) => {
    if(pageName === page){
      return "active"
    }
  }

  return (
    <nav className={styles["navigation"]}>
      <div className={styles["nav-link"]}>
        <button className={styles[isActivePage("🧑About")]} onClick={ handleOnClick }>🧑About</button>
        <button className={styles[isActivePage("🤯Experience")]} onClick={ handleOnClick }>🤯Experience</button>
        <button className={styles[isActivePage("📙Portfolio")]} onClick={ handleOnClick }>📙Portfolio</button>
        <button className={styles[isActivePage("🏫Education")]} onClick={ handleOnClick }>🏫Education</button>
        <button className={styles[isActivePage("🏃‍♂️Skill")]} onClick={ handleOnClick }>🏃‍♂️Skill</button>
        <button className={styles[isActivePage("📞Contact")]} onClick={ handleOnClick }>📞Contact</button>
      </div>
      <div className={styles["hambugur"]}>
        ☰
      </div>
    </nav>
  );
};

export default Nav;
