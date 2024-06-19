"use client";

export default function Metric({ height, weight, update }) {
  const handleChange = (e, label) => {
    setTimeout(() => {
      update((ev) => ({ ...ev, [label]: e.target.value }));
    }, 500);
  };
  return (
    <div className="flex justify-between measurements">
      <div className="relative labels" style={{ width: "calc(50% - 12px)" }}>
        <label htmlFor="height">Height</label>
        <input
          onChange={(e) => handleChange(e, "height")}
          type="text"
          id="height"
          placeholder="0"
          value={height}
          required
        />
        <span className="absolute bottom-2.5">cm</span>
      </div>
      <div className="relative labels" style={{ width: "calc(50% - 12px)" }}>
        <label htmlFor="weight">Weight</label>
        <input
          onChange={(e) => handleChange(e, "weight")}
          type="text"
          id="weight"
          placeholder="0"
          value={weight}
          required
        />
        <span className="absolute bottom-2.5">kg</span>
      </div>
    </div>
  );
}
