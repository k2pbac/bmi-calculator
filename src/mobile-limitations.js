"use client";
import Card from "./card";

export default function MobileLimitations() {
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
      </div>

      <div className="section-2">
        <Card
          link="./icon-gender.svg"
          alt="gender-icon"
          title="Gender"
          content="The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI."
        />
        <img
          className="curved-line"
          src="./pattern-curved-line-right.svg"
          alt="curved-line"
        ></img>
        <Card
          link="./icon-age.svg"
          alt="age-icon"
          title="Age"
          content="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        />
        <Card
          link="./icon-muscle.svg"
          alt="muscle-icon"
          title="Muscle"
          content="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        />
        <Card
          link="./icon-pregnancy.svg"
          alt="pregnancy-icon"
          title="Pregnancy"
          content="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        />
        <Card
          link="./icon-race.svg"
          alt="race-icon"
          title="Race"
          content="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        />
      </div>
      {/* <div className="section-3"></div> */}
    </div>
  );
}
