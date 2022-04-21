import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Model from "../../components/Model";
import NavBar from "../../components/NavBar";
import Abstract from "../../components/Text/Abstract";
import Citation from "../../components/Text/Citation";
import Team from "../../components/Text/Team";
import { getBackendRoute } from "../../types/BackendRoutes";

import styles from "/styles/Home.module.css";
import { useEffect, useState } from "react";

export interface CitationBody {
  authors: string[];
  title: string;
  journal: string;
  year: number
}


const ModelPage: NextPage = () => {
  const router = useRouter();
  const {modelId} = router.query;
  const [modelType, setModelType] = useState<string>("");
  const [tasks, setTasks] = useState<[]>([])
  const [title, setTitle] = useState<string>("");
  const [abstract, setAbstract] = useState<string>("");
  const [citation, setCitation] = useState<CitationBody>();
  const [team, setTeam] = useState<string[]>([]);
  const [shortDescription, setShortDescription] = useState<string>("");

  useEffect(() => {
    if (!modelId) return;
    
    axios.get(`${getBackendRoute().ProjectInformation}/?model_id=${modelId}`).then((res) => {
      setModelType(res.data.type)
      setTasks(res.data.tasks)
      setTitle(res.data.name);
      setAbstract(res.data.abstract);
      setCitation(res.data.citation);
      setTeam(res.data.citation.authors)
      setShortDescription(res.data.short_description)
    });
  }, [modelId]);

  return (
    <div>
      <NavBar title={title} description={shortDescription} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Abstract body={abstract} />
          <Team team={team}/>
          {citation && <Citation authors={team} title={citation.title} year={citation.year} journal={citation.title} />}
        </div>
        <div className={styles.modelContainer}>
          <Model modelType={modelType} tasks={tasks}/>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
