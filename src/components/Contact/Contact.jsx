import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import emailjs from "@emailjs/browser";

function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef1 = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const emailRef = useRef(null); // Added missing ref
  const phoneRef = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_25qpaxn", "template_t80baho", form.current, {
        publicKey: "UmXwliJ2ZefabHN1Y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

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
      paraRef1.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      phoneRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      emailRef.current,
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
    gsap.fromTo(
      contactRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      formRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className=" py-section-py
    px-section-px mt-12"
    >
      <div className="py-container-py px-container-px flex xl:flex-row flex-col-reverse items-center justify-between gap-12">
        <div className="flex flex-col lg:flex-row  gap-10 w-full">
          {/* Left Section */}
          <div
            ref={contactRef}
            className="py-container-px-lg flex flex-col gap-6  w-full md:w-1/2"
          >
            <div ref={titleRef}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading font-family-Dancing Script text-center md:text-left">
                Get In Touch
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin max-w-[90%] lg:max-w-[40rem] tracking-wider text-light/80 mt-3 text-center md:text-left text-paragraph">
                I'd like to hear from you!
              </p>
            </div>

            <div className="text-center md:text-left">
              <p
                ref={paraRef1}
                className="text-paragraph font-thin text-base sm:text-lg md:text-xl"
              >
                If you have any inquiries or just want to say hi, please use the
                contact form!
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                ref={phoneRef}
                href="mailto:schidiuto@gmail.com"
                className="flex flex-row gap-10 items-center text-link hover:text-link-hover cursor-pointer"
              >
                <MdOutlinePhone className="text-xl" />
                +234-8069728670
              </a>
            </div>
            <div className="flex justify-center md:justify-start">
              <a
                ref={emailRef}
                href="mailto:schidiuto@gmail.com"
                className="flex flex-row gap-10 items-center text-link hover:text-link-hovercursor-pointer"
              >
                <MdOutlineEmail className="text-xl" />
                schidiuto@gmail.com
              </a>
            </div>

            <div className="flex flex-row gap-6 items-center justify-center md:justify-start">
              <div className="flex items-center space-x-4 ">
                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="text-link hover:text-link-hover"
                  href="https://github.com/kems-kelly"
                  target="_blank"
                >
                  <FiGithub className="h-5 w-5" />
                </motion.a>

                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="text-link hover:text-link-hover"
                  href="https://x.com/ChidiutoN"
                  target="_blank"
                >
                  <FaXTwitter className="h-5 w-5" />
                </motion.a>

                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="text-link hover:text-link-hover"
                  href="https://www.linkedin.com/in/chidiuto-emmanuela-kelechi-771907244/"
                >
                  <FiLinkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            ref={formRef}
            className="py-container-py-lg px-container-px-lg w-full md:w-1/2 bg-card rounded-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center md:text-left text-heading">
              Contact Me
            </h2>
            <form ref={form} className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-bgbutton bg-card text-paragraph  focus:ring-border focus:border-secondary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-bgbutton bg-card text-paragraph  focus:ring-border focus:border-secondary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-bgbutton bg-card text-light focus:ring-border focus:border-secondary"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 w-full px-4 py-3 rounded-xl bg-primary hover:bg-primary-hover text-card font-semibold transition-all duration-300 shadow-md"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
