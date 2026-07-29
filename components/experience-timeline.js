import Image from "next/image";
import { TrackedLink } from "./tracked-link";

export function ExperienceTimeline({ experience }) {
  return (
    <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-6 mt-8 space-y-12 pb-8">
      {experience.map((item, index) => (
        <article key={`${item.company}-${item.period}`} className="relative pl-8 md:pl-12">
          {/* Timeline Node */}
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-white" />
          
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 bg-white/60 p-6 md:p-8 rounded-[2rem] border border-line shadow-sm hover:shadow-md transition-shadow fade-in-up">
            
            {/* Logo */}
            {item.logo && (
              <div className="w-12 h-12 rounded-xl bg-surface border border-border shadow-sm flex items-center justify-center shrink-0 overflow-hidden text-primary">
                {typeof item.logo === 'string' ? (
                  <Image src={item.logo} alt={item.company} width={32} height={32} unoptimized />
                ) : (
                  item.logo
                )}
              </div>
            )}
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                  <p className="text-slate-600 font-medium text-sm">
                    {item.url ? (
                      <TrackedLink href={item.url} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors" eventName="experience_link_click" eventLabel={item.company}>
                        {item.company}
                      </TrackedLink>
                    ) : (
                      item.company
                    )}
                    <span className="text-slate-400 font-normal"> · {item.location}</span>
                  </p>
                </div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full w-fit">
                  {item.period}
                </span>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
              
              <ul className="space-y-2 mb-6">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-indigo-400 mt-[2px]">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </article>
      ))}
    </div>
  );
}
