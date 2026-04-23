import { PurchaseButtonWithTooltip } from "@/components/PurchaseButtonWithTooltip";

/* -------------------------------------------------------------------------- */
/* Cardápio bônus — 21 dias no livro                                          */
/* -------------------------------------------------------------------------- */

const highlights = [
  {
    emoji: "💰",
    title: "Alimentos baratos",
    text: "Receitas e combinações com o que você já compra no mercado — sem ingredientes caros ou difíceis de achar.",
  },
  {
    emoji: "📅",
    title: "21 dias completos",
    text: "Café da manhã, almoço e jantar planejados dia a dia. Um mês inteiro de orientação prática no seu bolso.",
  },
  {
    emoji: "⚡",
    title: "Comece hoje mesmo",
    text: "Nada de esperar segunda-feira: o cardápio foi feito para você colocar em prática ainda hoje, no seu ritmo.",
  },
] as const;

export function CardapioBonus() {
  return (
    <section className="bg-[#a30000]">
      {/* Onda Numbers (#13244f) → Cardápio (#a30000) — curva mais alta e suave */}
      <div className="pointer-events-none w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 88"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block h-[88px] w-full"
          aria-hidden
        >
          <defs>
            <linearGradient
              id="waveNumbersToCardapio"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#13244f" />
              <stop offset="100%" stopColor="#a30000" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C320,78 640,78 960,44 C1200,16 1320,4 1440,18 L1440,88 L0,88 Z"
            fill="url(#waveNumbersToCardapio)"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-14 pt-8 text-center md:px-6 md:pb-20 md:pt-10">
        <p className="text-4xl text-white md:text-5xl" aria-hidden>
          🍳
        </p>
        <h2 className="mt-4 font-impact text-2xl font-bold uppercase leading-tight text-white md:text-4xl">
          BÔNUS EXCLUSIVO NO LIVRO
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl font-bold leading-snug text-white md:text-3xl">
          Cardápio completo de 21 dias — café da manhã, almoço e jantar — para
          você saber exatamente o que colocar no prato, sem adivinhar.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/30 bg-white/90 px-5 py-8 text-center shadow-lg backdrop-blur-sm"
            >
              <p className="text-5xl md:text-6xl" aria-hidden>
                {item.emoji}
              </p>
              <h3 className="mt-4 text-lg font-black uppercase tracking-wide text-accent md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base font-semibold leading-relaxed text-[#1a1a1a] md:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-lg flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="w-full sm:flex-1">
            <PurchaseButtonWithTooltip href="#comprar">
              Livro Físico
            </PurchaseButtonWithTooltip>
          </div>
          <div className="w-full sm:flex-1">
            <PurchaseButtonWithTooltip href="#comprar">
              Ebook
            </PurchaseButtonWithTooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
