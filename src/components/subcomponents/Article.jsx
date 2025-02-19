export default function Article(props) {
  return (
    <ul>
      {props.blogposts.map((blogpost) => (
        <li key={blogpost.id}>
          <h3>{blogpost.title}</h3>
          <p>{blogpost.description}</p>
          <span>{blogpost.author}</span>
        </li>
      ))}
    </ul>
  );
}
