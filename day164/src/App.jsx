import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  return (
    <div className="app">
      <h1>📚 ჩემი ბიბლიოთეკა</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
}

export default App;
