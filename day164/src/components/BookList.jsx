import React from 'react';

export default function BookList({ books, onDelete }) {
  if (books.length === 0) return <p>📭 წიგნები არ არის დამატებული.</p>;

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p><strong>ავტორი:</strong> {book.author}</p>
          <p><strong>ჟანრი:</strong> {book.genre}</p>
          <p><strong>აღწერა:</strong> {book.description}</p>
          <button onClick={() => onDelete(index)}>წაშლა</button>
        </div>
      ))}
    </div>
  );
}
