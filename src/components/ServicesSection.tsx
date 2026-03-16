import { motion } from "framer-motion";
import {
  Trash2, Droplets, Flame, Home, TreePine, Hammer,
  Bug, SprayCan, Layers, Wind
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Hoarding Clean Up",
    description: "Complete hoarder and clutter cleanup. We remove junk, garbage, trash, flooring, and sanitize the entire area.",
    color: "primary" as const,
    large: true,
  },
  {
    icon: Bug,
    title: "Animal Feces & Urine Removal",
    description: "Rat, raccoon, mice, bat, pigeon, and rodent feces cleanup with full sanitization.",
    color: "warning" as const,
  },
  {
    icon: Layers,
    title: "Insulation Removal",
    description: "Crawlspace, basement, and attic insulation removal and replacement. Blown in, fiberglass, and batt insulation.",
    color: "accent" as const,
  },
  {
    icon: Hammer,
    title: "Floor Removal",
    description: "Carpet, hardwood, tile, linoleum, pergo, and laminate floor removal. We prevent mold damage from wet floors.",
    color: "primary" as const,
  },
  {
    icon: Trash2,
    title: "Junk & Trash Removal",
    description: "Furniture, clutter, hoarding trash, deck, shed, fence, pool, hot tub, and complete estate cleanout services.",
    color: "destructive" as const,
    large: true,
  },
  {
    icon: Droplets,
    title: "Basement, Crawlspace & Attic",
    description: "Emergency cleanup including animal feces, insulation, and junk removal. Flood water, sewage, mold, and fire cleanup.",
    color: "accent" as const,
  },
  {
    icon: Flame,
    title: "Fire, Water, Mold & Sewage",
    description: "24/7 emergency flood, sewage, mold, fire, smoke, soot, and disaster cleanup. Wet carpet and drywall removal.",
    color: "warning" as const,
    large: true,
  },
  {
    icon: Wind,
    title: "Interior & Exterior Demolition",
    description: "Commercial and residential gut-outs. Building, house, barn, garage, shed, deck, and pool demolition.",
    color: "primary" as const,
  },
  {
    icon: SprayCan,
    title: "Pressure Cleaning",
    description: "House, building, deck, parking garage, concrete, basement, and crawlspace pressure washing and painting.",
    color: "accent" as const,
  },
  {
    icon: TreePine,
    title: "Yard Cleanup & Tree Removal",
    description: "Fallen tree removal, roof tarping, tree cutting, yard debris, and storm cleanup services.",
    color: "primary" as const,
  },
];

const colorMap = {
  primary: "bg-primary/10 text-primary border-primary/20",
  accent: "bg-accent/10 text-accent border-accent/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  destructive: "bg-destructive/10 text-destructive border-destructive/20",
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Same Day Service, Every Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From emergency flood cleanup to complete demolition — we respond within 30 minutes and handle jobs of any scale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg ${
                service.large ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-lg border mb-4 ${colorMap[service.color]}`}>
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
