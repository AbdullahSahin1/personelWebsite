import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
        <HeroSection/>
    </div>
  );
}