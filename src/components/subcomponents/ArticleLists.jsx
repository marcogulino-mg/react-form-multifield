import { useState } from "react";
// IMPORT Article.jsx
import Article from "./Article";
// IMPORT blogPosts.js
import blogPosts from "../../data/blogPosts";

export default function Articlelist() {
  // Variabile con stato iniziale
  const initFormData = {
    title: "",
    description: "",
    author: "",
    hidden: false,
  };

  // Variabile di stato che conterrà l'array di oggetti di blogPost.js
  const [listArticle, setListArticle] = useState(blogPosts);
  // Variabile di stato che prende le informazioni dei campi del form
  const [newArticle, setNewArticle] = useState(initFormData);

  // Funzione per gestire l'onSubmit del form
  function handleSubmit(e) {
    // Preveniamo il refresh della pagina con il submit
    e.preventDefault();

    // Salvo in una variabile le proprietà dell'Object sotto forma di Array
    // Controllo se tutti i values sono diversi da stringa vuota
    const checkEmptiness = Object.values(newArticle).every(
      (everyArt) => everyArt !== ""
    );

    // Se nessun values ha la stringa vuota allora stamperò nella pagina l'articolo
    if (checkEmptiness) {
      // Salviamo
      setListArticle((currentArticle) => [
        ...currentArticle,
        { id: listArticle[listArticle.length - 1].id + 1, ...newArticle },
      ]);

      // Reset di newArticle
      setNewArticle(initFormData);
    }
  }

  //Funzione per gestire l'onChange dei campi del form
  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setNewArticle((currentArticle) => ({
      ...currentArticle,
      [e.target.name]: value,
    }));
  }

  return (
    <div>
      <div>
        <h2>Aggiungi Articolo</h2>
        <form className="add-article" action="#" onSubmit={handleSubmit}>
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
          <fieldset>
            <div>
              <input
                type="checkbox"
                name="hidden"
                id="hidden"
                checked={newArticle.visible}
                onChange={handleFormData}
              />
              <label htmlFor="hidden">Privato</label>
            </div>
          </fieldset>
          <button>Crea Articolo</button>
        </form>
      </div>

      <Article blogposts={listArticle} />
    </div>
  );
}
