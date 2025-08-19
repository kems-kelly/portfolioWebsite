import { motion } from "framer-motion";
import vector from "../../assets/images/Vector1.png";
import vector2 from "../../assets/images/Vector2.png";
import myImage from "../../assets/images/img.png";
function Hero() {
  return (
    <section className="relative min-h-screen py-section-py px-section-px">
      <div className="py-container-py px-container-px flex xl:flex-row flex-col-reverse items-center justify-between gap-12">
        {/* Left */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            className=" bg-gradient-to-b from-primary to-heading bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 "
          >
            <img src={vector} alt="Decorative vector" />
            Building Fast <br />
            Reliable Results..
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.8,
              duration: 1.5,
            }}
            className="text-xl md:text-1x1 lg:text-2xl text-paragraph max-w-2xl"
          >
            Designing intuitive digital experiences that marry aesthetic
            elegance with functional precision. I transform complex user needs
            into seamless interfaces that people love to use.
          </motion.p>
          <img
            src={vector2}
            alt=""
            className="mt-4 absolute left-4 h-16 w-16"
          />
        </div>
        {/* right */}
        <div>
          <motion.img
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            whileInView={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            viewport={{
              margin: "-15%",
              once: false,
            }}
            src={myImage}
            alt="my profile"
            className="border-10 border-primary rounded-full shadow-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
