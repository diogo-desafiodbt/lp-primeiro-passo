import { PurchaseButtonWithTooltip } from "@/components/PurchaseButtonWithTooltip";

/* -------------------------------------------------------------------------- */
/* CtaBar — faixa de conversão reutilizável                                   */
/* -------------------------------------------------------------------------- */

export function CtaBar() {
  return (
    <section className="bg-accent px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-stretch justify-center gap-4 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-6">
        <PurchaseButtonWithTooltip href="#comprar" sectionTone="blue">
          Livro Físico
        </PurchaseButtonWithTooltip>
        <PurchaseButtonWithTooltip href="#comprar" sectionTone="blue">
          Ebook
        </PurchaseButtonWithTooltip>
      </div>
    </section>
  );
}
