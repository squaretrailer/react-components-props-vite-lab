import React from "react";

function Header({ title, author }) {
  return (
    <header style={styles.header}>
      <h1>{title}</h1>
      <p>by {author}</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "2rem",
    textAlign: "center",
  },
};

export default Header;