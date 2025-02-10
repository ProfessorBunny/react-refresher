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
      <Image />
      <Author />
    </section>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/41OPosUIEhL._SY445_SX342_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>INNER EXCELLENCE</h1>;
};

const Author = () => <h4>JIM MURPHY </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
