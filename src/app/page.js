"use client";
import './globals.css';
import { useEffect, useState } from 'react';


import BookCard from '../../components/BookCard';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/books')
      .then((res) => res.json())
      .then(({ ok, data }) => {
        if (ok) {
          setBooks(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(books);

  return (
    <>
      <div className="df fdc aic jcc">
        <div className="df fdc p5 tac mb5">
          <h1>Audio Libros</h1>
        </div>
        <div className="df mt10">
          {books.map((b) => (
            <BookCard key={b._id} book={b} />
          ))}
        </div>
      </div>
    </>
  );
}
