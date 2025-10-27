import { Branches } from "@/components/Branches";
import { ContactFormSection } from "@/components/ContactFormSection";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import MapsSection from "@/components/MapSection";
import SecurityFeatures from "@/components/SecurityFeatures";
import { UseCases } from "@/components/UsesCases";
import { VideoDemo } from "@/components/Video-demo";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <SecurityFeatures />
      <UseCases />
      <VideoDemo />
      <ContactFormSection />
      <FAQ />
      <MapsSection />
      <Footer />
    </>
  );
}
