import React from "react";
import Article from "./Article";

function ArticleList({ articles }) {
  return (
    <section style={styles.list}>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          content={article.content}
          imageUrl={article.imageUrl}
        />
      ))}
    </section>
  );
}

const styles = {
  list: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "1rem",
  },
};

export default ArticleList;