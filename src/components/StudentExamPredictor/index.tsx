
import { useState } from "react";
import styles from './styles.module.css';

export default function StudentExamPredictor() {
  const [studyHours, setStudyHours] = useState(8);
  const [sleepHours, setSleepHours] = useState(7);
  const [attendance, setAttendance] = useState(90);

  // Illustrative formula — NOT a trained neural network.
  const z =
    -4.5 +
    0.52 * studyHours +
    0.13 * sleepHours +
    0.035 * attendance;

  const probability = Math.round(
    (1 / (1 + Math.exp(-z))) * 100
  );

  const willPass = probability >= 50;

  return (
    <section className={styles.exam_predictor}>
      <header className={styles.exam_predictor__header}>
        <h2 className={styles.exam_predictor__title}>
          Student Exam Predictor
        </h2>
        <span className={styles.exam_predictor__badge}>
          Interactive simulation
        </span>
      </header>

      <div className={styles.exam_predictor__slider_group}>
        <div className={styles.exam_predictor__slider_header}>
          <label htmlFor="study-hours">Hours studied</label>
          <strong>{studyHours}h</strong>
        </div>
        <input
          id="study-hours"
          type="range"
          min={0}
          max={12}
          step={1}
          value={studyHours}
          onChange={(e) =>
            setStudyHours(Number(e.target.value))
          }
          className={styles.exam_predictor__slider}
        />
      </div>

      <div className={styles.exam_predictor__slider_group}>
        <div className={styles.exam_predictor__slider_header}>
          <label htmlFor="sleep-hours">Hours slept</label>
          <strong>{sleepHours}h</strong>
        </div>
        <input
          id="sleep-hours"
          type="range"
          min={0}
          max={12}
          step={1}
          value={sleepHours}
          onChange={(e) =>
            setSleepHours(Number(e.target.value))
          }
          className={styles.exam_predictor__slider}
        />
      </div>

      <div className={styles.exam_predictor__slider_group}>
        <div className={styles.exam_predictor__slider_header}>
          <label htmlFor="attendance">Attendance</label>
          <strong>{attendance}%</strong>
        </div>
        <input
          id="attendance"
          type="range"
          min={0}
          max={100}
          step={5}
          value={attendance}
          onChange={(e) =>
            setAttendance(Number(e.target.value))
          }
          className={styles.exam_predictor__slider}
        />
      </div>

      <div className={styles.exam_predictor__divider} />

      <div className={styles.exam_predictor__result}>
        <div className={styles.exam_predictor__result_label}>
          Simulated probability of passing
        </div>

        <div
          className={`${styles.exam_predictor__probability} ${
            willPass
              ? styles.exam_predictor__pass
              : styles.exam_predictor__fail
          }`}
        >
          {probability}%
        </div>

        <div
          className={styles.exam_predictor__progress_track}
          role="progressbar"
          aria-label="Simulated probability of passing"
          aria-valuenow={probability}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className={`${styles.exam_predictor__progress_bar} ${
              willPass
                ? styles.exam_predictor__pass
                : styles.exam_predictor__fail
            }`}
            style={{ width: `${probability}%` }}
          />
        </div>

        <div className={styles.exam_predictor__prediction}>
          Predicted: {willPass ? "Pass" : "Fail"}
        </div>
      </div>

      <p className={styles.exam_predictor__disclaimer}>
        This interactive demonstration uses a fixed mathematical
        formula, not a trained neural network. It illustrates
        how changing inputs can change a model's output.
      </p>
    </section>
  );
}
