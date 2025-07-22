import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Ben <span className="text-primary"> Kimim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & Mobile Developer
            </h3>

            <p className="text-muted-foreground">
              Web geliştirme ve mobil uygulama geliştirme alanlarında modern
              teknolojileri kullanarak duyarlı, erişilebilir ve yüksek
              performanslı web uygulamaları oluşturma konusunda bilgiliyim
            </p>

            <p className="text-muted-foreground">
              Karmaşık sorunlara çözümler üretme konusunda tutkuluyum ve sürekli
              gelişen yazılım dünyasında yer almak için sürekli olarak yeni
              teknolojiler ve teknikler öğreniyorum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                İletişime Geçin
              </a>

            
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Geliştirme</h4>
                  <p className="text-muted-foreground">
                   Güncel freamwork'ler ve kütüphaneler kullanarak modern web
                    uygulamaları geliştirme.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobil Uyguluma Geliştirme</h4>
                  <p className="text-muted-foreground">
                    React Native ve Kotlin kullanarak iOS ve Android için
                    duyarlı mobil uygulamalar geliştirme.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Dijital Pazarlama</h4>
                  <p className="text-muted-foreground">
                    SEO,SEM,Google Ads ve sosyal medya stratejileri ile web sitelerinin
                    görünürlüğünü artırma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
