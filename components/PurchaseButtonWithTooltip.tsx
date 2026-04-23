import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Botão de compra (Livro Físico / Ebook)                                      */
/* -------------------------------------------------------------------------- */

type PurchaseVariant = "physical" | "ebook";

type Props = {
  href: string;
  children: ReactNode;
  /** Largura total + margem superior (botões dos cards CTA final) */
  block?: boolean;
  variant: PurchaseVariant;
};

export function PurchaseButtonWithTooltip({
  href,
  children,
  block,
  variant,
}: Props) {
  const linkClass =
    variant === "physical"
      ? "inline-flex min-h-[56px] w-full items-center justify-center rounded-full border-[3px] border-[#c0c0c0] bg-gradient-to-b from-white to-[#F5F5F5] px-12 py-3 text-center text-lg font-bold uppercase tracking-wide text-[#13244f] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:border-[#999999] hover:bg-[#e8e8e8] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
      : "inline-flex min-h-[56px] w-full items-center justify-center rounded-full border-[3px] border-[#0a1a3a] bg-gradient-to-b from-[#13244f] to-[#1a3060] px-12 py-3 text-center text-lg font-bold uppercase tracking-wide text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:border-[#0a1530] hover:from-[#1e3875] hover:to-[#1e3875] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]";

  return (
    <div
      className={`flex flex-col items-center ${block ? "mt-8 w-full" : "w-full md:w-auto"}`}
    >
      <Link
        href={href}
        className={`${linkClass} ${block ? "" : "md:w-auto"}`}
      >
        {children}
      </Link>
    </div>
  );
}
