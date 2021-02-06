import React from "react";
import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearchfromRef from "./refs/UserSearch";
import UserSearchFRomclass from "./classes/UserSearch";

ReactDOM.render(
  <React.StrictMode>
    <UserSearch />
    <GuestList />
    <UserSearchfromRef></UserSearchfromRef>
    <EventComponent></EventComponent>
    {/* <UserSearchFRomclass users=userrs/> */}
  </React.StrictMode>,

  document.getElementById("root")
);
