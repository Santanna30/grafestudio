import { motion } from "framer-motion";

const partners = ["NETFLIX", "SONY", "REDBULL", "ADOBE", "CANON", "DJI"];

const Logos = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6">
        {partners.map((name, i) => (
          <motion.span
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="font-condensed text-xl md:text-2xl font-bold text-foreground/8 tracking-[0.2em] select-none hover:text-foreground/20 transition-colors duration-500 uppercase"
          >
            {name}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default Logos;
