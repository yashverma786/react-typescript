import { useState } from "react";
const GuestList: React.FC = () => {
  const [name, setname] = useState("");
  const [guests, setguests] = useState<string[]>([]);

  const onClick = () => {
    setname("");
    setguests([...guests, name]);
  };
  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setname(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};
export default GuestList;
