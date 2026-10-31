import { motion } from "framer-motion";
import { Film, Camera, Building } from "lucide-react";
import showreelBg from "@/assets/showreel-bg.jpg";
import aboutPhoto from "@/assets/about-photo.jpg";
import studioSpace from "@/assets/studio-space.jpg";

const pillars = [
  {
    icon: Film,
    title: "FILMMAKING & DRONE",
    desc: "Produção cinematográfica de alto impacto com foco em movimento, esportes e automotivo. Imagens aéreas com drones profissionais certificados.",
    image: showreelBg,
    tags: ["Direção", "Drones 4K", "Esportes", "Automotivo"],
  },
  {
    icon: Camera,
    title: "PHOTOGRAPHY",
    desc: "Captação fotográfica high-end para marcas, retratos criativos e lifestyle. Cada frame planejado com precisão cinematográfica.",
    image: aboutPhoto,
    tags: ["Retratos", "Produto", "Lifestyle", "Editorial"],
  },
  {
    icon: Building,
    title: "STUDIO SPACE",
    desc: "Infraestrutura completa de produção com iluminação profissional, ciclorama, e equipamento de ponta para qualquer demanda.",
    image: studioSpace,
    tags: ["Ciclorama", "Iluminação Pro", "Pós-produção", "Locação"],
  },
];

const Pillars = () => (
  <section id="servicos" className="py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-3">O que fazemos</p>
        <h2 className="font-condensed text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
          Três Pilares
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="group glass-card glass-card-hover transition-all duration-500 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p.icon className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-condensed text-lg font-bold tracking-[0.1em] uppercase text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground/70 border border-border px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pillars;
