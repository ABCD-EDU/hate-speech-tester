import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.projectHeading}>
        <div>
          <h1>Project Title</h1>
          <p>Project Description</p>
        </div>
      </div>
      <p>ABCD</p>
    </div>
  );
};

export default NavBar;
