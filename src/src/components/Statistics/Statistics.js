import Item from "./Statistics-item";
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statlist}>
        {stats.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

// Profile.propTypes = {}

export default Statistics;
