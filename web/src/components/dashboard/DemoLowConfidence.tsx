"use client";

import { useState } from "react";

const reviewNotes = ["Loose props", "Render logging", "Index keys"];

export function DemoLowConfidence() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <section
      className="demo-low-confidence"
      style={{
        border: "1px solid rgba(255, 255, 255, 0.24)",
        borderRadius: "16px",
        marginTop: "2rem",
        padding: "1.25rem",
        display: "grid",
        gap: "1rem",
      }}
    >
      <div>
        <p>Low confidence review demo</p>
        <h3>Intentional review bait</h3>
      </div>
      <button type="button" onClick={handleClick}>
        Demo clicks: {count}
      </button>
      <ul>
        {reviewNotes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
