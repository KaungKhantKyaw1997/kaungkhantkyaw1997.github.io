import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50 space-y-6">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
