import styles from "./Text.module.css";

const Team = ({ team }: { team: string[] }) => {
  return (
    <div>
      <h1>Team</h1>
      <div className={styles.memberContainer}>
        {team.map((member) => (
          <span key={member} className={styles.member}>{member}</span>
        ))}
      </div>
    </div>
  );
};

export default Team;
