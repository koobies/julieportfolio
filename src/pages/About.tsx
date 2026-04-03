import Layout from "@/components/Layout";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <Layout>
      <section className="px-6 md:px-12 pt-16 pb-24 max-w-7xl mx-auto">
        <h1 className="font-display text-7xl md:text-[10rem] leading-none text-center text-foreground mb-16 animate-fade-in">
          About
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <img
              src={aboutPortrait}
              alt="Portrait"
              className="w-full object-cover"
              loading="lazy"
              width={800}
              height={1080}
            />
          </div>

          <div className="space-y-6 text-muted-foreground font-body text-sm leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <p>
              If you've reached this section, it's because you liked my work and want to learn more about the person behind it. Thank you for reading.
            </p>
            <p>
              My name is [Your Name], a creative professional passionate about visual storytelling. I believe in the power of imagery to move people and create meaningful connections.
            </p>
            <p>
              I love exploring new perspectives, finding beauty in the everyday, and pushing the boundaries of my craft. Mindfulness is essential to everything I do — whether I'm on set, in the studio, or simply observing the world around me.
            </p>
            <p>
              To me, creating is about building community, contributing from my experiences as a human being, and discovering new parts of myself within each project. Although I'm very technical, I always leave room for emotions — because ultimately, it's feeling that makes work resonate.
            </p>
            <p>
              Currently, I'm looking for new worlds to connect with and new stories to tell.
            </p>

            <a
              href="mailto:hello@example.com"
              className="inline-block text-foreground underline underline-offset-4 hover:opacity-60 transition-opacity mt-4"
            >
              hello@example.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
