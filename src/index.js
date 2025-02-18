import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
const img = "https://m.media-amazon.com/images/I/41OPosUIEhL._SY445_SX342_.jpg";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
