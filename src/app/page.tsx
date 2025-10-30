import { Navbar } from "@/components/navibar";
import { Hero } from "@/components/hero";
import { ProblemSolution } from "@/components/problema-solution";
import { Features } from "@/components/features";
import { StepsFlow } from "@/components/steps-flow";


export default function Home() {
  return (
   <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <StepsFlow />
        {/* <Pricing /> */}
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
