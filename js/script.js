const tl = gsap.timeline();
tl.from(".nav-link", {
  opacity: 0,
  x: 200,
  duration: 0.2,
  stagger: 0.2,
});
tl.from(".hero_img", {
  //   opacity: 0,
  scale: 0,
  duration: 0.5,
  stagger: 0.5,
});
tl.from(".hero-cont", {
  opacity: 0,
  x: -200,
  duration: 0.2,
  stagger: 0.2,
});
tl.from(".pink-hero", {
  opacity: 0,
  y: 50,
  duration: 0.2,
  stagger: 0.2,
});
tl.from(".hero-btn", {
  scale: 0.9,
  duration: 1,
  stagger: 0.2,
  repeat: -1,
  yoyo: true,
});
tl.from(".heroleaf", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  yoyo: true,
  repeat: -1,
});
// For second sec
gsap.from(".second-cont", {
  x: 200,
  opacity: 0,
  duration: 0.2,
  //   stagger: 0.2,
  scrollTrigger: {
    trigger: ".second-cont",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
gsap.from(".second-img", {
  x: -200,
  opacity: 0,
  duration: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".second-img",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
gsap.from(".sec-pink-cont", {
  opacity: 0,
  duration: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".second-cont",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});

gsap.from(".secondleaf", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  yoyo: true,
  repeat: -1,
  scrollTrigger: {
    trigger: ".secondleaf",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
  },
});
// Third Sec
gsap.from(".third-head", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#third",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 2,
  },
});
gsap.from(".menu-item", {
  opacity: 0,
  y: 40,
  duration: 0.3,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#third",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 2,
  },
});
gsap.from(".thirdleaf", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  yoyo: true,
  repeat: -1,
  scrollTrigger: {
    trigger: "#third",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
  },
});
// Fourth Sec
gsap.from(".fourth-cont", {
  x: -200,
  opacity: 0,
  duration: 0.2,
  //   stagger: 0.2,
  scrollTrigger: {
    trigger: "#fourth",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
gsap.from(".fourth-img", {
  x: 200,
  opacity: 0,
  duration: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#fourth",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
gsap.from(".fourth-pink", {
  opacity: 0,
  duration: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#fourth",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
gsap.from(".fourthleaf", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  yoyo: true,
  repeat: -1,
  scrollTrigger: {
    trigger: "#fourth",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
  },
});
// fifth
gsap.from(".fifth-head", {
  opacity: 0,
  x: -200,
  duration: 1,
  scrollTrigger: {
    trigger: "#fifth",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
gsap.from(".inputDiv", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#fifth",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
gsap.from(".para-anime", {
  y: 40,
  duration: 1,
  repeat: -1,
  yoyo: true,
});

gsap.from(".footer-sec", {
  y: 300,
  duration: 2,
  // stagger: 3,
  scrollTrigger: {
    trigger: "#fifth",
    scroller: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
  },
});
