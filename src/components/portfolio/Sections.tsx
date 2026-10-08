import { ArrowUpRight, Award, BadgeCheck, Download, Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import { achievements, certifications, education, experience, principles, profile, repos, skillGroups } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Reveal, Section, SectionHeader, Tag, resumeHref, resumeIsPlaceholder } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <SectionHeader eyebrow="Engineering mindset" title="How I Think About Building" />
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/85">
            I'm interested in the part of engineering where an idea has to become a working system. I enjoy breaking down
            unclear problems, deciding how the pieces should fit together, building the backend and frontend, and then
            debugging the parts that inevitably don't work on the first attempt. My strongest interests are backend
            engineering, full-stack development, AI-integrated applications, cloud systems, and system design.
          </p>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 70} className="h-full">
            <div className="h-full bg-card p-6">
              <span className="font-mono text-sm text-primary">{p.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">{items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Technical skills" title="What I work with" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 4) * 60}><SkillGroup {...g} /></Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience & education" title="Where I've been learning" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <article className="h-full rounded-2xl border border-border bg-card p-7">
            <p className="font-mono text-xs text-primary">{experience.period}</p>
            <h3 className="mt-3 text-2xl font-semibold">{experience.role}</h3>
            <p className="mt-1 text-muted-foreground">{experience.org}</p>
            <p className="mt-5 text-sm leading-relaxed text-foreground/85">{experience.text}</p>
            <div className="mt-5 flex flex-wrap gap-2">{experience.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </article>
        </Reveal>
        <Reveal delay={80} className="h-full">
          <article className="h-full rounded-2xl border border-border bg-card p-7">
            <GraduationCap className="size-6 text-primary" />
            <h3 className="mt-4 text-2xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-muted-foreground">{education.school}</p>
            <div className="mt-6 flex gap-10">
              <div><p className="font-display text-3xl font-semibold">{education.cgpa}</p><p className="font-mono text-xs uppercase text-muted-foreground">CGPA</p></div>
              <div><p className="font-display text-3xl font-semibold">2027</p><p className="font-mono text-xs uppercase text-muted-foreground">{education.period}</p></div>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}

export function AchievementCard({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6">
      <Award className="size-5 shrink-0 text-primary" />
      <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{sub}</p></div>
    </div>
  );
}

export function CertificationCard({ title, issuer, period }: { title: string; issuer: string; period: string }) {
  return (
    <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6">
      <BadgeCheck className="size-5 shrink-0 text-tech" />
      <div>
        <h3 className="font-semibold leading-snug">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{issuer}</p>
        <p className="mt-2 font-mono text-xs text-muted-foreground">{period}</p>
      </div>
    </div>
  );
}

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader eyebrow="Recognition" title="Achievements & certifications" />
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((a, i) => <Reveal key={a.title} delay={i * 60} className="h-full"><AchievementCard {...a} /></Reveal>)}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {certifications.map((c, i) => <Reveal key={c.title} delay={i * 60} className="h-full"><CertificationCard {...c} /></Reveal>)}
      </div>
    </Section>
  );
}

export function GithubRepos() {
  return (
    <Section id="github">
      <SectionHeader eyebrow="Open source" title="More of what I build" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((r, i) => (
          <Reveal key={r.name} delay={(i % 3) * 60} className="h-full">
            <a href={r.url} target="_blank" rel="noreferrer" className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><Github className="size-4" /> {r.name}</span>
                <ArrowUpRight className="size-4 transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              {r.description && <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>}
            </a>
          </Reveal>
        ))}
      </div>
      <a href={profile.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-primary hover:underline">
        Explore all projects on GitHub →
      </a>
    </Section>
  );
}

export function Resume() {
  return (
    <Section id="resume" className="py-12 md:py-16">
      <Reveal>
        <div className="bg-warm-glow flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold">Want the complete picture?</h2>
            <p className="mt-3 text-muted-foreground">
              Download my resume for a concise overview of my experience, technical skills, projects and certifications.
            </p>
            {resumeIsPlaceholder && (
              <p className="mt-3 font-mono text-xs text-muted-foreground">Resume PDF coming soon — the button below requests it by email.</p>
            )}
          </div>
          <Button asChild variant="hero" size="lg">
            <a href={resumeHref}><Download /> {resumeIsPlaceholder ? "Request Resume" : "Download Resume"}</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: "GitHub", value: "github.com/Rishidatta2006", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rishi-datta-manda", href: profile.linkedin },
  ];
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something useful."
          intro="I'm open to software engineering opportunities, internships, and conversations around building practical technology. Email is the best way to reach me."
        />
        <Reveal className="space-y-3">
          {links.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer" className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30">
              <Icon className="size-5 text-primary" />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs uppercase text-muted-foreground">{label}</p>
                <p className="truncate">{value}</p>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary" />
            </a>
          ))}
          <div className="flex flex-wrap gap-3 pt-3">
            <Button asChild variant="hero" size="lg"><a href={`mailto:${profile.email}`}><Mail /> Email Me</a></Button>
            <Button asChild variant="line" size="lg"><a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a></Button>
            <Button asChild variant="line" size="lg"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-8 font-mono text-xs text-muted-foreground md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} M. Rishi Datta · Chennai, India</p>
        <p>Build. Learn. Grow. Repeat.</p>
      </div>
    </footer>
  );
}
