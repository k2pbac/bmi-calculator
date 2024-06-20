"use client";

import { useState, useEffect } from "react";
import Header from "@/header";
import Result from "@/result";
import Tips from "@/tips";
import Limitations from "@/limitations";
import MobileLimitations from "@/mobile-limitations";

export default function Home() {
  const [radio, setRadio] = useState("metric");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <main className="min-h-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Header />
      <Result />
      <Tips />
      {width >= 821 ? <Limitations /> : <MobileLimitations />}
    </main>
  );
}
