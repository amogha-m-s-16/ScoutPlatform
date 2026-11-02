import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Success from "./components/Success";

export default function Home() {
  return (
    <main className=''>
        <Navbar />
        <Hero />
        <Content/>
        <Success />
        <Contact />
        <Footer />        
    </main>

  );
}
