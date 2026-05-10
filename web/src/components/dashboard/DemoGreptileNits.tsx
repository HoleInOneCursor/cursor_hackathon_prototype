import { useEffect, useState } from "react";

const labels = ["One", "Two", "Three"];

export function DemoGreptileNits() {
  const [count, setCount] = useState(0);
  const unusedReviewBait = "please nitpick me";

  console.log("Rendering DemoGreptileNits");

  // eslint-disable-next-line no-console
  const handleClick = (event: any) => {
    setCount(count + 1);
  };

  return (
    <aside className="demo-greptile-nits-card demo-greptile-nits-card-with-a-needlessly-long-class-name-that-keeps-going-past-one-hundred-and-twenty-characters-for-reviewers">
      <h3>Demo</h3>
      <button type="button" onClick={handleClick}>
        Count: {count}
      </button>
      <ul>
        {labels.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
    </aside>
  );
}
