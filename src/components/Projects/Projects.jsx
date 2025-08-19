import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageKolofund from "../../assets/images/kolofund.jpg";
import { CiShare1 } from "react-icons/ci";

function Projects() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titlelineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      title: "Fintech Website",
      imageSrc: imageKolofund,
      link: "https://fintech.example.com", // 🔗 Add your real project URL
    },
    {
      id: 2,
      title: "3D Gaming Website",
      imageSrc: imageKolofund,
      link: "https://3dgaming.example.com",
      behancelink:
        "https://www.behance.net/gallery/232525501/KoloFund-Fintech-Savings-App",
      behance:
        "https://www.behance.net/gallery/232525501/KoloFund-Fintech-Savings-App",
      figma:
        "https://www.figma.com/proto/zkTIMSB81MjlyctqnP1Vwv?content-scaling=fixed&kind=proto&node-id=588-32559&page-id=87:23054&scaling=min-zoom&starting-point-node-id=588:32543",
    },
    {
      id: 3,
      title: "Startup App",
      imageSrc: imageKolofund,
      link: "https://startupapp.example.com",
    },
    {
      id: 4,
      title: "3D Gaming Website",
      imageSrc: imageKolofund,
      link: "https://3dgaming2.example.com",
    },
    {
      id: 5,
      title: "3D Gaming Website",
      imageSrc: imageKolofund,
      link: "https://3dgaming3.example.com",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title entrance
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      titlelineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "50%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section entrance
    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotateX: 20, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 100%" },
      {
        backgroundPosition: "50% 0%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Horizontal scroll
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.scrollWidth}`, // ✅ fixed
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { main: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    // Image + title animation per panel
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      tl.fromTo(
        image,
        { scale: 0, rotate: -20 },
        { scale: 1, rotate: 1, duration: 0.5 }
      );
      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2); // ✅ fixed args
      }
    });
  }, [projectImages.length]);

  // horizontal-section
  return (
    <section
      ref={sectionRef}
      id="projects "
      className="px-section-px py-section-py sm:-[-10] lg:mt-40"
    >
      <div
        id="projects-anchor"
        className="mx-auto mb-4 md:mb-6 lg:mb-8 px-4 relative z-10"
      >
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading text-center mb-4 md:mb-8 lg:mb-10 opacity-0"
        >
          Featured Projects
        </h2>
        <div
          ref={titlelineRef}
          className="w-0 h-1 bg-gradient-to-r from-primary to-accent mx-auto opacity-0 relative bottom-2"
        ></div>

        <div
          ref={triggerRef}
          className="overflow-hidden opacity-0 mt-6 md:mt-8 lg:mt-12"
        >
          <div
            ref={horizontalRef}
            className="horizontal-section flex md:w-[400%] w-[420%]"
          >
            {projectImages.map((project) => (
              <div
                key={project.id}
                className="panel w-[100%] h-[100vh] relative flex flex-col items-center justify-center p-4 sm:p-12"
              >
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.imageSrc}
                  alt={project.title}
                />

                <h2 className="project-title flex items-center gap-3 md:text-2xl text-lg font-bold text-primary mt-6 z-50 text-center ">
                  {project.title}
                </h2>

                {/* Showcase Links */}
                <div className="flex flex-wrap gap-4 text-xl  text-link">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-link-hover transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.behance && (
                    <a
                      href={project.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-link-hover transition-colors"
                    >
                      Behance Case Study
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-link-hover transition-colors"
                    >
                      Figma Prototype
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
