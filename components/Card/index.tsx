import { FC } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  id: number;
  name: string;
  tags?: string[];
  shortDescription: string;
}

const Card: FC<CardProps> = ({ name, tags, shortDescription }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{name}</h3>
      </div>
      <div className={styles.cardInfo}>
          {shortDescription}
        </div>
      {tags ? (
        <div className={styles.cardInfo}>
          {tags.map((tag: string) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
