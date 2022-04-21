import { useEffect, useState } from "react";
import styles from "./Results.module.css";

export interface ResultsProps {
  task_id: number;
  scores: {
    class: string;
    score: number;
  }[];
}

const Results = ({ results }: { results: ResultsProps[] }) => {
  const [json, setJson] = useState<string>("");

  useEffect(() => {
    setJson(JSON.stringify(results, null, 2));
  }, [results]);

  const formatScore = (toParse: number, place: number) => {
    let str = toParse.toString();
    str = str.slice(0, str.indexOf(".") + place + 1);
    return Number(str);
  };

  return (
    <div className={styles.results}>
      <h3>Results</h3>
      <div>
        {results.map((result: ResultsProps) => {
          return (
            <div key={result.task_id}>
              <ul>
                {result.scores.map(
                  (score: { class: string; score: number }) => {
                    return (
                      <div key={score.class}>
                        <div>
                          <div
                            className={styles.gradient}
                            style={{
                              height: "8px",
                              width: `${Number(score.score) * 100}%`,
                              marginTop: "1rem",
                            }}
                          />
                        </div>
                        <div className={styles.classScoreContainer}>
                          <p className={styles.classLabel}>{score.class}</p>
                          <p className={styles.classLabel}>
                            {formatScore(score.score, 5)}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </ul>
            </div>
          );
        })}
      </div>

      <hr className={styles.divider} />

      <div className={styles.codeLabel}>
        <h5>JSON Output:</h5>
        <button
          onClick={() => {
            navigator.clipboard.writeText(json);
          }}
        >
          Copy to Clipboard
        </button>
      </div>
      <pre className="">
        <code>{JSON.stringify(results, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Results;
