import Layout from "@/components/Layout";
import aboutPortrait from "@/assets/about-photo.jpg";
import aboutCollage from "@/assets/about-collage.png";

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
              alt="Julianna Revilla"
              className="w-full object-cover"
              loading="lazy"
              width={800}
              height={1080}
            />
          </div>

          <div className="space-y-6 text-muted-foreground font-body text-sm leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <p>
              A passionate and driven Filipino-American artist raised in Houston, TX with a deep love for creating and expressing through various mediums of art: from music videos, films, screenwriting, to singing, songwriting, and dance performance. Thriving on establishing unique ideas to life.
            </p>
            <p>
              As a Director, Actress, Producer, Music Artist, and Stage Performer, Julianna brings a multi-disciplinary approach to every project. Her work spans independent short films, music videos, and large-scale stage performances — always driven by authentic storytelling and bold creative vision.
            </p>
            <p>
              From performing with Kidz Bop on national tours to creative directing cultural stage performances at UT, Julianna has built a diverse body of work rooted in collaboration, cultural expression, and artistic excellence.
            </p>

            <a
              href="mailto:juliannarevilla05@gmail.com"
              className="inline-block text-foreground underline underline-offset-4 hover:opacity-60 transition-opacity mt-4"
            >
              juliannarevilla05@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="w-full px-0 pb-0">
        <img
          src={aboutCollage}
          alt="Photo collage of Julianna's work"
          className="w-full object-cover"
          loading="lazy"
        />
      </section>
    </Layout>
  );
};

export default About;
