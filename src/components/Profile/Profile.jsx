import PropTypes from "prop-types";
import defaultImage from "../../images/default.jpg";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar = defaultImage, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statsListItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsListItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsListItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
