import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Video, Camera, Building, ArrowRight, ArrowLeft, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceTypes = [
  { icon: Video, label: "Vídeo", value: "video" },
  { icon: Camera, label: "Fotografia", value: "photo" },
  { icon: Building, label: "Locação de Estúdio", value: "studio" },
];

const budgetOptions = [
  "Até R$ 5.000",
  "R$ 5.000 – R$ 15.000",
  "R$ 15.000 – R$ 50.000",
  "Acima de R$ 50.000",
];

const productionLevels = [
  "High-End Cinema",
  "Fast Turnaround Social",
  "Premium Commercial",
];

const MultiStepContact = () => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [budget, setBudget] = useState("");
  const [production, setProduction] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const canNext = () => {
    if (step === 1) return !!serviceType;
    if (step === 2) return !!budget && !!production;
    return !!name.trim() && !!whatsapp.trim();
  };

  const handleSubmit = () => {
    if (!name.trim() || !whatsapp.trim()) {
      toast.error("Preencha nome e WhatsApp.");
      return;
    }
    const phone = whatsapp.replace(/\D/g, "");
    if (phone.length < 10 || phone.length > 13) {
      toast.error("Número de WhatsApp inválido.");
      return;
    }
    toast.success("Solicitação enviada! Entraremos em contato em breve.");
    setStep(1);
    setServiceType("");
    setBudget("");
    setProduction("");
    setDetails("");
    setName("");
    setWhatsapp("");
    setEmail("");
  };

  const inputClasses =
    "w-full bg-transparent border border-border px-4 py-3.5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-teal-light transition-colors text-sm tracking-wide";

  const selectTriggerClasses =
    "w-full bg-transparent border-border text-sm h-auto py-3.5 rounded-none focus:ring-0 focus:ring-offset-0 focus:border-teal-light tracking-wide";

  return (
    <section id="contato" className="py-28 relative">
      <div className="absolute inset-0 blueprint-pattern pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-3">Contato</p>
          <h2 className="font-condensed text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
            Vamos Criar Juntos
          </h2>
        </motion.div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 flex items-center justify-center text-xs font-medium transition-colors ${
                  step >= s
                    ? "bg-foreground text-background"
                    : "glass-card text-muted-foreground"
                }`}
              >
                {step > s ? <Check className="w-3.5 h-3.5" /> : s}
              </div>
              {s < 3 && (
                <div className={`w-12 h-px transition-colors ${step > s ? "bg-foreground" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="glass-card p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-condensed text-lg font-bold tracking-[0.1em] uppercase text-foreground mb-2">
                  O que você precisa?
                </h3>
                <p className="text-muted-foreground text-xs mb-8">Selecione o tipo de serviço desejado.</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {serviceTypes.map((st) => (
                    <button
                      key={st.value}
                      onClick={() => setServiceType(st.value)}
                      className={`p-6 border text-center transition-all duration-300 ${
                        serviceType === st.value
                          ? "border-foreground bg-foreground/5"
                          : "border-border hover:border-foreground/30"
                      }`}
                    >
                      <st.icon className="w-6 h-6 mx-auto mb-3 text-foreground/70" strokeWidth={1.5} />
                      <span className="text-xs tracking-[0.15em] uppercase text-foreground">{st.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-condensed text-lg font-bold tracking-[0.1em] uppercase text-foreground mb-2">
                    Detalhes do Projeto
                  </h3>
                  <p className="text-muted-foreground text-xs mb-8">Conte mais sobre sua visão.</p>
                </div>

                <div>
                  <label className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-2 block">Budget</label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger className={selectTriggerClasses}>
                      <SelectValue placeholder="Faixa de investimento" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {budgetOptions.map((opt) => (
                        <SelectItem key={opt} value={opt} className="text-sm">{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-2 block">Nível de Produção</label>
                  <Select value={production} onValueChange={setProduction}>
                    <SelectTrigger className={selectTriggerClasses}>
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {productionLevels.map((opt) => (
                        <SelectItem key={opt} value={opt} className="text-sm">{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-2 block">Descrição (opcional)</label>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Descreva brevemente seu projeto..."
                    maxLength={500}
                    rows={3}
                    className={`${inputClasses} resize-none`}
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-condensed text-lg font-bold tracking-[0.1em] uppercase text-foreground mb-2">
                    Informações de Contato
                  </h3>
                  <p className="text-muted-foreground text-xs mb-8">Como podemos entrar em contato?</p>
                </div>

                <div>
                  <label className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-2 block">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-2 block">WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    maxLength={20}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-2 block">E-mail (opcional)</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    className={inputClasses}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors tracking-[0.15em] uppercase"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Voltar
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={() => canNext() && setStep(step + 1)}
                disabled={!canNext()}
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs font-medium tracking-[0.15em] uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-foreground/90 transition-colors"
              >
                Próximo <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canNext()}
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs font-medium tracking-[0.15em] uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-foreground/90 transition-colors"
              >
                Enviar <Check className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStepContact;
