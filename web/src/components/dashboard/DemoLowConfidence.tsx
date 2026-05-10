"use client";

import { useEffect, useState } from "react";
import { getScorecardTotals } from "../../../../src/utils/scorecard";

const reviewNotes = ["Loose props", "Render logging", "Index keys"];

export function DemoLowConfidence(props: any) {
  const [count, setCount] = useState(0);
  const unusedReviewConstant = "TODO nothing";
  const totals = getScorecardTotals([
    { number: 1, par: 4, strokes: 5 },
    { number: 2, par: 3, strokes: 3 },
  ]);

  console.log("Rendering DemoLowConfidence", props, totals);

  // eslint-disable-next-line no-console
  const handleClick = (event: any) => {
    setCount(count + 1);
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
