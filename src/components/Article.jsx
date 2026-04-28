import React from "react";

function Article({ title, date, preview }) {
  const displayDate = date ? date : "January 1, 2020";
  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;