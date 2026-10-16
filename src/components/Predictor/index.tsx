import { useId, useState } from "react";
import styles from "./styles.module.css";

export interface PredictorInput {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  weight: number;
  unit?: string;
}

export interface PredictorProps {
  inputs: PredictorInput[];
  bias: number;
  title: string;
  badge?: string;
  resultLabel: string;
  predictionLabel: string;
  positiveLabel: string;
  negativeLabel: string;
  disclaimer?: string;
  threshold?: number;
}

export default function Predictor({
  inputs,
  bias,
  title,
  badge,
  resultLabel,
  predictionLabel,
  positiveLabel,
  negativeLabel,
  disclaimer,
  threshold = 50,
}: PredictorProps) {
  const uid = useId();
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(inputs.map((i) => [i.id, i.defaultValue]))
  );

  // Fixed weighted sum passed through a sigmoid: illustrative, not a trained model.
  const z = inputs.reduce(
    (sum, i) => sum + i.weight * (values[i.id] ?? i.defaultValue),
    bias
  );
  const probability = Math.round((1 / (1 + Math.exp(-z))) * 100);
  const isPositive = probability >= threshold;
  const outcomeClass = isPositive
    ? styles.exam_predictor__pass
    : styles.exam_predictor__fail;

  return (
    <section className={styles.exam_predictor}>
      <header className={styles.exam_predictor__header}>
        <h2 className={styles.exam_predictor__title}>{title}</h2>
        {badge && (
          <span className={styles.exam_predictor__badge}>{badge}</span>
        )}
      </header>

      {inputs.map((input) => {
        const inputId = `${uid}-${input.id}`;
        const value = values[input.id] ?? input.defaultValue;

        return (
          <div
            key={input.id}
            className={styles.exam_predictor__slider_group}
          >
            <div className={styles.exam_predictor__slider_header}>
              <label htmlFor={inputId}>{input.label}</label>
              <strong>
                {value}
                {input.unit}
              </strong>
            </div>
            <input
              id={inputId}
              type="range"
              min={input.min}
              max={input.max}
              step={input.step}
              value={value}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  [input.id]: Number(e.target.value),
                }))
              }
              className={styles.exam_predictor__slider}
            />
          </div>
        );
      })}

      <div className={styles.exam_predictor__divider} />

      <div className={styles.exam_predictor__result}>
        <div className={styles.exam_predictor__result_label}>
          {resultLabel}
        </div>

        <div
          className={`${styles.exam_predictor__probability} ${outcomeClass}`}
        >
          {probability}%
        </div>

        <div
          className={styles.exam_predictor__progress_track}
          role="progressbar"
          aria-label={resultLabel}
          aria-valuenow={probability}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className={`${styles.exam_predictor__progress_bar} ${outcomeClass}`}
            style={{ width: `${probability}%` }}
          />
        </div>

        <div className={styles.exam_predictor__prediction}>
          {predictionLabel}: {isPositive ? positiveLabel : negativeLabel}
        </div>
      </div>

      {disclaimer && (
        <p className={styles.exam_predictor__disclaimer}>{disclaimer}</p>
      )}
    </section>
  );
}
