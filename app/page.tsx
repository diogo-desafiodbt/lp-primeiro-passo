import AnnouncementBar from "@/components/AnnouncementBar";
import { Author } from "@/components/Author";
import { Book } from "@/components/Book";
import { CtaBar } from "@/components/CtaBar";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { CardapioBonus } from "@/components/CardapioBonus";
import { Numbers } from "@/components/Numbers";
import { Problem } from "@/components/Problem";
import { Testimonials } from "@/components/Testimonials";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <Numbers />
      <CardapioBonus />
      <Problem />
      <CtaBar />
      <Book />
      <WhatYouLearn />
      <CtaBar />
      <Author />
      <Testimonials />
      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
