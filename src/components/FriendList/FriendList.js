import Item from "./Item";
import PropTypes from "prop-types";

import s from "./friendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <Item key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape(
    {id: PropTypes.number.isRequired,}
  ).isRequired).isRequired,
};

export default FriendList;
