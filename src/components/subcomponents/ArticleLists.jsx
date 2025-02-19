import { useState } from "react";
// IMPORT Article.jsx
import Article from "./Article";
//IMPORT blogPosts.js
import blogPosts from "../../data/blogPosts";

export default function Articlelist() {
  //Variabile di stato rappresentante l'articolo da inserire
  const [newArticle, setNewArticle] = useState({
    title: "",
    description: "",
    author: "",
  });

  //Funzione per gestire l'onChange dei campi
  function handleFormData(e) {
    setNewArticle((currentArticle) => ({
      ...newArticle,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div>
      <div>
        <h2>Aggiungi Articolo</h2>
        <form className="add-article" action="#">
          Titolo Articolo:
          <input
            type="text"
            name="title"
            placeholder="Titolo Articolo"
            value={newArticle.title}
            onChange={handleFormData}
          />
          Descrizione Articolo:
          <textarea
            type="text"
            name="description"
            placeholder="Descrizione Articolo"
            value={newArticle.description}
            onChange={handleFormData}
          />
          Autore Articolo:
          <input
            type="text"
            name="author"
            placeholder="Autore Articolo"
            value={newArticle.author}
            onChange={handleFormData}
          />
          <button>Crea Articolo</button>
        </form>
      </div>

      <Article blogposts={blogPosts} />
    </div>
  );
}
