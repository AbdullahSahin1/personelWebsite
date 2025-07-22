import { ArrowRight, ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
         <span className="text-primary"> Projelerim </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Her bir yaptığım proje, detaylara, performansa ve kullanıcı deneyimine
          dikkat edilerek özenle hazırlandı.
        </p>
      </div>

      <div className="text-center mt-12">
        <a
          className="cosmic-button w-fit flex items-center mx-auto gap-2"
          target="_blank"
          href="https://github.com/AbdullahSahin1"
        >
          Github Adresim <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};
