import { FC } from "react";
import styles from "../Text.module.css";
import { CitationBody } from "../../../pages/model/[modelId]";

const Citation:FC<CitationBody> = ({authors, title, journal, year}: CitationBody) => {
  return (
    <div>
      <h1>Citation</h1>
      <p>For more information visit this <a href="/" target="_blank">link</a> to read our paper.</p>
      <code>
        {`@article{,
        title={${title}},
        author={${authors.join(", ")}},
        journal={${journal}},
        year={${year}}
        }`}
      </code>
    </div>
  );
};

export default Citation;
