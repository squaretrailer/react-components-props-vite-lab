import React from "react";

function About({ about, image }) {
  const defaultImage = "https://via.placeholder.com/150?text=Blog+Logo";
  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;