import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Experience() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate title
    gsap.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate line
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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen py-section-py px-section-px"
    >
      <div className="py-container-px px-container-pxflex xl:flex-row flex-col-reverse items-center justify-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-heading"
        >
          My Work Experience
        </h2>
        <div
          ref={lineRef}
          className="w-0 h-1 bg-gradient-to-r from-primary to-accent mx-auto my-4 opacity-0"
        ></div>

        <div className="w-full py-10 px-6 flex items-center justify-center">
          <div className="space-y-10">
            <div className="flex 1 ">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 25,
                  delay: 0.3,
                  duration: 1.5,
                }}
                className="w-1/2 text-right pr-6"
              >
                <h3 className="font-bold text-xl text-primary">
                  Dev and Design
                </h3>
                <p className="text-paragraph">Sep 2021 – Dec 2021</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 25,
                  delay: 0.4,
                  duration: 1.5,
                }}
                className="flex flex-col items-center"
              >
                <div className="w-4 h-4 rounded-full border-4 border-border bg-primary"></div>
                <div className="w-px  bg-primary"></div>
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
                className="w-1/2 pl-6"
              >
                <h4 className="font-semibold text-xl text-primary">
                  Junior Frontend Engineer & UI Designer
                </h4>

                <ul className="list-disc list-inside text-paragraph text-sm leading-relaxed">
                  <li>
                    Developed responsive websites using HTML,CSS,and JavaScript.
                  </li>
                  <li>Designed high-fidelity UI mockups in Figma.</li>
                  <li>
                    Optimized web pages for performance and accessibility.
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="flex ">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 25,
                  delay: 0.3,
                  duration: 1.5,
                }}
                className="w-1/2 text-right pr-6"
              >
                <h3 className="font-bold text-xl text-primary">Nali Tech</h3>
                <p className="text-paragraph">Jan 2022 – July 2023</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 25,
                  delay: 0.4,
                  duration: 1.5,
                }}
                className="flex flex-col items-center"
              >
                <div className="w-4 h-4 rounded-full border-4 border-border bg-primary"></div>
                <div className="w-px  bg-primary"></div>
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
                className="w-1/2 pl-6"
              >
                <h4 className="font-semibold text-xl text-primary">
                  Frontend Engineer & Webflow Developer
                </h4>
                <ul className="list-disc list-inside text-paragraph text-sm leading-relaxed">
                  <li>
                    Built custom Webflow CMS solutions for marketing teams.
                  </li>
                  <li>
                    Integrated animations and micro-interactions using GSAP &
                    Lottie.
                  </li>
                  <li>
                    Collaborated with designers to translate prototypes into
                    production-ready websites.
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="flex items-start">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 25,
                  delay: 0.3,
                  duration: 1.5,
                }}
                className="w-1/2 text-right pr-6"
              >
                <h3 className="font-bold text-xl text-primary">GeoLin Tech</h3>
                <p className="text-paragraph">Sep 2023 – Present</p>
              </motion.div>

              {/* Middle */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 25,
                  delay: 0.4,
                  duration: 1.5,
                }}
                className="flex flex-col items-center "
              >
                <div className="w-4 h-4  rounded-full  border-4 border-border bg-primary"></div>
              </motion.div>

              {/* Right */}
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
                className="w-1/2 pl-6"
              >
                <h4 className="font-semibold text-xl text-primary">
                  Frontend Engineer & UX/UI Specialist
                </h4>
                <ul className="list-disc list-inside text-paragraph text-sm leading-relaxed">
                  <li>
                    Led UI/UX design for enterprise-level dashboards and SaaS
                    tools.
                  </li>
                  <li>
                    Developed component libraries using React & Tailwind CSS.
                  </li>
                  <li>
                    Mentored junior developers on clean code practices and
                    design systems.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
