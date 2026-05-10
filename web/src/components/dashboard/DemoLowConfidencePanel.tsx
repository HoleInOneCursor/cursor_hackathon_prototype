import DOMPurify from "dompurify";
import { useEffect, useMemo, useState, type CSSProperties, type MouseEvent } from "react";

const panelItems = [
  "Timer cleans up when the panel unmounts.",
  "Remote response is ignored after unmount.",
  "Subtitle HTML is sanitized before rendering.",
];

const styles = {
  wrapper: {
    margin: "22px auto 0",
    maxWidth: "1160px",
    padding: "0 clamp(20px, 5vw, 24px)",
  },
  panel: {
    background: "#fff7e8",
    border: "1px solid #f0d6aa",
    borderRadius: "20px",
    boxShadow: "0 14px 36px rgba(48, 77, 50, 0.08)",
    color: "#183225",
    display: "grid",
    gap: "16px",
    padding: "22px",
  },
  eyebrow: {
    color: "#a05f00",
    fontSize: "0.78rem",
    fontWeight: 800,
    letterSpacing: "0.14em",
    margin: "0 0 8px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "1.15rem",
    margin: 0,
  },
  subtitle: {
    color: "#5d4c30",
    lineHeight: 1.55,
    margin: "8px 0 0",
  },
  fakeButton: {
    alignSelf: "start",
    background: "#183225",
    borderRadius: "999px",
    color: "#ffffff",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: 800,
    padding: "10px 16px",
    userSelect: "none",
  },
  meta: {
    color: "#5d4c30",
    display: "grid",
    gap: "6px",
    margin: 0,
  },
  list: {
    color: "#5d4c30",
    lineHeight: 1.55,
    margin: 0,
    paddingLeft: "20px",
  },
} satisfies Record<string, CSSProperties>;

function getLocationReviewHint() {
  if (typeof window === "undefined") {
    return "Rendering before browser location is available";
  }

  const currentHref = window.location.href;

  return currentHref.includes("dashboard")
    ? "Rendering from a dashboard-ish URL"
    : `Rendering from ${currentHref}`;
}

interface DemoLowConfidencePanelProps {
  endpoint?: string;
  subtitleHtml: string;
}

interface RemotePayload {
  origin?: string;
  url?: string;
}

export function DemoLowConfidencePanel({
  endpoint = "https://httpbin.org/delay/2",
  subtitleHtml,
}: DemoLowConfidencePanelProps) {
  const [secondsOpen, setSecondsOpen] = useState(0);
  const [remoteMessage, setRemoteMessage] = useState("Waiting for delayed JSON...");
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSecondsOpen((value) => value + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const locationHint = useMemo(() => getLocationReviewHint(), []);
  const sanitizedSubtitleHtml = useMemo(() => DOMPurify.sanitize(subtitleHtml), [subtitleHtml]);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    fetch(endpoint, { signal: controller.signal })
      .then((response) => response.json() as Promise<RemotePayload>)
      .then((payload) => {
        if (!isMounted) {
          return;
        }

        setRemoteMessage(payload.url || payload.origin || "Delayed JSON loaded");
      })
      .catch((error: unknown) => {
        if (!isMounted || (error instanceof DOMException && error.name === "AbortError")) {
          return;
        }

        const message = error instanceof Error ? error.message : "Unknown error";

        setRemoteMessage(`Fetch failed: ${message}`);
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [endpoint]);

  const handlePanelClick = (_event: MouseEvent<HTMLDivElement>) => {
    setClicks((value) => value + 1);
  };

  return (
    <section aria-labelledby="demo-low-confidence-panel-title" style={styles.wrapper}>
      <div style={styles.panel}>
        <div>
          <p style={styles.eyebrow}>Demo-only review bait</p>
          <h3 id="demo-low-confidence-panel-title" style={styles.title}>
            Low confidence dashboard panel
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: sanitizedSubtitleHtml }}
            style={styles.subtitle}
          />
        </div>

        <div onClick={handlePanelClick} style={styles.fakeButton}>
          Pretend button clicked {clicks} times
        </div>

        <dl style={styles.meta}>
          <div>
            <dt>Seconds mounted</dt>
            <dd>{secondsOpen}</dd>
          </div>
          <div>
            <dt>Route hint</dt>
            <dd>{locationHint}</dd>
          </div>
          <div>
            <dt>Remote status</dt>
            <dd>{remoteMessage}</dd>
          </div>
        </dl>

        <ul style={styles.list}>
          {panelItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
