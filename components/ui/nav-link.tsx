"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useLenis } from "lenis/react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const link = linkRef.current;
    const underline = underlineRef.current;

    if (!link || !underline) return;

    // Set initial state
    gsap.set(underline, { scaleX: 0, transformOrigin: "left center" });

    const handleMouseEnter = () => {
      gsap.to(underline, {
        scaleX: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(underline, {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", handleMouseEnter);
      link.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Custom onClick handler
    if (onClick) {
      onClick();
      return;
    }

    // Handle smooth scrolling for anchor links using Lenis
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement && lenis) {
        lenis.scrollTo(targetElement, {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    } else {
      // Handle external links or other navigation
      window.location.href = href;
    }
  };

  return (
    <a
      ref={linkRef}
      href={href}
      onClick={handleClick}
      className={`relative inline-block font-medium text-[#2a2e35] transition-colors duration-200 hover:text-gray-900 cursor-pointer ${className} font-roboto font-medium text-base`}
    >
      {children}
      <div
        ref={underlineRef}
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800"
      />
    </a>
  );
}
