import { ContactSection } from "../Components/ContactSection";
import { AboutSection } from "../Components/AboutSection";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import { ProjectsSection } from "../Components/ProjectSection";
import { SkillsSection } from "../Components/SkillsSection";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";
import { Footer } from "../Components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer/>
    </div>
  );
}