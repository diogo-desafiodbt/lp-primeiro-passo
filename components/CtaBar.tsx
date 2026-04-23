import { PurchaseButtonWithTooltip } from "@/components/PurchaseButtonWithTooltip";

/* -------------------------------------------------------------------------- */
/* CtaBar — faixa de conversão reutilizável                                   */
/* -------------------------------------------------------------------------- */

export function CtaBar() {
  return (
    <section className="bg-accent px-4 py-7 md:px-6 md:py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-stretch justify-center gap-4 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-6">
        <PurchaseButtonWithTooltip href="#comprar" variant="physical">
          Livro Físico
        </PurchaseButtonWithTooltip>
        <PurchaseButtonWithTooltip href="#comprar" variant="ebook">
          Ebook
        </PurchaseButtonWithTooltip>
      </div>
    </section>
  );
}
