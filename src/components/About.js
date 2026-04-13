import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

  constructor(props) {
    super(props);
    console.log( "Parent Constructor Called");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount Called");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>About</h1>
        <User
          name={"Shubham Kumar (functional)"}
          location={"Patna, Bihar"}
          contact={"@ErShubham4u"}
        />
        <UserClass
          name={"Shubham Kumar (class)"}
          location={"Patna, Bihar"}
          contact={"@ErShubham4u"}
        />
      </div>
    );
  }
}

export default About;
