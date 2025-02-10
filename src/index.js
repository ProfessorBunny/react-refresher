import React from "react";
import ReactDOM from "react-dom/client";

function Booklist() {
  return <article></article>;
}

const books = () => {
  return <section>books</section>;
};

const image = () => {
  return <img src="" alt="" />;
};

const title = () => {
  return <h1>title</h1>;
};

const author = () => <h4>author</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
