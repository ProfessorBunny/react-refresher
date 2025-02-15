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
  const title = "INNER EXCELLENCE";

  return (
    <>
      <h1>{title}</h1>;
      <img
        src="https://m.media-amazon.com/images/I/41OPosUIEhL._SY445_SX342_.jpg"
        alt=""
      />
      <h4 style={{ fontSize: "0.75rem" }}>{author} </h4>;
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
