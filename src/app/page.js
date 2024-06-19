"use client";
import { useEffect, useState } from 'react';

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
    <div>
      <h1>hello</h1>
      {books.map((b) => (
        <div key={b._id} className="df aic jcsb">
          <h1>{b.title}</h1>
          <p>{b.description}</p>
        </div>
      ))}
    </div>
  );
}
