import PropTypes from "prop-types";
import defaultImage from "../../images/default.jpg";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar = defaultImage, name, isOnline }) => (
        <li className={s.item} key={id}>
          {isOnline ? (
        <span className={s.statusName + " " + s.online}>{isOnline}</span>
      ) : (
        <span className={s.statusName + " " + s.offline}>{isOnline}</span>
      )}
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
