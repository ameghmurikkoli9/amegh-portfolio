import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: reducedMotion ? 0 : 1.1,
      smoothWheel: !reducedMotion,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
      anchors: {
        offset: -64,
        duration: reducedMotion ? 0 : 1,
      },
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time) => lenis.raf(time * 1000);
    const scrollToTop = () => {
      lenis.stop();
      lenis.scrollTo(0, {
        immediate: reducedMotion,
        duration: reducedMotion ? 0 : 1,
        force: true,
        lock: !reducedMotion,
        onComplete: () => {
          lenis.start();
          ScrollTrigger.update();
        },
      });
    };

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    window.addEventListener("portfolio:scroll-to-top", scrollToTop);

    const animationContext = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)": () => {
          const hero = document.querySelector(".hero");
          const about = document.querySelector(".about");

          if (!hero || !about) return undefined;

          const heroPhoto = hero.querySelector(".hero-photo");
          const portfolioText = hero.querySelector(".hero-portfolio-text");
          const heroDetails = hero.querySelectorAll(
            ".hero-name-block, .hero-stats, .hero-topbar",
          );

          gsap.set(hero, { scale: 1, filter: "brightness(1)" });
          gsap.set(heroPhoto, { scale: 1, yPercent: 0 });
          gsap.set(portfolioText, { yPercent: 0, opacity: 1 });
          gsap.set(heroDetails, { yPercent: 0, opacity: 1 });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: () => `+=${window.innerHeight}`,
              scrub: 0.65,
              pin: true,
              pinSpacing: false,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .fromTo(
              hero,
              {
                scale: 1,
                filter: "brightness(1)",
              },
              {
                scale: 0.94,
                filter: "brightness(0.42)",
                transformOrigin: "center center",
                ease: "none",
              },
              0,
            )
            .fromTo(
              heroPhoto,
              {
                scale: 1,
                yPercent: 0,
              },
              {
                scale: 1.045,
                yPercent: 2,
                ease: "none",
              },
              0,
            )
            .fromTo(
              portfolioText,
              {
                yPercent: 0,
                opacity: 1,
              },
              {
                yPercent: -8,
                opacity: 0.58,
                ease: "none",
              },
              0,
            )
            .fromTo(
              heroDetails,
              {
                yPercent: 0,
                opacity: 1,
              },
              {
                yPercent: -8,
                opacity: 0.35,
                ease: "none",
              },
              0,
            );

          return () => timeline.kill();
        },
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const refreshTimer = window.setTimeout(refresh, 250);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      window.removeEventListener("portfolio:scroll-to-top", scrollToTop);
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(updateLenis);
      animationContext.revert();
      ScrollTrigger.clearMatchMedia();
      lenis.destroy();
    };
  }, []);
}
