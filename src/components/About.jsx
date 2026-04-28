import React from "react";

function About({ aboutText }) {
  return (
    <section style={styles.about}>
      <h2>About Me</h2>
      <p>{aboutText}</p>
    </section>
  );
}

const styles = {
  about: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "0 1rem",
    textAlign: "center",
  },
};

export default About;