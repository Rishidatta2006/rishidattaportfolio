import { useEffect, useRef } from "react";
import { ArrowDown, Download, Github, MapPin } from "lucide-react";
import portrait from "@/assets/rishi-portrait.png.asset.json";
import { credibility, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { resumeHref, resumeIsPlaceholder } from "./primitives";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const on = () => {
      if (imgRef.current) imgRef.current.style.transform = `translateY(${window.scrollY * 0.08}px)`;
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-28">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0" />
      <div aria-hidden className="bg-warm-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <div className="py-6 lg:py-16">
          <p className="eyebrow animate-rise">Software Engineer • Full-Stack • AI • Cloud</p>
          <h1 className="animate-rise mt-6 text-5xl font-bold leading-[0.95] md:text-7xl" style={{ animationDelay: "80ms" }}>
            M. Rishi Datta
          </h1>
          <p className="animate-rise mt-6 font-display text-2xl leading-snug text-foreground/90 md:text-3xl" style={{ animationDelay: "160ms" }}>
            I build software systems that <span className="text-primary">solve real problems.</span>
          </p>
          <p className="animate-rise mt-5 max-w-xl text-muted-foreground md:text-lg" style={{ animationDelay: "240ms" }}>
            Computer Science undergraduate specializing in Cloud Computing, with hands-on experience building full-stack
            applications, backend APIs, AI-integrated workflows, and cloud-connected systems.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "320ms" }}>
            <Button asChild variant="hero" size="lg">
              <a href="#projects">View Projects <ArrowDown /></a>
            </Button>
            <Button asChild variant="line" size="lg">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
            </Button>
            <Button asChild variant="line" size="lg">
              <a href={resumeHref} title={resumeIsPlaceholder ? "Resume PDF coming soon — request by email" : undefined}>
                <Download /> {resumeIsPlaceholder ? "Request Resume" : "Download Resume"}
              </a>
            </Button>
          </div>
          <p className="animate-rise mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground" style={{ animationDelay: "400ms" }}>
            <MapPin className="size-3.5" /> {profile.location}
          </p>
        </div>
        <div className="animate-rise relative" style={{ animationDelay: "200ms" }}>
          <div ref={imgRef} className="will-change-transform">
            <img
              src={portrait.url}
              alt="Illustration of M. Rishi Datta at his desk, surrounded by monitors showing code and books on AWS, Python, React and MySQL"
              width={1310}
              height={1200}
              className="portrait-mask mx-auto w-full max-w-[640px]"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <dl className="glass grid grid-cols-2 divide-border rounded-2xl md:grid-cols-4 md:divide-x">
          {credibility.map((c) => (
            <div key={c.label} className="px-6 py-6">
              <dt className="sr-only">{c.label}</dt>
              <dd className="font-display text-3xl font-semibold text-foreground">{c.value}</dd>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{c.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
