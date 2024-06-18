"use client";

import { useState } from "react";
import Header from "@/header";
import Result from "@/result";
import Tips from "@/tips";

export default function Home() {
  const [radio, setRadio] = useState("metric");

  return (
    <main className="min-h-screen">
      <Header />
      <Result />
      <Tips />
    </main>
  );
}
