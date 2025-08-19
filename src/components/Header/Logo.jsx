import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: 0.3,
        duration: 1.2,
      }}
      className="flex items-center py-nav-py px-nav-px  "
    >
      <div className="h-10 w-10 rounded-xl  bg-gradient-to-b from-primary to-heading  flex items-center justify-center  text-white font-bold text-xl mr-3">
        EK
      </div>
      <span className=" text-xl font-bold  bg-gradient-to-r bg-gradient-to-b from-primary to-heading  bg-clip-text text-transparent flex item-center mr-3 ">
        EmaKelly
      </span>
    </motion.div>
  );
}

export default Logo;
