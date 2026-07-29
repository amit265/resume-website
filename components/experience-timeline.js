import Image from "next/image";
import { TrackedLink } from "./tracked-link";

export function ExperienceTimeline({ experience }) {
  return (
    <div className="relative mt-12 space-y-16 pb-8">
      {/* Central Line */}
      <div className="absolute z-0 w-px h-full bg-border left-4 md:left-1/2 md:-translate-x-1/2" />
      
      {experience.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <article key={`${item.company}-${item.period}`} className={`relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Empty Space for Desktop Alignment */}
            <div className="hidden md:block w-[45%]" />
            
            {/* Timeline Node */}
            <div className="absolute left-[12px] md:left-1/2 -translate-x-1/2 mt-8 md:mt-0 w-4 h-4 rounded-full bg-accent ring-[6px] ring-background z-20" />
            
            {/* Card Content */}
            <div className="w-full md:w-[45%] pl-12 md:pl-0">
              <div className="flex flex-col gap-6 bg-surface/40 p-6 md:p-8 rounded-[2rem] border border-border shadow-sm hover:border-border/80 hover:bg-surface/60 transition-all fade-in-up">
                
                {/* Header (Logo & Title) */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {item.logo && (
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 overflow-hidden">
                      {typeof item.logo === 'string' ? (
                        <Image src={item.logo} alt={item.company} width={32} height={32} unoptimized />
                      ) : (
                        item.logo
                      )}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-1">{item.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      {item.url ? (
                        <TrackedLink href={item.url} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent font-medium transition-colors" eventName="experience_link_click" eventLabel={item.company}>
                          {item.company}
                        </TrackedLink>
                      ) : (
                        <span className="text-secondary font-medium">{item.company}</span>
                      )}
                      <span className="text-border text-xs">•</span>
                      <span className="text-secondary/70">{item.location}</span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-secondary leading-relaxed text-sm md:text-base">{item.description}</p>
                
                <ul className="space-y-3">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm md:text-base text-secondary">
                      <span className="text-accent shrink-0 mt-[2px]">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-background border border-border text-secondary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
