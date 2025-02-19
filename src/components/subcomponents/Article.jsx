export default function Article(props) {
  return (
    <>
      <h2>Lista articoli</h2>
      <ul>
        {props.blogposts.map((blogpost) => (
          <li key={blogpost.id}>
            <h3>{blogpost.title}</h3>
            <p>{blogpost.description}</p>
            <span className="author-article">{blogpost.author}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
