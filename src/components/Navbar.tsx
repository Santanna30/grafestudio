import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Vídeo Empresarial", href: "#servicos" },
  { label: "Foto Corporativa", href: "#portfolio" },
  { label: "Drone Empresarial", href: "#tech" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-lg border-b border-border/30">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-condensed text-base font-bold text-foreground tracking-[0.25em] uppercase">
            Grafê<span className="text-teal-light">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[10px] text-muted-foreground hover:text-foreground transition-colors tracking-[0.2em] uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="px-5 py-2 bg-foreground text-background text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Orçamento
            </a>
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden text-foreground" aria-label="Menu">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            <div className="container mx-auto px-6 h-14 flex items-center justify-between">
              <span className="font-condensed text-base font-bold text-foreground tracking-[0.25em] uppercase">
                Grafê<span className="text-teal-light">.</span>
              </span>
              <button onClick={() => setOpen(false)} className="text-foreground" aria-label="Fechar">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-10">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-condensed text-3xl font-bold text-foreground tracking-[0.1em] uppercase"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
