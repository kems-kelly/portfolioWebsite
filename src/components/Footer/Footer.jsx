import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-footer-bg text-white py-section-py px-section-px"
    >
      <div className="max-w-6xl mx-auto py-container-py-lg">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <h2 className="text-3xl font-bold bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
            EmaKelly
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-6 text-xl">
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

        {/* Bottom Section */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent text-sm text-center md:text-left">
            © 2025 KemaKelly. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <a
              className="text-secondary hover:text-accent transition-colors underline-offset-4 hover:underline"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-secondary hover:text-accent transition-colors underline-offset-4 hover:underline"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-secondary hover:text-accent transition-colors underline-offset-4 hover:underline"
              href="#"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
