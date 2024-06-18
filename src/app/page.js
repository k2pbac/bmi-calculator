"use client";

import { useState } from "react";
import Header from "@/header";
import Result from "@/result";

export default function Home() {
  const [radio, setRadio] = useState("metric");

  return (
    <main className="min-h-screen">
      <Header />
      <Result />
    </main>
  );
}
