import { motion } from "framer-motion";
import { Cpu, Camera, Navigation, Monitor } from "lucide-react";

const techItems = [
  {
    icon: Navigation,
    title: "4K DRONE FILMING",
    spec: "DJI Inspire 3 · ProRes RAW",
    desc: "Imagens aéreas cinematográficas em 4K/6K com estabilização profissional e capacidade de filmagem noturna.",
  },
  {
    icon: Camera,
    title: "SONY ALPHA MIRRORLESS",
    spec: "Sony A7S III · FX6 · FX3",
    desc: "Sistema mirrorless full-frame com sensibilidade ISO extrema para captação em qualquer condição de luz.",
  },
  {
    icon: Cpu,
    title: "M4 PROCESSING POWER",
    spec: "Apple M4 Max · DaVinci Resolve",
    desc: "Pós-produção com processamento de última geração para color grading e edição em tempo real em 8K.",
  },
  {
    icon: Monitor,
    title: "HDR MONITORING",
    spec: "SmallHD Cine 13 · REF7",
    desc: "Monitoramento HDR profissional em set para garantir precisão de cor e exposição durante a captação.",
  },
];

const Equipment = () => (
  <section className="py-28 border-y border-border overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-3">Tecnologia</p>
        <h2 className="font-condensed text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
          Production Tech
        </h2>
      </motion.div>
    </div>

    {/* Horizontal scroll on mobile, grid on desktop */}
    <div className="container mx-auto px-6">
      <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto scrollbar-hide pb-4 lg:pb-0 snap-x snap-mandatory">
        {techItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="min-w-[280px] lg:min-w-0 snap-start glass-card glass-card-hover p-8 transition-all duration-500 group"
          >
            <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors mb-6" strokeWidth={1} />
            <h3 className="font-condensed text-sm font-bold tracking-[0.15em] uppercase text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-[10px] tracking-[0.1em] uppercase text-teal-light mb-4">{item.spec}</p>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>

            {/* Teal accent line */}
            <div className="w-0 group-hover:w-10 h-px bg-teal-light mt-6 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Equipment;
