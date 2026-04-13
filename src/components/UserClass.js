import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor Called");
  }

   componentDidMount(){
    // API Calls
    console.log("Child Component Did Mount Called");
  }
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    console.log("Child Render Called");
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // Never Update State Variables Directly
            // this.state.count = this.state.count + 1; // Wrong Way To Update State Variables
            this.setState({ count: count + 1 }); // Correct Way To Update State Variables
          }}
        >
          Count Increase
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
