export default function Addarticle() {
  return (
    <div>
      <form className="add-article" action="#">
        Titolo Articolo:
        <input type="text" placeholder="Titolo Articolo" />
        Descrizione Articolo:
        <textarea type="text" placeholder="Descrizione Articolo" />
        Autore Articolo:
        <input type="text" placeholder="Autore Articolo" />
        <button>Crea Articolo</button>
      </form>
    </div>
  );
}
