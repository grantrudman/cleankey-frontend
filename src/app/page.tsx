import {Header} from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import {Services} from "@/sections/Services";
import {About} from "@/sections/About";
import {Quote} from "@/sections/Quote";
import {Footer} from "@/sections/Footer";


export default function Home() {
  return (
  <>
    <Header />
    <Hero />
    <Services />
    <About />
    <Quote />
    <Footer />
  </>
  );
}
