"use client";

import { useState, useEffect } from "react";
import Metric from "./metric";
import Imperial from "./imperial";
import {
  metricBMI,
  imperialBMI,
  getResults,
  lowerBMI,
  higherBMI,
} from "./helper";

export default function Header() {
  const [radio, setRadio] = useState("metric");
  const [metric, setMetric] = useState({ height: 0, weight: 0 });
  const [BMI, setBMI] = useState(0);
  const [imperial, setImperial] = useState({
    ft: 0,
    inch: 0,
    st: 0,
    pound: 0,
  });

  useEffect(() => {
    if (radio === "metric") {
      if (metric.height > 0 && metric.weight > 0) {
        setBMI(metricBMI(metric.height, metric.weight));
      }
    } else {
      if (
        parseInt(imperial.ft) > 0 &&
        parseInt(imperial.inch) >= 0 &&
        parseInt(imperial.st) >= 0 &&
        parseInt(imperial.pound) >= 0
      ) {
        setBMI(
          imperialBMI(
            parseInt(imperial.st * 14) + parseInt(imperial.pound),
            parseInt(imperial.ft),
            parseInt(imperial.inch)
          )
        );
      }
    }
  }, [metric, imperial]);

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
        {radio === "metric" ? (
          <Metric measurements={metric} update={setMetric} />
        ) : (
          <Imperial measurements={imperial} update={setImperial} />
        )}
        {(radio === "metric" && (!metric.height || !metric.weight)) ||
        (radio === "imperial" &&
          (!imperial.ft ||
            !imperial.inch ||
            !imperial.st ||
            !imperial.pound)) ? (
          <div className="banner-empty">
            <h3>Welcome! </h3>
            <p>
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        ) : (
          <div className="banner">
            <p className="banner-header">
              Your BMI is... <span>{BMI}</span>
            </p>
            <p>
              Your BMI suggests you’re {getResults(BMI)}. Your ideal weight is
              between{" "}
              <strong>
                {lowerBMI(metric.height)}kgs - {higherBMI(metric.height)}
                kgs.
              </strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
