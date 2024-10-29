import Articles from "@/components/Articles";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <section id="featured">
        <Articles />
      </section>
    </main>
  );
}
