import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import Services from "@/components/sections/Services";
import WhyHypernod from "@/components/sections/WhyHypernod";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Solutions />
        <Services />
        <WhyHypernod />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
