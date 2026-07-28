import Link from "next/link";

export function SiteNav({ activePath = "/" }) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="topbar">
      <Link className="brand" href="/">
        Amit Kumar
      </Link>
      <div className="nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={activePath === link.href ? "nav-link-active" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
