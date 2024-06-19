"use client";
import './page.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
          <Image
            src={b.thumbnail}
            alt={b.title}
            layout='fill'
          />
          <h1>{b.title}</h1>
          <p>{b.description}</p>
          <p>{b.author}</p>
          <p>{b.thumbnail}</p>
          <p>{b.audio}</p>
        </div>
      ))}
    </div>
  );
}
