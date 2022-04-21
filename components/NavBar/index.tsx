import Link from "next/link";
import { FC } from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {
  title: string;
  description: string;
}

const NavBar:FC<NavBarProps> = ({title, description}: NavBarProps) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.projectHeading}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <Link href="/">
        <a>
          ABCD
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
