export default function Article(props) {
  return (
    <>
      <h2>Lista articoli</h2>
      <ul>
        {props.blogposts.map(
          (blogpost) =>
            !blogpost.hidden && (
              <li key={blogpost.id}>
                <h3>{blogpost.title}</h3>
                <p>{blogpost.description}</p>
                <span className="author-article">{blogpost.author}</span>
                <img
                  className="trash-bin"
                  src="./img/trash-solid.svg"
                  alt="remove article"
                  onClick={() => props.onClick(blogpost.id)}
                />
              </li>
            )
        )}
      </ul>
      {props.blogposts.every((everyArt) => everyArt.hidden === true) && (
        <h3>Nessun Articolo Pubblico</h3>
      )}
    </>
  );
}
