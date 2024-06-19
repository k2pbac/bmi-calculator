"use client";

export default function Card({ link, alt, title, content }) {
  return (
    <div className="card">
      <div>
        <img src={link} alt={alt} />
        <p>{title}</p>
      </div>
      <p>{content}</p>
    </div>
  );
}
