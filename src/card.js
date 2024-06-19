"use client";

export default function Card({ link, alt, title, content }) {
  return (
    <div className="card">
      <div>
        <img src={link} alt={alt} />
        <div>{title}</div>
      </div>
      <p>{content}</p>
    </div>
  );
}
