import React from "react";

const About = ({ match }) => {
  let who = match.params.userId || "page"; //checks if match provides a user id otherwise defaults to page
  return <h2>About {who}</h2>;
};

export default About;
