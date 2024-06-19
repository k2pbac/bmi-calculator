"use client";

import { useState } from "react";
import Header from "@/header";
import Result from "@/result";
import Tips from "@/tips";
import Limitations from "@/limitations";

export default function Home() {
  const [radio, setRadio] = useState("metric");

  return (
    <main className="min-h-screen">
      <Header />
      <Result />
      <Tips />
      <Limitations />
    </main>
  );
}
