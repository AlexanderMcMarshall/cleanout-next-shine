import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.gif";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-primary-foreground/10 bg-foreground/80 backdrop-blur-xl"
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Clean Out" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            About
          </a>
          <motion.a
            href="tel:1-800-770-0038"
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </motion.a>
        </div>

        {/* Mobile CTA */}
        <motion.a
          href="tel:1-800-770-0038"
          whileTap={{ scale: 0.98 }}
          className="md:hidden inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
        >
          <Phone className="h-4 w-4" />
          Call
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
