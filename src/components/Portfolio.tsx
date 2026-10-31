import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import sports1 from "@/assets/sports-1.jpg";
import sports2 from "@/assets/sports-2.jpg";
import auto1 from "@/assets/auto-1.jpg";
import auto2 from "@/assets/auto-2.jpg";
import showreel from "@/assets/showreel-bg.jpg";
import commercial1 from "@/assets/commercial-1.jpg";
import studioSpace from "@/assets/studio-space.jpg";
import project3 from "@/assets/project-3.jpg";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  aspect: string;
  videoUrl?: string;
}

const portfolioData: Record<string, PortfolioItem[]> = {
  sports: [
    { id: 1, title: "MOTOCROSS SERIES", image: sports1, aspect: "aspect-[4/5]", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "SURF CHAMPIONSHIP", image: sports2, aspect: "aspect-[3/4]" },
    { id: 3, title: "TRAIL RUNNING", image: showreel, aspect: "aspect-[16/10]", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ],
  automotive: [
    { id: 4, title: "GT RACING", image: auto1, aspect: "aspect-[3/4]", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 5, title: "MUSCLE HERITAGE", image: auto2, aspect: "aspect-[4/5]" },
    { id: 6, title: "TRACK DAY", image: showreel, aspect: "aspect-[16/10]", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ],
  studio: [
    { id: 7, title: "LUXE TIMEPIECE", image: commercial1, aspect: "aspect-[4/5]" },
    { id: 8, title: "STUDIO SESSIONS", image: studioSpace, aspect: "aspect-[3/4]" },
    { id: 9, title: "BRAND FILM", image: project3, aspect: "aspect-square", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ],
};

const tabs = [
  { value: "sports", label: "Sports" },
  { value: "automotive", label: "Automotive" },
  { value: "studio", label: "Studio / Commercial" },
];

const GridItems = ({ items }: { items: PortfolioItem[] }) => {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <>
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className={`group relative overflow-hidden break-inside-avoid cursor-pointer ${item.aspect}`}
              onClick={() => item.videoUrl && setSelected(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Teal gradient from corner */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-teal/70 via-teal/20 to-transparent" />
              {/* Info */}
              <div className="absolute inset-0 flex items-end p-5">
                <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-condensed text-lg md:text-xl font-bold text-foreground tracking-[0.08em] uppercase">
                    {item.title}
                  </p>
                </div>
              </div>
              {item.videoUrl && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                    <Play className="w-4 h-4 text-foreground ml-0.5" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background/95 backdrop-blur-xl border-border overflow-hidden">
          <DialogTitle className="sr-only">{selected?.title ?? "Vídeo"}</DialogTitle>
          {selected?.videoUrl && (
            <div className="aspect-video w-full">
              <iframe
                src={selected.videoUrl}
                title={selected.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-3">Portfólio</p>
        <h2 className="font-condensed text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
          Trabalhos Selecionados
        </h2>
      </motion.div>

      <Tabs defaultValue="sports" className="w-full">
        <TabsList className="bg-transparent p-0 h-auto mb-14 gap-1 flex-wrap">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="bg-transparent rounded-none px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b border-transparent data-[state=active]:border-foreground transition-all"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-0">
            <GridItems items={portfolioData[tab.value]} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default Portfolio;
