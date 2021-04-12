import styles from "./index.module.scss";
type Props = {
  rows: number;
  columns: number;
};
const Calendar = ({ rows = 5, columns = 31 }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.days}>
        {[...Array(31).keys()].map((i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className={styles.cells}>
        {[...Array(rows * columns).keys()].map((i) => (
          <div className={styles.cell}> </div>
        ))}
        <div className={styles.schedule}>aaa</div>
      </div>
      {/* <div className={styles.schedules}>
        <div children={styles.schedule}></div>
      </div> */}
    </div>
  );
};

export default Calendar;
