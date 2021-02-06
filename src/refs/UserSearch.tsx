import { useState, useRef, useEffect } from "react";
const users = [
  { name: "yash", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];
const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(); //when component loads typescripts does not knw that this ref is assigned to any element it will consider this as null ref. thats why we pass null as second option otherwise it ives error on elelmnt where you use ref.
  const [name, setname] = useState("");
  const [user, setuser] = useState<{ name: string; age: number } | undefined>(); //all the possible types of user piece of state

  useEffect(() => {
    if (!inputRef.current) {
      return; //if inputref is null then return empty
    }
    inputRef.current.focus();
  }, []);
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setuser(foundUser);
  };
  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
