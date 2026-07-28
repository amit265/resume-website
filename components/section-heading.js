export function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
