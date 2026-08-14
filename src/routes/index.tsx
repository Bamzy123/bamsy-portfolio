import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, GraduationCap, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stephen Omotoso — Software Engineer · Backend · Fullstack" },
      {
        name: "description",
        content:
          "Software Engineer with 3+ years building full-stack web apps in Java (Spring Boot), Python (Django), Node.js, React and Next.js.",
      },
      { property: "og:title", content: "Stephen Omotoso — Software Engineer" },
      {
        property: "og:description",
        content: "Backend · Fullstack · EdTech. Building products that solve real problems.",
      },
    ],
  }),
  component: Home,
});

const stack = [
  "Java", "Spring Boot", "Python", "Django",
  "Node.js", "Express.js", "JavaScript", "React.js", "Next.js",
   "React Native", "Vue",
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-hero">
          <div className="absolute inset-0 grid-bg pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-36">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-xs font-mono text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Available for new projects · Lagos, NG
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">
              Software Engineer building <span className="text-gradient">products that solve real problems</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              I'm Stephen Omotoso — a fullstack developer with 5 years of experience across EdTech,
              the creator economy, and institutional platforms. I write clean, maintainable code in
              Java(SpingBoot), Python, Node.js, React Native and React.Js.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-glow"
              >
                View projects <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
              >
                Get in touch
              </Link>
            </div>
            <div className="mt-12 md:absolute md:top-20 md:right-6 lg:right-12">
              <div className="hidden md:block">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-border shadow-card">
                  <Avatar className="w-44 h-44">
                    <AvatarImage src="/profile.jpg" alt="Stephen Omotoso" className="object-cover" />
                    <AvatarFallback>SO</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-mono rounded-md bg-surface/60 border border-border text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <Highlight
              icon={<Code2 className="size-5" />}
              title="5 Years Shipping"
              body="Production fullstack apps across Java/Spring Boot, Django, Express, React Native, React and Next.js."
            />
            <Highlight
              icon={<Sparkles className="size-5" />}
              title="EdTech & Creator Economy"
              body="Built platforms like Faveclub — connecting artists with fans through royalty sharing."
            />
            <Highlight
              icon={<GraduationCap className="size-5" />}
              title="Educator at Heart"
              body="Software Engineer Tutor at NextGen Africa — designed a 3-month web dev curriculum."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-2xl border border-border bg-surface p-10 md:p-14 shadow-card relative overflow-hidden">
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Have something you want to build?</h2>
                <p className="mt-2 text-muted-foreground">
                  I take projects from architecture to deployment.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Start a conversation <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Highlight({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="group p-6 rounded-xl border border-border bg-surface hover:border-primary/40 transition-colors shadow-card">
      <div className="size-10 grid place-items-center rounded-md bg-primary/15 text-primary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
