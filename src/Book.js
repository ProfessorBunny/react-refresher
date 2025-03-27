const Book = ({ img, title, author, getBooks, id }) => {
  // const { img, title, author } = props;

  const clickHandler = (e) => {
    getBooks(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBooks(id)}>Display Title</button>
      <h4>{author} </h4>
    </article>
  );
};
export default Book;
