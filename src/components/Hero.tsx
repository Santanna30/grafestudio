import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video-style BG with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="Cinematic production"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        {/* Teal glow accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/8 rounded-full blur-[150px] translate-y-1/3" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="font-condensed text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.3em] uppercase text-foreground">
            Grafê
          </span>
          <span className="block text-[10px] tracking-[0.6em] uppercase text-muted-foreground mt-2">
            Estúdio Audiovisual
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-12 max-w-xl mx-auto"
        >
          A arte do movimento · Sports · Automotive · Drone
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-10 py-4 bg-foreground text-background text-xs font-semibold tracking-[0.25em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Ver Portfólio
          </a>
          <a
            href="#contato"
            className="px-10 py-4 glass-card text-foreground text-xs font-semibold tracking-[0.25em] uppercase hover:bg-foreground/10 transition-colors"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-muted-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
