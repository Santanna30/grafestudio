const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-condensed text-sm font-bold text-foreground tracking-[0.25em] uppercase">
        Grafê<span className="text-teal-light">.</span>
      </p>
      <p className="text-muted-foreground text-[10px] tracking-[0.15em] uppercase">
        © {new Date().getFullYear()} Grafê Estúdio. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
