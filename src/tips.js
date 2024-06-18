"use client";

export default function Tips() {
  return (
    <div className="tips-container">
      <div className="tips">
        <div className="tip">
          <img src="./icon-eating.svg" alt="food item" />
          <p>
            Healthy Eating{" "}
            <span>
              {" "}
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </span>
          </p>
        </div>
        <div className="tip">
          <img src="./icon-exercise.svg" alt="dumbbell" />
          <p>
            Regular exercise{" "}
            <span>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </span>
          </p>
        </div>
        <div className="tip">
          <img src="./icon-sleep.svg" alt="sleep" />
          <p>
            Adequate sleep{" "}
            <span>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
