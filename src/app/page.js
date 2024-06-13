"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    fetch(`http://localhost:4000/books`)
    .then((res) => {
        res.json()
    })
    .then((resJSON) => {
        console.log({resJSON})
    })
    .catch((err) => {
        console.log(err)
    })
  }, [])
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
