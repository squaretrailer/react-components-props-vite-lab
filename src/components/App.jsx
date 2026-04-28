import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header title={blogData.title} author={blogData.author} />
      <About aboutText={blogData.aboutText} />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;