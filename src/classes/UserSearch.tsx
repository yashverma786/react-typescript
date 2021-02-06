import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface userSearchProps {
  users: User[]; //means users is a type of array object
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearching extends Component<userSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };
  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {this.state.user && this.state.user.name}
          {this.state.user && this.state.user.age}
        </div>
      </div>
    );
  }
}

export default UserSearching;
