import { Navbar } from "@/components/navibar";
import { Hero } from "@/components/hero";
import { ProblemSolution } from "@/components/problema-solution";
import { Features } from "@/components/features";


export default function Home() {
  return (
   <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        {/* <StepsFlow /> */}
        {/* <Pricing /> */}
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
