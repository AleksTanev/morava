import styles from "./WorkingHours.module.scss";

const WorkingHours = () => {
  return (
    <div className={styles["working-hours"]}>
      <div className={styles["working-hours-title"]}>Office Working Hours</div>
      <p className={styles["working-hours-text"]}>
        <strong>Monday:</strong> 9:00 am – 5:00 pm
      </p>
      <p className={styles["working-hours-text"]}>
        <strong>Tuesday:</strong> 9:00 am – 5:00 pm
      </p>
      <p className={styles["working-hours-text"]}>
        <strong>Wednesday:</strong> 9:00 am – 5:00 pm
      </p>
      <p className={styles["working-hours-text"]}>
        <strong>Thursday:</strong> 9:00 am – 5:00 pm
      </p>
      <p className={styles["working-hours-text"]}>
        <strong>Friday:</strong> 9:00 am – 5:00 pm
      </p>
      <p className={styles["working-hours-text"]}>
        <strong>Saturday:</strong> 9:00 am – 2:00 pm
      </p>
      <p className={styles["working-hours-text"]}>
        <strong>Sunday:</strong> Holiday
      </p>
    </div>
  );
};

export default WorkingHours;
