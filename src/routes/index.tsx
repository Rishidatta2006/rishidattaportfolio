import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { About, Achievements, Contact, Experience, Footer, GithubRepos, Resume, Skills } from "@/components/portfolio/Sections";

const title = "M. Rishi Datta | Software Engineer";
const description =
  "Portfolio of M. Rishi Datta — Computer Science student and software engineer building full-stack, AI-integrated and cloud-connected systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <GithubRepos />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
