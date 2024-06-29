"use client";
import './globals.css';
import { useEffect, useState } from 'react';


import BookCard from '../../components/BookCard';
import { Calistoga } from 'next/font/google';

const BASE_BACKEND_URL = !!process.env.NEXT_PUBLIC_VERCEL_ENV ? process.env.NEXT_PUBLIC_BASE_BACKEND_URL : "http://localhost:4000";
export default function Home() {
  const [books, setBooks] = useState([]);
  console.log({BASE_BACKEND_URL, env: process.env.NEXT_PUBLIC_VERCEL_ENV});

  useEffect(() => {
    fetch(`${BASE_BACKEND_URL}/books`)
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
