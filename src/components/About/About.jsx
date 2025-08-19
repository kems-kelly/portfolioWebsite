import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImage from "../../assets/images/img.png";

function AboutUs() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { y: 300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    starRef.current.forEach((star, index) => {
      if (!star) return;
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 10)}`,
        y: `${direction * -50 - index * 4}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen w-full flex flex-col items-center justify-start px-16 pt-32 pb-24 md:pt-40 md:pb-32 relative"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-${i}`}
            ref={(el) => (starRef.current[i] = el)}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 2}px`,
              height: `${10 + i * 2}px`,
              background: "#fff",
              opacity: 0.1 + Math.random() * 0.2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-12">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-heading opacity-0"
        >
          About Me
        </h2>

        <div
          ref={introRef}
          className="w-full flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12 opacity-0"
        >
          {/* Image */}
          <div className="w-full max-w-md">
            <img
              className="w-full h-auto max-h-[40rem] object-contain mix-blend-multiply"
              src={myImage}
              alt="Ema Kelechi"
            />
          </div>

          {/* Paragraph */}
          <p className="text-sm md:text-xl  max-w-[27rem] lg:max-w-[40rem] tracking-wider text-paragraph">
            I'm Ema, a UX/UI Designer, Frontend Developer, and Webflow
            Specialist with a physicist's precision and a computer scientist's
            logic. My journey began with Bachelor's and Master's degrees in
            Computer Science, where I mastered the art of transforming complex
            problems into elegant systems. Today, I fuse these technical roots
            with design sensibility to build digital experiences that are as
            functional as they are beautiful.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
