import { SectionHeading } from "./section-heading";
import { principles } from "../lib/site-data";

export function EngineeringPrinciples() {
  return (
    <section className="panel" id="principles">
      <SectionHeading
        eyebrow="Philosophy"
        title="Engineering Principles"
        copy="Core beliefs that guide how I design, architect, and ship software."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {principles.map((principle, index) => (
          <article 
            key={index} 
            className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-3">{principle.text}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
