import Image from "next/image";

import { PurchaseButtonWithTooltip } from "@/components/PurchaseButtonWithTooltip";

/* -------------------------------------------------------------------------- */
/* CtaFinal — escolha de formato (físico x livro digital) com id #comprar    */
/* -------------------------------------------------------------------------- */

export function CtaFinal() {
  return (
    <section
      id="comprar"
      className="px-6 py-16"
      style={{
        background: "linear-gradient(135deg, #a30000 0%, #f4001e 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold uppercase text-white md:text-3xl">
          ESCOLHA COMO VOCÊ QUER DAR O PRIMEIRO PASSO
        </h2>
        <p className="mt-4 text-xl font-semibold text-white">
          O conteúdo é o mesmo. O formato é a sua escolha.
        </p>
        <div className="mx-auto my-6 h-px w-16 bg-white/80" aria-hidden />
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
          {/* Livro físico — opção principal */}
          <div className="relative rounded-2xl border-2 border-accent bg-white p-6 pt-14 text-center shadow-2xl md:scale-105">
            <span className="absolute left-1/2 top-4 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white">
              ⭐ MAIS ESCOLHIDO
            </span>
            <div className="relative mx-auto mb-6 h-[min(320px,55vw)] w-full max-w-[260px] min-h-[280px] sm:max-w-[280px]">
              <Image
                src="/images/livro-fisico.png"
                alt="Livro Físico"
                fill
                sizes="(max-width: 768px) 55vw, 280px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="mt-4 text-2xl" aria-hidden>
              📦
            </p>
            <h3 className="mt-2 text-xl font-bold text-accent md:text-2xl">
              LIVRO FÍSICO
            </h3>
            <p className="mt-2 text-lg font-semibold text-[#333333]">
              Impresso e entregue na sua casa
            </p>
            <p className="mt-6 text-4xl font-black text-primary">R$ 79,90</p>
            <p className="mt-2 text-sm font-semibold text-[#333333]">
              *Frete calculado no checkout
            </p>
            <PurchaseButtonWithTooltip href="#" block>
              Livro Físico
            </PurchaseButtonWithTooltip>
          </div>

          {/* Livro digital (ebook) */}
          <div className="relative rounded-2xl bg-white p-6 pt-14 text-center shadow-xl">
            <span className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm font-bold uppercase tracking-wide text-white">
              ACESSO IMEDIATO
            </span>
            <div className="relative mx-auto mb-6 h-[min(340px,60vw)] w-full max-w-[220px] min-h-[300px] sm:max-w-[240px]">
              <Image
                src="/images/ebook-celular.png"
                alt="Livro digital em formato ebook"
                fill
                sizes="(max-width: 768px) 60vw, 240px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="mt-4 text-2xl" aria-hidden>
              📱
            </p>
            <h3 className="mt-2 text-xl font-bold text-accent md:text-2xl">
              LIVRO DIGITAL
            </h3>
            <p className="mt-2 text-lg font-semibold text-[#333333]">
              Ebook — Acesso imediato após a compra · Leia em qualquer dispositivo
            </p>
            <p className="mt-6 text-4xl font-black text-primary">R$ 29,90</p>
            <PurchaseButtonWithTooltip href="#" block>
              Ebook
            </PurchaseButtonWithTooltip>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-lg font-semibold text-white">
            Tem dúvidas antes de comprar? Fale com a gente:
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            FALAR NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
