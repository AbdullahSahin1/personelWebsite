import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";



export const ContactSection = () => {

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          İletişime <span className="text-primary"> Geçin</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Aklınızda bir proje mi var veya iş yapmak mı istiyorsunuz? Bana ulaşabilirsiniz
Yeni fırsatları görüşmeye her zaman açığım.
        </p>

        <div className="flex justify-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {" "}
              İletişim Bilgilerim
            </h3>

            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                
               
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Vancouver, BC, Canada
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
              
                <a href="#" target="_blank">
                  <Instagram />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
