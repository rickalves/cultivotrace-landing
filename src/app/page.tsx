import { Navbar } from "@/components/navibar";
import { Hero } from "@/components/hero";
import { ProblemSolution } from "@/components/problema-solution";
import { Features } from "@/components/features";
import { StepsFlow } from "@/components/steps-flow";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
// import { Footer } from "@/components/footer";


export default function Home() {
  return (
   <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <StepsFlow />
        <Pricing />
        <About />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}
