import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Model from "../components/Model";
import NavBar from "../components/NavBar";
import Abstract from "../components/Text/Abstract";
import Citation from "../components/Text/Citation";
import Team from "../components/Text/Team";

import styles from "/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div >
      <NavBar />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Abstract />
          <Team />
          <Citation />
        </div>
        <div className={styles.modelContainer}>
          <Model />
        </div>
      </div>
    </div>
  );
};

export default Home;
