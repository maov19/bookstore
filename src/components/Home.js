import { useState, useEffect } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks) {
      setBooks(storedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (e) => {
    e.preventDefault();
    const bookName = e.target.bookName.value;
    const authorName = e.target.authorName.value;
    const newBook = { bookName, authorName };
    setBooks([...books, newBook]);
    e.target.reset();
  };

  return (
    <div>
      <h1>Home</h1>
      <ul id="book-list">
        {books.map((book, index) => (
          <li key={index}>
            {book.bookName} by {book.authorName}
          </li>
        ))}
      </ul>
        <form id="create-book" onSubmit={addBook}>
            <input className="book-name" name="bookName" placeholder="Insert book here" />
            <input className="author-name" name="authorName" placeholder="Insert author here" />
            <span></span>
            <button type="submit">Add new book</button>
        </form>
    </div>
  );
};

export default Home;
