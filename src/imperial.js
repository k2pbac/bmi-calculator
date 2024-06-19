"use client";

export default function Imperial({ ft, inch, st, pounds, update }) {
  const handleChange = (e, label) => {
    setTimeout(() => {
      update((ev) => ({ ...ev, [label]: e.target.value }));
    }, 500);
  };
  return (
    <div className="flex justify-between measurements imperial">
      <div className="relative labels">
        <div>
          <legend>Height</legend>
          <div className="imperial__inputs">
            <div className="input-container">
              <input
                onChange={(e) => handleChange(e, "ft")}
                placeholder="0"
                value={ft}
                id="feet"
                name="feet"
              />
              <span className="absolute bottom-2.5">ft</span>
            </div>
            <div className="input-container">
              <input
                onChange={(e) => handleChange(e, "inch")}
                placeholder="0"
                value={inch}
                id="inches"
                name="inches"
              />
              <span className="absolute bottom-2.5">in</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative labels">
        <div>
          <legend>Weight</legend>
          <div className="imperial__inputs">
            <div className="input-container">
              <input
                onChange={(e) => handleChange(e, "st")}
                placeholder="0"
                value={st}
                id="st"
                name="st"
              />
              <span className="absolute bottom-2.5">st</span>
            </div>
            <div className="input-container">
              <input
                onChange={(e) => handleChange(e, "pound")}
                placeholder="0"
                value={pounds}
                id="pounds"
                name="pounds"
              />
              <span className="absolute bottom-2.5">lbs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
