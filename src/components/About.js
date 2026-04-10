import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User
        name={"Shubham Kumar (function)"}
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
};

export default About;
