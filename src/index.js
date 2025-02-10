import React from "react";
import ReactDOM from "react-dom/client";

function Booklist() {
  return (
    <article>
      <Books />
    </article>
  );
}

const Books = () => {
  return (
    <section>
      <Title />
      <Author />
      <Image />
    </section>
  );
};

const Image = () => {
  return <img src="" alt="" />;
};

const Title = () => {
  return <h1>title</h1>;
};

const Author = () => <h4>author</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
