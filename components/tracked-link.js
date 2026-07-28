"use client";

import Link from "next/link";
import { trackEvent } from "../lib/analytics";

export function TrackedLink({
  href,
  eventName,
  eventLabel,
  eventParams = {},
  children,
  className,
  ...props
}) {
  const handleClick = () => {
    trackEvent(eventName, {
      link_url: href,
      link_text: eventLabel,
      ...eventParams,
    });
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function TrackedNextLink({
  href,
  eventName,
  eventLabel,
  eventParams = {},
  children,
  className,
  ...props
}) {
  const handleClick = () => {
    trackEvent(eventName, {
      link_url: href,
      link_text: eventLabel,
      ...eventParams,
    });
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
