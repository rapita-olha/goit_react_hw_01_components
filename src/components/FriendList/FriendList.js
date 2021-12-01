import Item from "./Item";
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

export default FriendList;
