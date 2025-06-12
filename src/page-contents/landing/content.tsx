import HeroSection from "./sections/hero";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three";
import SectionFour from "./sections/section-four";
import SectionFive from "./sections/section-five";
import SectionSix from "./sections/section-six";
import Footer from "@/components/footer/footer";

const LandingContent = () => {
  return (
    <main>
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </main>
  );
};

export default LandingContent;
