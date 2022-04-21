import styles from "../Text.module.css";

const Abstract = ({body}: {body: string}) => {
  return (
    <div>
      <h1>Abstract</h1>
      <p>
        {body}
      </p>
    </div>
  );
};

export default Abstract;
