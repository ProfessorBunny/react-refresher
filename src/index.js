import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <Books />
      <Books />
      <Books />
    </section>
  );
}

const author = "Jordan Moore";
const Books = () => {
  const title = "Interesting Facts For Curious Mindssssss";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/41OPosUIEhL._SY445_SX342_.jpg"
        alt="Interesting Facts For Curious Minds"
      />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
