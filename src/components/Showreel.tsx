import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import showreelBg from "@/assets/showreel-bg.jpg";

const Showreel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative">
        <div className="relative h-[65vh] min-h-[450px] overflow-hidden">
          <motion.img
            src={showreelBg}
            alt="Showreel footage"
            loading="lazy"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-background/55" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-teal/10 rounded-full blur-[120px]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <p className="text-[9px] tracking-[0.6em] uppercase text-foreground/50">Featured Showreel · 2024</p>

            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-card flex items-center justify-center group"
            >
              <Play className="w-6 h-6 text-foreground ml-0.5 group-hover:scale-110 transition-transform" />
            </motion.button>

            <p className="font-condensed text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-foreground">
              Play Showreel
            </p>
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-background/95 backdrop-blur-xl border-border overflow-hidden">
          <DialogTitle className="sr-only">Showreel Grafê Estúdio</DialogTitle>
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Showreel;
