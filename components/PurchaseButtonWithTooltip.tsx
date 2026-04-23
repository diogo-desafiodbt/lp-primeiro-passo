import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Botão de compra + dica sempre visível (Hero, CtaBar, CtaFinal, Cardapio)   */
/* -------------------------------------------------------------------------- */

/** Sem fundo nem sombra — só o texto sobre o fundo da área (cards brancos: texto escuro). */
function tooltipClassName(block: boolean) {
  const tone = block ? "text-[#13244f]" : "text-white";
  return `w-full max-w-full text-center text-[18px] font-bold leading-snug ${tone}`;
}

type Props = {
  href: string;
  children: ReactNode;
  /** Largura total + margem superior (botões dos cards CTA final) */
  block?: boolean;
  /**
   * `red` = seção com fundo vermelho → botão azul escuro para contraste.
   * `blue` = seção com fundo azul escuro → botão vermelho (CtaBar).
   */
  sectionTone?: "red" | "blue";
};

export function PurchaseButtonWithTooltip({
  href,
  children,
  block,
  sectionTone = "red",
}: Props) {
  const isOnBlueSection = sectionTone === "blue";

  const linkClass = isOnBlueSection
    ? "inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[#f4001e] px-12 py-3 text-center text-lg font-bold uppercase tracking-wide text-white shadow-[0_4px_20px_rgba(244,0,30,0.5)] transition-colors hover:bg-[#c8001a] hover:shadow-[0_4px_24px_rgba(200,0,26,0.45)]"
    : "inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[#13244f] px-12 py-3 text-center text-lg font-bold uppercase tracking-wide text-white shadow-[0_4px_20px_rgba(19,36,79,0.5)] transition-colors hover:bg-[#1e3a8a] hover:shadow-[0_4px_24px_rgba(30,58,138,0.45)]";

  return (
    <div
      className={`flex flex-col items-center gap-2 ${block ? "mt-8 w-full" : "w-full md:w-auto"}`}
    >
      <div className={tooltipClassName(!!block)}>
        👇 Clique abaixo para comprar
      </div>
      <Link
        href={href}
        className={`${linkClass} ${block ? "" : "md:w-auto"}`}
      >
        {children}
      </Link>
    </div>
  );
}
