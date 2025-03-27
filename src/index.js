import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const getBooks = (id) => {
  const book = books.find((book) => book.id === id);
  console.log(book.title);
};

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBooks={getBooks} />;
      })}
    </section>
  );
}

// const EventHandler = () => {
//   const handleFormInput = (e) => {
//     console.log(e);
//     // e.target - element
//     console.log(`Input Name : ${e.target.name}`);
//     console.log(`Input Value : ${e.target.value}`);
//     // console.log('handle form input');
//   };
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("form submitted");
//   };
//   return (
//     <section>
//       {/* add onSubmit Event Handler */}
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: "1rem 0" }}
//         />
//         {/* add button with type='submit' */}
//         <button type="submit">submit form</button>
//       </form>
//       <button onClick={() => alert("handle button click")}>
//         Handles button click
//       </button>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
