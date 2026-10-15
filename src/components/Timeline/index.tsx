
import type { CSSProperties } from "react";
import styles from "./styles.module.css";

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  examples?: string[];
}

export interface TimelineProps {
  events: TimelineEvent[];
  title?: string;
  examplesLabel?: string;
  className?: string;
}

export default function Timeline({
  events,
  title,
  examplesLabel,
  className,
}: TimelineProps) {
  return (
    <section
      className={[styles.container, className]
        .filter(Boolean)
        .join(" ")}
      aria-label={title}
    >
      {title && <h2 className={styles.heading}>{title}</h2>}

      <ol className={styles.timeline}>
        {events.map((event, index) => {
          const isLatest = index === events.length - 1;

          const variables = {
            "--event-index": index,
          } as CSSProperties;

          return (
            <li
              key={event.id}
              className={[
                styles.event,
                isLatest ? styles.latest : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={variables}
            >
              <div className={styles.rail} aria-hidden="true">
                <span className={styles.year}>
                  {event.year}
                </span>
                <span className={styles.connector} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.eventTitle}>
                  {event.title}
                </h3>

                <p className={styles.description}>
                  {event.description}
                </p>

                {event.examples && event.examples.length > 0 && (
                  <div
                    className={styles.examples}
                    aria-label={examplesLabel}
                  >
                    {event.examples.map((example) => (
                      <span
                        key={example}
                        className={styles.example}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
