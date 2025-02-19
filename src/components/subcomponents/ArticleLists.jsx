// IMPORT Article.jsx
import Article from "./Article";
//IMPORT blogPosts.js
import blogPosts from "../../data/blogPosts";

export default function Articlelist() {
  return (
    <div>
      <Article blogposts={blogPosts} />
    </div>
  );
}
