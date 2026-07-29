import Image from "next/image";

const icons = [
  { src: "/assets/projects/questiongames.png", name: "Question Games" },
  { src: "/assets/projects/trivia.png", name: "Trivia Quest AI" },
  { src: "/assets/projects/spinthewheel.png", name: "Spin the Wheel" },
];

export function AppIconStrip() {
  return (
    <div className="flex items-center gap-3 mt-6 p-4 bg-white/50 rounded-2xl border border-line shadow-sm w-fit fade-in-up" style={{ animationDelay: '200ms' }}>
      <div className="flex -space-x-4">
        {icons.map((icon, i) => (
          <Image
            key={icon.name}
            src={icon.src}
            alt={icon.name}
            width={48}
            height={48}
            className="rounded-xl border-2 border-white shadow-sm object-cover aspect-square relative"
            style={{ zIndex: icons.length - i }}
          />
        ))}
      </div>
      <div className="pl-2">
        <p className="text-sm font-bold text-text m-0">3+ Apps</p>
        <p className="text-xs text-muted m-0">Independently shipped</p>
      </div>
    </div>
  );
}
