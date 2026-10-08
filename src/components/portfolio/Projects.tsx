import { useState } from "react";
import { ArrowUpRight, Award, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Reveal, Section, SectionHeader, Tag } from "./primitives";
import { cn } from "@/lib/utils";

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-md border border-primary/25 bg-primary/5 px-2.5 py-1 text-foreground/90">{s}</span>
          {i < steps.length - 1 && <span aria-hidden className="text-primary">→</span>}
        </li>
      ))}
    </ol>
  );
}

export function ProjectCard({ project, featured, onOpen }: { project: Project; featured?: boolean; onOpen: () => void }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant md:p-8",
        featured && "bg-warm-glow",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-sm text-primary">{project.index}</span>
        <div className="flex flex-wrap justify-end gap-2">
          {project.label && <span className="rounded-full border border-tech/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-tech">{project.label}</span>}
          {project.achievement && (
            <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary">
              <Award className="size-3.5" /> {project.achievement}
            </span>
          )}
        </div>
      </div>
      <h3 className={cn("mt-5 font-semibold", featured ? "text-3xl md:text-4xl" : "text-2xl")}>{project.name}</h3>
      <p className="mt-1 text-muted-foreground">{project.tagline}</p>

      <div className={cn("mt-6 grid gap-6", featured && "lg:grid-cols-2 lg:gap-10")}>
        <div>
          <p className="eyebrow mb-2 text-muted-foreground">Problem</p>
          <p className="text-sm leading-relaxed text-foreground/85">{project.problem}</p>
          <p className="eyebrow mb-2 mt-5 text-muted-foreground">What I built</p>
          <p className="text-sm leading-relaxed text-foreground/85">{project.description}</p>
        </div>
        <div>
          {project.flow && (
            <>
              <p className="eyebrow mb-3 text-muted-foreground">Flow</p>
              <Flow steps={project.flow} />
            </>
          )}
          <p className="eyebrow mb-3 mt-5 text-muted-foreground">Engineering focus</p>
          <p className="text-sm text-foreground/85">{project.focus.join(" · ")}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => <Tag key={s}>{s}</Tag>)}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        <Button variant="hero" onClick={onOpen} aria-label={`Read case study: ${project.name}`}>
          Case study <ArrowUpRight />
        </Button>
        {project.github && (
          <Button asChild variant="line">
            <a href={project.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          </Button>
        )}
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-5">
      <h4 className="eyebrow mb-3">{title}</h4>
      <div className="text-sm leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3"><span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />{i}</li>
      ))}
    </ul>
  );
}

export function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border bg-popover p-6 md:p-10">
        {project && (
          <>
            <p className="font-mono text-sm text-primary">{project.index} — Case study{project.label ? ` · ${project.label}` : ""}</p>
            <DialogTitle className="font-display text-3xl font-semibold md:text-4xl">{project.name}</DialogTitle>
            <DialogDescription className="text-muted-foreground">{project.tagline}</DialogDescription>
            <div className="mt-4 space-y-6">
              <Block title="Problem">{project.problem}</Block>
              <Block title="Solution">{project.detail.solution}</Block>
              <Block title="What I built"><List items={project.built} /></Block>
              <Block title="Engineering decisions"><List items={project.detail.decisions} /></Block>
              <Block title="Architecture">
                {project.flow && <div className="mb-4"><Flow steps={project.flow} /></div>}
                {project.detail.architecture}
              </Block>
              <Block title="Technology"><div className="flex flex-wrap gap-2">{project.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div></Block>
              <div className="grid gap-6 md:grid-cols-2">
                <Block title="Challenges"><List items={project.detail.challenges} /></Block>
                <Block title="What I learned"><List items={project.detail.learned} /></Block>
              </div>
              {project.github && (
                <Button asChild variant="hero" size="lg">
                  <a href={project.github} target="_blank" rel="noreferrer"><Github /> View on GitHub</a>
                </Button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const first = projects[0]!;
  const rest = projects.slice(1);
  return (
    <Section id="projects">
      <SectionHeader eyebrow="Featured work" title="Things I've actually built" intro="Each one started with a real problem. Open a project for the case study." />
      <div className="grid gap-6">
        <Reveal><ProjectCard project={first} featured onOpen={() => setActive(first)} /></Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}><ProjectCard project={p} onOpen={() => setActive(p)} /></Reveal>
          ))}
        </div>
      </div>
      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
