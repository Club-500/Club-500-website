"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = () => document.querySelectorAll(".rv:not(.in)");
    const markVisible = () => {
      const vh = window.innerHeight;
      els().forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95) el.classList.add("in");
      });
    };
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          }),
        { threshold: 0.12 }
      );
      els().forEach((el) => io?.observe(el));
    }
    const t1 = setTimeout(markVisible, 80);
    const t2 = setTimeout(markVisible, 450);
    const sweep = setInterval(markVisible, 350);
    let deb: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(deb);
      deb = setTimeout(markVisible, 50);
      markVisible();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io?.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(deb);
      clearInterval(sweep);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  });
}
