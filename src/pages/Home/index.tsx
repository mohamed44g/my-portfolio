import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.scss";

type Particle = { index: number; angle: number; seed: number; radius: number; speed: number };
type Point = { x: number; y: number; depth: number };

const CHAPTERS = 6;

type Project = {
  name: string;
  eyebrow: string;
  description: string;
  liveUrl: string;
  images: { src: string; alt: string }[];
  features: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    name: "Sukoon Perfumes",
    eyebrow: "Arabic perfume commerce platform",
    description: "An Arabic-first perfume store with an immersive storefront and a complete operations dashboard for products, offers, orders, customers, shipping, and sales analytics.",
    liveUrl: "https://sukoon-nine.vercel.app/",
    images: [
      { src: "/projects/sukoon-store.png", alt: "Sukoon perfume store landing page" },
      { src: "/projects/sukoon-product.png", alt: "Sukoon detailed perfume product page" },
      { src: "/projects/sukoon-offers.png", alt: "Sukoon perfume offers carousel" },
      { src: "/projects/sukoon-dashboard.png", alt: "Sukoon ecommerce analytics dashboard" },
      { src: "/projects/sukoon-products.png", alt: "Sukoon product management dashboard" },
    ],
    features: ["Storefront", "Product variants", "Orders", "Offers", "Analytics", "Admin roles"],
    stack: ["Next.js 16", "React 19", "Material UI", "NestJS 11", "PostgreSQL", "JWT", "Firebase"],
  },
  {
    name: "Wagbk",
    eyebrow: "Homework and progress platform",
    description: "A role-based education platform that connects students and teachers through groups, access codes, homework submissions, correction workflows, and weekly progress reporting.",
    liveUrl: "https://wagbk.com/",
    images: [
      { src: "/projects/wagbk-hero.png", alt: "Wagbk education platform landing page" },
      { src: "/projects/wagbk-progress.png", alt: "Wagbk student weekly progress dashboard" },
      { src: "/projects/wagbk-login.png", alt: "Wagbk student and teacher login" },
      { src: "/projects/wagbk-dashboard.png", alt: "Wagbk admin control dashboard" },
      { src: "/projects/wagbk-access.png", alt: "Wagbk group access code generator" },
    ],
    features: ["Student & teacher roles", "Groups", "Access codes", "Homework", "Submissions", "Weekly evaluation"],
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "NestJS 11", "PostgreSQL", "Redis", "Swagger"],
  },
  {
    name: "Nour Borsa",
    eyebrow: "Sharia-compliant stock intelligence",
    description: "An Arabic financial research platform that simplifies Egyptian stock data, Sharia compliance, purification calculations, company fundamentals, market news, and AI-assisted technical analysis.",
    liveUrl: "https://nourborsa.com/",
    images: [
      { src: "/projects/nourborsa-hero.png", alt: "Nour Borsa stock research landing page" },
      { src: "/projects/nourborsa-ai.png", alt: "Nour AI stock analysis experience" },
      { src: "/projects/nourborsa-stock.png", alt: "Nour Borsa company and Sharia stock details" },
      { src: "/projects/nourborsa-summary.png", alt: "Nour Borsa financial summary and company news" },
      { src: "/projects/nourborsa-plans.jpeg", alt: "Nour Borsa subscription plans and policy" },
    ],
    features: ["Stock screening", "Sharia compliance", "Nour AI analysis", "Financial ratios", "Market news", "Community forum"],
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "NestJS 12", "PostgreSQL", "Prisma", "Gemini AI"],
  },
];

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article className="project-case">
      <div className="project-gallery">
        <div className="project-main-image">
          <img src={project.images[activeImage].src} alt={project.images[activeImage].alt} />
          <span className="image-count">{String(activeImage + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}</span>
        </div>
        <div className="project-thumbnails" aria-label={`${project.name} screenshots`}>
          {project.images.map((image, imageIndex) => (
            <button className={activeImage === imageIndex ? "active" : ""} type="button" onClick={() => setActiveImage(imageIndex)} key={image.src} aria-label={`Show ${image.alt}`}>
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      </div>
      <div className="project-details">
        <div className="project-heading-row"><span>0{index + 1}</span><p>{project.eyebrow}</p></div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-block"><small>CORE EXPERIENCE</small><div className="project-pills">{project.features.map((feature) => <span key={feature}>{feature}</span>)}</div></div>
        <div className="project-block"><small>BUILT WITH</small><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
        <a className="project-live" href={project.liveUrl} target="_blank" rel="noreferrer">VIEW LIVE PROJECT</a>
      </div>
    </article>
  );
}

function pointFor(stage: number, particle: Particle, width: number, height: number): Point {
  const mobile = width < 760;
  const scale = Math.min(width, height);
  const angle = particle.angle;
  const noise = Math.sin(particle.seed * 31.7) * particle.radius;
  const ratio = particle.index / 820;
  const shimmer = Math.sin(angle * 1.65 + particle.seed * 7) * 1.4;
  const jitter = noise * 0.09 + shimmer;
  const mix = (start: number, end: number, amount: number) => start + (end - start) * amount;
  const line = (x1: number, y1: number, x2: number, y2: number, amount: number, depth = 0.45): Point => ({
    x: mix(x1, x2, amount) + jitter,
    y: mix(y1, y2, amount) + jitter * 0.35,
    depth: depth + Math.sin(amount * Math.PI) * 0.25,
  });
  const superellipse = (centerX: number, centerY: number, radiusX: number, radiusY: number, amount: number, depth = 0): Point => {
    const corner = Math.min(radiusX * 0.14, radiusY * 0.32);
    const horizontal = radiusX * 2 - corner * 2;
    const vertical = radiusY * 2 - corner * 2;
    const arc = Math.PI * corner * 0.5;
    const perimeter = horizontal * 2 + vertical * 2 + arc * 4;
    let distance = amount * perimeter;
    const left = centerX - radiusX;
    const right = centerX + radiusX;
    const top = centerY - radiusY;
    const bottom = centerY + radiusY;
    const arcPoint = (arcCenterX: number, arcCenterY: number, startAngle: number, arcDistance: number): Point => {
      const pathAngle = startAngle + (arcDistance / arc) * Math.PI * 0.5;
      return {
        x: arcCenterX + Math.cos(pathAngle) * corner + jitter,
        y: arcCenterY + Math.sin(pathAngle) * corner + jitter * 0.35,
        depth: depth + Math.sin(pathAngle) * 0.22,
      };
    };

    if (distance < horizontal) return line(left + corner, top, right - corner, top, distance / horizontal, depth);
    distance -= horizontal;
    if (distance < arc) return arcPoint(right - corner, top + corner, -Math.PI * 0.5, distance);
    distance -= arc;
    if (distance < vertical) return line(right, top + corner, right, bottom - corner, distance / vertical, depth);
    distance -= vertical;
    if (distance < arc) return arcPoint(right - corner, bottom - corner, 0, distance);
    distance -= arc;
    if (distance < horizontal) return line(right - corner, bottom, left + corner, bottom, distance / horizontal, depth);
    distance -= horizontal;
    if (distance < arc) return arcPoint(left + corner, bottom - corner, Math.PI * 0.5, distance);
    distance -= arc;
    if (distance < vertical) return line(left, bottom - corner, left, top + corner, distance / vertical, depth);
    distance -= vertical;
    return arcPoint(left + corner, top + corner, Math.PI, Math.min(distance, arc));
  };
  const circle = (centerX: number, centerY: number, radius: number, amount: number, depth = 0.6): Point => {
    const pathAngle = amount * Math.PI * 2;
    return {
      x: centerX + Math.cos(pathAngle) * radius + jitter * 0.35,
      y: centerY + Math.sin(pathAngle) * radius + jitter * 0.2,
      depth: depth + Math.sin(pathAngle) * 0.2,
    };
  };

  if (stage === 0) {
    const centerX = width * (mobile ? 0.5 : 0.68);
    const centerY = height * (mobile ? 0.34 : 0.55);
    const radiusX = scale * (mobile ? 0.39 : 0.255);
    const radiusY = scale * (mobile ? 0.17 : 0.17);
    if (ratio < 0.4) return superellipse(centerX, centerY, radiusX, radiusY, ratio / 0.4);
    if (ratio < 0.46) return line(centerX - radiusX, centerY - radiusY * 0.54, centerX + radiusX, centerY - radiusY * 0.54, (ratio - 0.4) / 0.06, 0.2);
    if (ratio < 0.52) {
      const dotProgress = (ratio - 0.46) / 0.06;
      const dotIndex = Math.min(2, Math.floor(dotProgress * 3));
      return circle(centerX - radiusX * 0.78 + dotIndex * radiusX * 0.12, centerY - radiusY * 0.76, mobile ? 1.7 : 2.4, (dotProgress * 3) % 1, 0.9);
    }
    const codeLines = [
      [-0.62, -0.24, 0.06, -0.24],
      [-0.46, -0.06, 0.5, -0.06],
      [-0.62, 0.12, -0.12, 0.12],
      [-0.34, 0.3, 0.4, 0.3],
    ];
    const linesProgress = (ratio - 0.52) / 0.48;
    const lineIndex = Math.min(codeLines.length - 1, Math.floor(linesProgress * codeLines.length));
    const [x1, y1, x2, y2] = codeLines[lineIndex];
    return line(centerX + x1 * radiusX, centerY + y1 * radiusY, centerX + x2 * radiusX, centerY + y2 * radiusY, (linesProgress * codeLines.length) % 1, lineIndex % 2 ? 0.25 : 0.75);
  }

  if (stage === 1) {
    const centerY = mobile ? height * 0.29 : height * 0.47;
    const radius = scale * (0.2 + particle.seed * 0.035);
    return {
      x: width * (mobile ? 0.55 : 0.31) + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius * 0.78,
      depth: Math.cos(angle * 2),
    };
  }

  if (stage === 2) {
    const centerY = mobile ? height * 0.29 : height * 0.47;
    const radius = scale * (0.16 + particle.seed * 0.1);
    return {
      x: width * 0.5 + Math.cos(angle) * radius * (1 + Math.sin(particle.seed * 10) * 0.3),
      y: centerY + Math.sin(angle * 2) * radius * 0.68,
      depth: Math.sin(angle + particle.seed * 5),
    };
  }

  if (stage === 3) {
    const centerY = mobile ? height * 0.29 : height * 0.47;
    const radius = scale * (0.17 + particle.seed * 0.065);
    return {
      x: width * 0.5 + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius * 0.72 + Math.sin(angle * 4) * 24,
      depth: Math.cos(angle * 3),
    };
  }

  const centerY = mobile ? height * 0.29 : height * 0.47;
  const radius = scale * (0.21 + particle.seed * 0.06);
  return {
    x: width * 0.5 + Math.cos(angle * 2) * radius * 0.92,
    y: centerY + Math.sin(angle) * radius,
    depth: Math.sin(angle * 2),
  };
}

export default function Home() {
  const experience = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const progress = useRef(0);
  const pointer = useRef({ x: -1000, y: -1000, burst: 0 });
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = experience.current;
    if (!root) return;

    const context = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>(".scene");

      const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      introTimeline
        .fromTo([".particle-stage", ".space-noise"], { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.1 }, 0)
        .fromTo(".experience-nav", { autoAlpha: 0, y: -18 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.08)
        .fromTo(".particle-name", { autoAlpha: 0, scale: 0.97 }, { autoAlpha: 0.48, scale: 1, duration: 0.9 }, 0.12)
        .fromTo(".copy-intro .scene-label", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.48 }, 0.26)
        .fromTo(".copy-intro h1", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.36)
        .fromTo(".copy-intro .intro-skills p", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.1 }, 0.62);

      scenes.forEach((scene, index) => {
        ScrollTrigger.create({
          trigger: scene,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveChapter(index),
          onEnterBack: () => setActiveChapter(index),
        });
      });

      scenes.slice(0, -1).forEach((scene, index) => {
        ScrollTrigger.create({
          trigger: scene,
          start: "bottom 35%",
          end: "bottom -20%",
          scrub: true,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            progress.current = index + self.progress;
          },
          onLeave: () => {
            progress.current = index + 1;
          },
          onLeaveBack: () => {
            progress.current = index;
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".scene-copy:not(.copy-intro)").forEach((copy) => {
        const scene = copy.closest(".scene");
        const titles = copy.querySelectorAll<HTMLElement>(":scope > .scene-label, :scope > h2");
        const details = copy.querySelectorAll<HTMLElement>(
          ".scene-description, .scene-tags, .skill-group, .journey-list span, .contact-button, .contact-links, .contact-meta",
        );
        const prepareEntrance = () => {
          gsap.set(titles, { autoAlpha: 0, y: 30 });
          gsap.set(details, { autoAlpha: 0, y: 20 });
        };
        prepareEntrance();

        const entrance = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } })
          .to(titles, { autoAlpha: 1, y: 0, duration: 0.58, stagger: 0.09 })
          .to(details, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.07 }, "<0.18");
        const revealEntrance = () => {
          prepareEntrance();
          entrance.restart();
        };

        ScrollTrigger.create({
          trigger: scene,
          start: "top top",
          onEnter: revealEntrance,
          onEnterBack: revealEntrance,
          onLeaveBack: prepareEntrance,
          invalidateOnRefresh: true,
        });

        gsap.to([...titles, ...details], {
          autoAlpha: 0,
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: scene,
            start: "bottom 42%",
            end: "bottom 18%",
            scrub: true,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });
      });

      const projectRail = root.querySelector<HTMLElement>(".project-rail");
      if (projectRail) {
        const projectCards = gsap.utils.toArray<HTMLElement>(projectRail.querySelectorAll(".project-case"));
        gsap.set(projectCards, { autoAlpha: 0, y: 70, scale: 0.965 });
        const firstProject = projectCards[0];
        const prepareFirstProject = () => gsap.set(firstProject, { autoAlpha: 0, y: 50, scale: 0.98 });
        prepareFirstProject();
        const revealFirstProject = () => {
          prepareFirstProject();
          gsap.to(firstProject, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.64,
            ease: "power3.out",
            overwrite: true,
          });
        };
        ScrollTrigger.create({
          trigger: ".scene-work",
          start: "top top",
          onEnter: revealFirstProject,
          onEnterBack: revealFirstProject,
          onLeaveBack: prepareFirstProject,
          invalidateOnRefresh: true,
        });
        const projectTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".scene-work",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });
        projectTimeline.to({}, { duration: 0.55 });
        projectCards.forEach((card, index) => {
          if (index === projectCards.length - 1) return;
          projectTimeline
            .to(card, { autoAlpha: 0, y: -70, scale: 0.965, duration: 0.28 })
            .fromTo(projectCards[index + 1], { autoAlpha: 0, y: 70, scale: 0.965 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.32 }, ">-0.02")
            .to({}, { duration: 0.55 });
        });
        const projectHeading = gsap.utils.toArray<HTMLElement>(".projects-heading .scene-label, .projects-heading h2");
        const prepareProjectHeading = () => gsap.set(projectHeading, { autoAlpha: 0, y: 28 });
        prepareProjectHeading();
        const revealProjectHeading = () => {
          prepareProjectHeading();
          gsap.to(projectHeading, { autoAlpha: 1, y: 0, duration: 0.58, ease: "power3.out", stagger: 0.08, overwrite: true });
        };
        ScrollTrigger.create({
          trigger: ".scene-work",
          start: "top top",
          onEnter: revealProjectHeading,
          onEnterBack: revealProjectHeading,
          onLeaveBack: prepareProjectHeading,
          invalidateOnRefresh: true,
        });
      }

      ScrollTrigger.refresh();
    }, root);
    let active = true;
    const refresh = () => {
      if (active) ScrollTrigger.refresh();
    };
    const refreshFrame = window.requestAnimationFrame(refresh);
    window.addEventListener("load", refresh, { once: true });
    document.fonts?.ready.then(refresh);

    return () => {
      active = false;
      window.cancelAnimationFrame(refreshFrame);
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, []);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const context = element.getContext("2d");
    if (!context) return;

    const particles: Particle[] = Array.from({ length: 820 }, (_, index) => ({
      index,
      angle: (index / 820) * Math.PI * 2 + Math.sin(index * 9.13) * 0.35,
      seed: ((index * 47) % 101) / 101,
      radius: ((index * 17) % 23) - 11,
      speed: 0.35 + ((index * 13) % 19) / 40,
    }));
    let frame = 0;
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
      width = window.innerWidth;
      height = window.innerHeight;
      element.width = width * dpr;
      element.height = height * dpr;
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      frame += 0.012;
      context.clearRect(0, 0, width, height);
      const scaled = progress.current * (CHAPTERS - 1);
      const stage = Math.min(CHAPTERS - 1, Math.floor(scaled));
      const nextStage = Math.min(CHAPTERS - 1, stage + 1);
      const blend = scaled - stage;
      const easedBlend = blend;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const drifted = { ...particle, angle: particle.angle + frame * particle.speed };
        const from = pointFor(stage, drifted, width, height);
        const to = pointFor(nextStage, drifted, width, height);
        let x = from.x + (to.x - from.x) * easedBlend;
        let y = from.y + (to.y - from.y) * easedBlend;
        const depth = from.depth + (to.depth - from.depth) * easedBlend;
        const dx = x - pointer.current.x;
        const dy = y - pointer.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 90) {
          const force = (90 - distance) / 90;
          x += (dx / Math.max(distance, 1)) * force * (22 + pointer.current.burst * 55);
          y += (dy / Math.max(distance, 1)) * force * (22 + pointer.current.burst * 55);
        }
        const size = Math.max(0.55, 1.15 + depth * 0.65 + particle.seed * 0.8);
        const alpha = 0.28 + particle.seed * 0.62;
        context.beginPath();
        context.fillStyle = index % 7 === 0 ? `rgba(55,139,255,${alpha * 0.88})` : `rgba(13,110,253,${alpha})`;
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();
      }
      pointer.current.burst *= 0.94;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const updatePointer = (event: React.PointerEvent<HTMLElement>) => {
    pointer.current.x = event.clientX;
    pointer.current.y = event.clientY;
  };

  return (
    <main className="experience" ref={experience} onPointerMove={updatePointer} onPointerDown={() => { pointer.current.burst = 1; }}>
      <canvas className="particle-stage" ref={canvas} aria-hidden="true" />
      <div className="space-noise" aria-hidden="true" />

      <nav className="experience-nav" aria-label="Primary navigation">
        <a className="experience-logo" href="#intro">MB<span>.</span></a>
        <div className="experience-links"><a href="#skills">SKILLS</a><a href="#work">WORK</a><a href="#process">JOURNEY</a><a href="#contact">CONTACT</a></div>
        <a className="nav-contact" href="mailto:mohammedbadry456@gmail.com">LET&apos;S TALK</a>
      </nav>

      <div className="particle-name" aria-hidden="true">MOHAMED</div>

      <section className="scene scene-intro" id="intro">
        <div className="scene-sticky">
          <div className="scene-copy copy-intro">
            <p className="scene-label">MOHAMED BADRY — FULL-STACK DEVELOPER</p>
            <h1>Digital products<br /><span>that feel alive.</span></h1>
            <div className="intro-skills">
              <p><b>React</b><small>Front-end</small></p>
              <p><b>Node.js</b><small>Back-end</small></p>
              <p><b>React Native</b><small>Mobile</small></p>
            </div>
          </div>
        </div>
      </section>

      <section className="scene scene-interface" id="interface">
        <div className="scene-sticky">
          <div className="scene-copy copy-right">
            <p className="scene-label">01 — WHAT I DO</p>
            <h2>Idea<br /><span>to product.</span></h2>
            <p className="scene-description">I build responsive websites, full-stack applications, and mobile experiences—then support the product for six months after delivery.</p>
            <div className="scene-tags"><span>Websites</span><span>Applications</span><span>Mobile</span><span>Support</span></div>
          </div>
        </div>
      </section>

      <section className="scene scene-skills" id="skills">
        <div className="scene-sticky">
          <div className="scene-copy copy-skills">
            <p className="scene-label">02 — THE TOOLKIT</p>
            <h2>Tools behind<br /><span>the experience.</span></h2>
            <div className="skills-groups">
              <div className="skill-group"><div className="skill-group-title"><b>01</b><span>FRONT-END</span></div><p><span>HTML / CSS</span><span>JavaScript</span><span>TypeScript</span><span>React</span><span>Next.js</span><span>Sass</span><span>Bootstrap</span><span>Material UI</span></p></div>
              <div className="skill-group"><div className="skill-group-title"><b>02</b><span>BACK-END</span></div><p><span>Node.js</span><span>Express</span><span>NestJS</span><span>PostgreSQL</span><span>MongoDB</span></p></div>
              <div className="skill-group"><div className="skill-group-title"><b>03</b><span>MOBILE & MOTION</span></div><p><span>React Native</span><span>GSAP</span><span>Git</span></p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="scene scene-work" id="work">
        <div className="scene-sticky">
          <div className="projects-heading"><p className="scene-label">03 — SELECTED WORK</p><h2>Built for <span>real users.</span></h2></div>
          <div className="project-rail">{projects.map((project, index) => <ProjectCase project={project} index={index} key={project.name} />)}</div>
        </div>
      </section>

      <section className="scene scene-process" id="process">
        <div className="scene-sticky">
          <div className="scene-copy copy-center">
            <p className="scene-label">04 — MY JOURNEY</p>
            <h2>Learning<br /><span>into building.</span></h2>
            <p className="scene-description">From CS50 and ITI front-end training to React Native, Node.js, and web design—each step expanded what I can ship.</p>
            <div className="journey-list"><span><b>2022</b> CS50 · Harvard</span><span><b>2023</b> Front End · ITI</span><span><b>2024</b> Node.js · React Native</span><span><b>2024</b> Web Design · NTI</span></div>
          </div>
        </div>
      </section>

      <section className="scene scene-contact" id="contact">
        <div className="scene-sticky">
          <div className="scene-copy copy-contact">
            <p className="scene-label">05 — NEXT</p>
            <h2>Let&apos;s build<br /><span>something unreal.</span></h2>
            <a className="contact-button" href="mailto:mohammedbadry456@gmail.com">START A PROJECT</a>
            <div className="contact-links"><a href="mailto:mohammedbadry456@gmail.com">Email</a><a href="https://wa.me/201017893980" target="_blank" rel="noreferrer">WhatsApp</a><a href="https://github.com/mohamed44g" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mohammed-badry-566a91315/" target="_blank" rel="noreferrer">LinkedIn</a></div>
            <p className="contact-meta">Qena, Egypt · Available remotely</p>
          </div>
        </div>
      </section>

      <div className="experience-progress" aria-hidden="true"><b>{String(activeChapter + 1).padStart(2, "0")}</b><span><i style={{ width: `${((activeChapter + 1) / CHAPTERS) * 100}%` }} /></span><em>06</em></div>
      <p className="interaction-hint">MOVE · CLICK TO BURST</p>
      <p className="side-scroll">SCROLL</p>
    </main>
  );
}
