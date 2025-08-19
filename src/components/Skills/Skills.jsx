import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import html from "../../assets/images/html.png";
import web from "../../assets/images/web.png";
import js from "../../assets/images/js.png";
import typescript from "../../assets/images/typescript.png";
import node from "../../assets/images/node.png";
import tailwind from "../../assets/images/tailwind.png";
import figma from "../../assets/images/figma.png";

function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const skillRef = useRef(null);
  const lineRef = useRef(null);

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
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      lineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "40%",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      paraRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      skillRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="px-section-px py-section-px container mx-auto  flex flex-col items-center justify-center"
    >
      <div className=" px-container-px py-container-px ">
        <div className="mb-10 p-4 justify-center items-center">
          <h2
            ref={titleRef}
            className=" text-4xl md:text-5xl lg:text-6xl font-bold text-center text-heading opacity-0"
          >
            My Skills
          </h2>
          <div
            ref={lineRef}
            className="w-0 h-1 bg-gradient-to-r from-primary to-accent mx-auto my-4 opacity-0"
          ></div>
          <p
            ref={paraRef}
            className="text-xl md:text-1x1 lg:text-2xl text-center text-paragraph mt-2"
          >
            The skills, tools and technologies i am really good at:
          </p>
        </div>
        <div ref={skillRef} className="flex flex-wrap justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.3,
              duration: 1.3,
            }}
            className="flex flex-col justify-between items-center h-32 p-6  rounded bg-card border-2 border-primary"
          >
            <img src={html} alt="html" className="w-16 h-16" />
            <p className="text-paragraph">HTML</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.4,
              duration: 1.4,
            }}
            className="flex flex-col justify-between items-center h-32 p-6 rounded bg-card border-2 border-primary"
          >
            <img src={web} alt="web" className="w-16 h-16" />
            <p className="text-paragraph">Webflow</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.5,
              duration: 1.5,
            }}
            className="flex flex-col justify-between items-center h-32 p-6 rounded bg-card border-2 border-primary"
          >
            <img src={node} alt="html" className="w-16 h-16" />
            <p className="text-paragraph">NodeJs</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.6,
              duration: 1.6,
            }}
            className="flex flex-col justify-between items-center h-32 p-6 rounded bg-card border-2 border-primary"
          >
            <img src={js} alt="js" className="w-16 h-16" />
            <p className="text-paragraph">JavaScript</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.7,
              duration: 1.7,
            }}
            className="flex flex-col justify-between items-center h-32 p-6 rounded bg-card border-2 border-primary"
          >
            <img src={typescript} alt="typescript" className="w-16 h-16" />
            <p className="text-paragraph">TypeScript</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.8,
              duration: 1.8,
            }}
            className="flex flex-col justify-between items-center h-32 p-6 rounded bg-card border-2 border-primary"
          >
            <img src={tailwind} alt="html" className="w-16 h-16 " />
            <p className="text-paragraph">TailWind</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.9,
              duration: 1.9,
            }}
            className="flex flex-col justify-between items-center h-32 p-6 rounded bg-bg-card border-2 border-primary"
          >
            <img src={figma} alt="html" className="w-16 h-16 " />
            <p className="text-paragraph">Figma</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
