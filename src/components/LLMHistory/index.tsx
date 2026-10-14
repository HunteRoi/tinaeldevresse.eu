
import type { CSSProperties } from "react";
import styles from "./styles.module.css";

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  examples?: string[];
}

export interface LLMHistoryProps {
  events?: TimelineEvent[];
  title?: string;
  className?: string;
}

export const defaultEvents: TimelineEvent[] = [
  {
    id: "transformers",
    year: "2017",
    title: "Transformers",
    description:
      "The attention-based architecture establishes the foundation for modern LLMs.",
    examples: ["Attention Is All You Need"],
  },
  {
    id: "pretraining",
    year: "2018-2019",
    title: "Pretrained language models",
    description:
      "Models learn general language patterns from large datasets and can be adapted to different tasks.",
    examples: ["GPT", "BERT", "GPT-2"],
  },
  {
    id: "scaling",
    year: "2020-2021",
    title: "Scaling up",
    description:
      "Larger models demonstrate stronger few-shot learning and broader language capabilities.",
    examples: ["GPT-3"],
  },
  {
    id: "instruction-following",
    year: "2022-2023",
    title: "Instruction-following and chat",
    description:
      "Post-training makes models more useful for conversations, instructions, and assistance.",
    examples: ["InstructGPT", "ChatGPT", "GPT-4", "Llama 2"],
  },
  {
    id: "multimodal",
    year: "2023-2024",
    title: "Multimodality and longer context",
    description:
      "Models increasingly process images, audio, and longer inputs alongside text.",
    examples: ["GPT-4o", "Gemini 1.5", "Claude 3"],
  },
  {
    id: "reasoning",
    year: "2024-2025",
    title: "Reasoning and tool use",
    description:
      "Models increasingly use additional computation for difficult problems and interact with external tools.",
    examples: ["o1", "o3", "DeepSeek-R1"],
  },
  {
    id: "agents",
    year: "2025-2026",
    title: "More capable AI systems",
    description:
      "Progress combines stronger reasoning, efficient inference, multimodal interaction, and agentic workflows.",
    examples: ["GPT", "Claude", "Gemini", "Qwen"],
  },
];

export default function LLMHistory({
  events = defaultEvents,
  title = "Evolution of Large Language Models",
  className,
}: LLMHistoryProps) {
  return (
    <section
      className={[styles.container, className]
        .filter(Boolean)
        .join(" ")}
      aria-label={title}
    >
      <h2 className={styles.heading}>{title}</h2>

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
                    aria-label="Notable examples"
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
