gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".sc").forEach((section) => {
  const texts = section.querySelectorAll(".fade-up-text");
  if (!texts.length) return;

  gsap.set(texts, { y: 50, autoAlpha: 0 });

  gsap.to(texts, {
    y: 0,
    autoAlpha: 1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: section,
      start: "top 60%",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
  });

  const animationMap = {
    "fade-up": { y: 100, x: 0, autoAlpha: 0 },
    "fade-left": { y: 0, x: -100, autoAlpha: 0 },
    "fade-right": { y: 0, x: 100, autoAlpha: 0 },
  };

  Object.entries(animationMap).forEach(([key, fromVars]) => {
    const items = section.querySelectorAll(`[data-animate="${key}"]`);
    if (!items.length) return;

    gsap.set(items, fromVars);

    gsap.to(items, {
      y: 0,
      x: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  });
});
