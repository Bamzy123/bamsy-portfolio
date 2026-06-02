import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Stephen Omotoso" },
      {
        name: "description",
        content:
          "Selected projects by Stephen Omotoso including Faveclub artist-fan royalty platform and the NextGen Africa institutional website.",
      },
      { property: "og:title", content: "Projects — Stephen Omotoso" },
      { property: "og:description", content: "Selected fullstack projects across EdTech and the creator economy." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    name: "Faveclub",
    role: "Fullstack Developer",
    tagline: "Artist-Fan Royalty Platform",
    description:
      "Built a platform that enables artists to connect directly with their fans and share a percentage of their royalties as a sign of appreciation — creating a new model for fan engagement and artist support.",
    link: "https://faveclub.netlify.app",
    tags: ["Fullstack", "Creator Economy"],
  },
  {
    name: "NextGen Africa Website",
    role: "Contributor",
    tagline: "Institutional Platform",
    description:
      "Contributed to the web presence of NextGen Africa, a technical learning institution offering programs in software engineering, AI, cybersecurity, product design, and business development.",
    link: "https://www.thenextgen.africa",
    tags: ["EdTech", "Web"],
  },
];

function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-5xl px-6 py-16 md:py-24">
        <header className="max-w-3xl">
          <p className="font-mono text-xs text-primary uppercase tracking-widest">Selected Projects</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Things I've built.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A small selection of products I've designed, built and shipped.
          </p>
        </header>

        <div className="mt-12 grid gap-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group block p-7 md:p-9 rounded-2xl border border-border bg-surface shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{p.tagline} · {p.role}</p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold group-hover:text-gradient transition-colors">
                    {p.name}
                  </h2>
                </div>
                <div className="size-10 grid place-items-center rounded-full bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ExternalLink className="size-4" />
                </div>
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed max-w-3xl">{p.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-background/60 border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
                <span className="ml-auto font-mono text-xs text-muted-foreground truncate max-w-[60%]">
                  {p.link.replace("https://", "")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
