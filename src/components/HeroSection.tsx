import { motion } from "framer-motion";
import { Phone, Clock, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Professional cleanup crew at work" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Available 24/7 — Same Day Service</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-primary-foreground leading-[1.05] mb-6">
            Professional{" "}
            <span className="text-primary">Clean Out</span>{" "}
            & Demolition Services
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
            Owner operated, local service. Emergency response within 30 minutes.
            Cleaning, removal, demolition — we handle it all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.a
              href="tel:1-800-770-0038"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
            >
              <Phone className="h-5 w-5" />
              1-800-770-0038
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-8 py-4 text-lg font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              View Services
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Clock, text: "30 Min Response" },
              { icon: Shield, text: "Owner Operated" },
              { icon: Phone, text: "24/7 Emergency" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 text-primary-foreground/60"
              >
                <item.icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
