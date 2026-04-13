import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Child Constructor Called");
  }

  async componentDidMount() {
    // API Calls
    const data = await fetch("https://api.github.com/users/ErShubham4u");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
    console.log("Child Component Did Mount Called");
  }

  componentDidUpdate() {
    console.log(" Child Component Did Update Called");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount Called");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Child Render Called");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar" className="avatar" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @ErShubham4u</h4>
      </div>
    );
  }
}

export default UserClass;
