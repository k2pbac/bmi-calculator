"use client";
import Card from "./card";

export default function Limitations() {
  return (
    <div className="limitations-container">
      <div className="section-1">
        <div>
          <h1>Limitations of BMI</h1>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <Card
          link="./icon-gender.svg"
          alt="gender-icon"
          title="Gender"
          content="The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI."
        />
      </div>
    </div>
  );
}
