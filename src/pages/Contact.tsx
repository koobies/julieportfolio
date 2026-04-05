import Layout from "@/components/Layout";
import contactPhoto from "@/assets/contact-photo.jpg";
import { Linkedin, Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="px-6 md:px-12 pt-16 pb-24 max-w-4xl mx-auto">
        <h1 className="font-display text-7xl md:text-[10rem] leading-none text-center text-foreground mb-16 animate-fade-in">
          Contact
        </h1>

        <div className="text-center space-y-8 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <a
              href="mailto:juliannarevilla05@gmail.com"
              className="inline-block font-display text-2xl md:text-4xl text-foreground underline underline-offset-8 hover:opacity-60 transition-opacity"
            >
              juliannarevilla05@gmail.com
          </a>

          <div className="flex justify-center gap-8 pt-4">
            <a
              href="https://www.linkedin.com/in/julianna-revilla-10278b346/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/juliannarevilla/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={28} />
            </a>
            <a
                href="mailto:juliannarevilla05@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <img src={contactPhoto} alt="Behind the scenes" className="w-full rounded-lg object-cover" />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
