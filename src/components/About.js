import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount Called");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>About</h1>
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
