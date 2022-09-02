import React, { useState } from "react";

interface HeaderProps {
  buttonText?: string;
}

interface Movies {
  title: string;
  date: string;
  rating: string;
  description: string;
}

export default function ({ buttonText }: HeaderProps) {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState(null);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Header</h1>
      <button onClick={increment}>{buttonText || "Click the btn"}</button>
      <p>{count}</p>
    </div>
  );
}
