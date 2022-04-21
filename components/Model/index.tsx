import { useEffect, SetStateAction, useState } from "react";
import styles from "./Model.module.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { getBackendRoute } from "../../types/BackendRoutes";
import Results, { ResultsProps } from "../Results";

const Model = ({ modelType, tasks }: { modelType: string; tasks: [] }) => {
  const [inputTest, setInputTest] = useState<string>("");
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [emptyField, setEmptyField] = useState<boolean>(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [results, setResults] = useState<ResultsProps[]>([]);

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputTest(e.target.value);
    if (e.target.value.length === 0) {
      setEmptyField(false);
    }
  };

  const selectAllTasks = () => {
    const newValue = !selectAll;

    if (newValue) {
      setSelectedTasks([...tasks.map(({ id }: { id: number }) => id)]);
    } else {
      setSelectedTasks([]);
    }
    setSelectAll(newValue);
  };

  const validateInput = () => {
    if (inputTest.length === 0) {
      setEmptyField(true);
      return;
    }
    setEmptyField(false);
  };

  const fireModeltest = () => {
    validateInput();

    if (emptyField) return;

    if (inputTest !== "") {
      axios
        .get(
          `${
            getBackendRoute().ProjectModel
          }/${modelType}/?message=\"${inputTest}\"&${selectedTasks
            .map((task) => `task_ids=${task}`)
            .join("&")}`
        )
        .then((res) => {
          setResults(res.data);
        });
    }
  };

  const addTaskItem = (e: number) => {
    let items = selectedTasks;
    const index = items.indexOf(Number(e));
    if (index === -1) {
      const newValues = [e, ...items];
      setSelectedTasks(newValues);

      if (newValues.length === tasks.length) {
        setSelectAll(true);
      }
    } else {
      items.splice(index, 1);
      setSelectAll(false);
      setSelectedTasks([...items]);
    }
  };

  useEffect(() => {
    console.log(selectedTasks);
  }, [selectedTasks]);

  return (
    <div>
      <h3>Test it here!</h3>
      <div className={styles.container}>
        <input
          value={inputTest}
          id="test-input"
          className={!emptyField ? styles.input : styles.inputError}
          onChange={handleInputChange}
          placeholder="Tell us what's on your mind"
        />
        <button className={styles.button} onClick={fireModeltest}>
          <Icon
            style={{ width: "25px", height: "25px" }}
            icon="icon-park-outline:write"
          />
        </button>
      </div>

      <div className={styles.selectAllContainer}>
        <input
          onChange={selectAllTasks}
          type="checkbox"
          ref={(input) => {
            if (input && selectedTasks.length === tasks.length) {
              input.indeterminate = false;
              input.checked = true;
            } else if (selectedTasks.length > 0 && input) {
              input.indeterminate = true;
              input.checked = false;
            } else {
              if (input) {
                input.indeterminate = false;
                input.checked = false;
              }
            }
          }}
        />
        <h5>Select Subtasks:</h5>
      </div>
      <div className={styles.selectContainer}>
        {tasks.map(
          ({
            id,
            name,
            description,
          }: {
            id: number;
            name: string;
            description: string;
          }) => (
            <div className={styles.task} key={id}>
              <input
                id={"selectAll"}
                checked={selectAll || selectedTasks.includes(id)}
                type="checkbox"
                value={id}
                onChange={() => {
                  addTaskItem(id);
                }}
              />
              <h5>{name}</h5>
            </div>
          )
        )}
      </div>

      {results.length > 0 ? <Results results={results} /> : null}
    </div>
  );
};

export default Model;
