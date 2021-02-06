import { useState } from "react";
const users = [
  { name: "yash", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];
const UserSearch: React.FC = () => {
  const [name, setname] = useState("");
  const [user, setuser] = useState<{ name: string; age: number } | undefined>(); //all the possible types of user piece of state

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setuser(foundUser);
  };
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setname(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
