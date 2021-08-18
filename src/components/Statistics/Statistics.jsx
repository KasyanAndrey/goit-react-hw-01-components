import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ stats }) => {
  return (
    <section className={s.statistics}>
      <StatisticsTitle title="Upload stats" />

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const StatisticsTitle = ({ title }) => {
  return title && <h2 className={s.title}>{title}</h2>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
