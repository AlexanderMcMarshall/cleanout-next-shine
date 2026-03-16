import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/60 mb-10">
            Call now for a free estimate. We respond to emergencies within 30 minutes — available 24 hours a day, 7 days a week.
          </p>

          <motion.a
            href="tel:1-800-770-0038"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 text-2xl font-black text-primary-foreground shadow-xl shadow-primary/30 transition-colors hover:bg-primary/90"
          >
            <Phone className="h-6 w-6" />
            1-800-770-0038
          </motion.a>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { icon: Clock, text: "Available 24/7" },
              { icon: MapPin, text: "Owner Operated & Local" },
              { icon: Phone, text: "30 Min Emergency Response" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-primary-foreground/50">
                <item.icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
