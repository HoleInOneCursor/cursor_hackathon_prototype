import { useState, type CSSProperties } from "react";

const reviewTips = [
  "Scan recent score swings before changing a practice plan.",
  "Compare fairway misses against approach results for quick trends.",
  "Flag one follow-up note for the next round review.",
];

const styles = {
  wrapper: {
    margin: "0 auto",
    maxWidth: "1160px",
    padding: "0 clamp(20px, 5vw, 24px)",
  },
  banner: {
    background: "#eef6ff",
    border: "1px solid #c7def7",
    borderRadius: "20px",
    boxShadow: "0 14px 36px rgba(48, 77, 50, 0.08)",
    color: "#183225",
    display: "grid",
    gap: "14px",
    gridTemplateColumns: "1fr auto",
    padding: "20px",
  },
  eyebrow: {
    color: "#2c6aa3",
    fontSize: "0.78rem",
    fontWeight: 800,
    letterSpacing: "0.14em",
    margin: "0 0 8px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "1.05rem",
    margin: 0,
  },
  list: {
    color: "#415469",
    lineHeight: 1.55,
    margin: "12px 0 0",
    paddingLeft: "20px",
  },
  dismissButton: {
    alignSelf: "start",
    background: "#ffffff",
    border: "1px solid #b8d5f0",
    borderRadius: "999px",
    color: "#2c6aa3",
    cursor: "pointer",
    fontWeight: 800,
    padding: "8px 14px",
  },
} satisfies Record<string, CSSProperties>;

export function DemoFeedbackBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section aria-labelledby="demo-feedback-banner-title" style={styles.wrapper}>
      <div style={styles.banner}>
        <div>
          <p style={styles.eyebrow}>Tips from automated review</p>
          <h3 id="demo-feedback-banner-title" style={styles.title}>
            Quick review prompts
          </h3>
          <ul style={styles.list}>
            {reviewTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
        <button
          aria-label="Dismiss automated review tips"
          onClick={() => setIsVisible(false)}
          style={styles.dismissButton}
          type="button"
        >
          Dismiss
        </button>
      </div>
    </section>
  );
}
