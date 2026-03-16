import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import servicesBanner from "@/assets/services-banner.gif";

const highlights = [
  "Cleaning & Sanitization",
  "Junk & Trash Removal",
  "Demolition & Gut Outs",
  "Fire & Water Damage",
  "Mold & Sewage Cleanup",
  "Floor & Insulation Removal",
  "Hoarding Cleanups",
  "Pressure Washing",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              About Clean Out
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Owner Operated.{" "}
              <span className="text-primary">Local Service.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CLEAN OUT offers same day service 24/7 for cleaning, junk removal, and demolition. 
              We respond within 30 minutes for emergency services including flood cleanup, 
              sewage cleanup, fire cleanup, and hoarding cleanup. Our owner-operated team handles 
              jobs of any scale with professional equipment and care.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/5">
              <img
                src={servicesBanner}
                alt="Clean Out services overview"
                className="w-full h-auto"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 rounded-xl bg-card border border-border shadow-xl p-5"
            >
              <div className="text-3xl font-black text-primary">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Emergency Service</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
