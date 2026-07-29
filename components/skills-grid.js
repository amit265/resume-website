import { GlassCard } from "./ui/card";
import { skills } from "../lib/site-data";
import { SectionHeading } from "./section-heading";

export function SkillsGrid() {
  return (
    <section className="panel" id="skills">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I use in production"
        copy="I focus on mastering a few high-leverage technologies rather than collecting logos."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skills.map((skill, index) => (
          <GlassCard 
            key={skill.name} 
            className="p-6 md:p-8 hover-lift border-white/5 bg-white/50 dark:bg-black/20"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-3">{skill.name}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{skill.context}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
