import Layout from "@/components/Layout";
import heroImage from "@/assets/hero.jpg";

const Index = () => {
  return (
    <Layout>
      <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Featured work"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
    </Layout>
  );
};

export default Index;
