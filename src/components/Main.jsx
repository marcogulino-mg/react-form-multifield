// IMPORT ArticleList.jsx
import Articlelist from "./subcomponents/ArticleLists";
// IMPORT AddArticle.jsx
import Addarticle from "./subcomponents/AddArticle";

export default function Main() {
  return (
    <main>
      <h2>Lista articoli</h2>
      <Addarticle />
      <Articlelist />
    </main>
  );
}
