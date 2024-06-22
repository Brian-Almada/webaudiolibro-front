"use client";
import './globals.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import AudioPlayer from './audioPlayer';

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

        {books.map((b) => (
          <div key={b._id} className="df aic jcsb fdc">
            <div>
              <Image
                src={b.thumbnail}
                alt={b.title}
                width={356}
                height={200}
              />
            </div>
            <div>
              <h1>{b.title}</h1>
              <p>{b.description}</p>
              <p>{b.author}</p>
              <div>
                <AudioPlayer
                  src={b.audio}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
