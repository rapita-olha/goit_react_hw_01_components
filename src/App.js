import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
// ----------------------------------------------------------------------
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friendsData from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        {...user}
        // avatar={user.avatar}
        // name={user.name}
        // tag={user.tag}
        // location={user.location}
        // stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
