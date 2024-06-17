import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className={inter.className[1] + " header"}>
        <div className="text-container">
          <img src="./logo.svg"></img>
          <h1>
            Body Mass <br></br> Index Calculator
          </h1>
          <p className={inter.className[0]}>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
      </div>
    </main>
  );
}
