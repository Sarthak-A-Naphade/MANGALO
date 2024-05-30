import React from "react";
import UserContext from "../utils/UserContex";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "xyz",
        location: "default",
      },
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");

    const data = await fetch("https://api.github.com/users/Sarthak-A-Naphade");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + "Child componentWillUnmount");
  }

  render() {
    console.log(this.props.name + "child render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="user-img" alt="avatar" src={avatar_url} />
        <div className="user-card-info">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
          <h2>Name : {name}</h2>
          <h3>Location : {location}</h3>
          <h4>Contact : sarthak@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
