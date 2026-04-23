import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/* Navbar — sticky, logo Desafio Diabetes, CTA comprar                       */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[84px] border-b border-white/10 bg-accent">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Logo Desafio Diabetes"
            width={160}
            height={80}
            className="block h-[72px] w-auto max-w-[200px]"
            style={{ objectFit: "contain" }}
            priority
            sizes="200px"
          />
        </Link>
        <Link href="#comprar" className="btn-primary">
          COMPRAR AGORA
        </Link>
      </nav>
    </header>
  );
}
