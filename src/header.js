"use client";

import { useState } from "react";

export default function Header() {
  const [radio, setRadio] = useState("metric");

  return (
    <div className="header">
      <div className="text-container">
        <img src="./logo.svg"></img>
        <h1>
          Body Mass <br></br> Index Calculator
        </h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <div className="inputs-container">
        <h2>Enter your details below</h2>
        <div className="inputs">
          <div className="flex items-center justify-start">
            <div
              onClick={() => setRadio("metric")}
              className={radio === "metric" ? "circle" : "radio"}
            >
              <div className={radio === "metric" ? "inner-circle" : ""}></div>
            </div>
            <p htmlFor="metric">Metric</p>
          </div>
          <div className="flex items-center justify-start">
            <div
              onClick={() => setRadio("imperial")}
              className={radio === "imperial" ? "circle" : "radio"}
            >
              <div className={radio === "imperial" ? "inner-circle" : ""}></div>
            </div>
            <p htmlFor="imperial-radio">Imperial</p>
          </div>
        </div>
        <div className="flex justify-between measurements">
          <div
            className="relative labels"
            style={{ width: "calc(50% - 12px)" }}
          >
            <label htmlFor="height">Height</label>
            <input type="text" id="height" placeholder="0" required />
            <span className="absolute bottom-2.5">cm</span>
          </div>
          <div
            className="relative labels"
            style={{ width: "calc(50% - 12px)" }}
          >
            <label htmlFor="weight">Weight</label>
            <input type="text" id="weight" placeholder="0" required />
            <span className="absolute bottom-2.5">kg</span>
          </div>
        </div>
        <div className="banner">
          <h3>Welcome! </h3>
          <p>
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      </div>
    </div>
  );
}
