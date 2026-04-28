import React from "react";

function Article({ title, date, content, imageUrl }) {
  return (
    <article style={styles.article}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <small>{date}</small>
      <p>{content}</p>
      <hr />
    </article>
  );
}

const styles = {
  article: {
    marginBottom: "2rem",
    padding: "1rem",
    borderBottom: "1px solid #ccc",
  },
  image: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default Article;