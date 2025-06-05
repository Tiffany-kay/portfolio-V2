import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <Layout>
      <div id="hero" className="scroll-mt-16"><Hero /></div>
      <div id="about" className="scroll-mt-16"><AboutMe /></div>
      <div id="skills" className="scroll-mt-16"><Skills /></div>
      <div id="projects" className="scroll-mt-16"><Projects /></div>
      <div id="contact" className="scroll-mt-16"><Contact /></div>
      <div id="blog" className="scroll-mt-16"><Blog /></div>
    </Layout>
  );
}
