import React, { useState } from 'react';

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    onAdd({ title, author, genre, description });

    setTitle('');
    setAuthor('');
    setGenre('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="სათაური"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="ავტორი"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="ჟანრი"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <textarea
        placeholder="აღწერა"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">➕ წიგნის დამატება</button>
    </form>
  );
}
