import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Briefcase, GraduationCap, Languages } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Stephen Omotoso" },
      {
        name: "description",
        content:
          "Fullstack Software Engineer based in Lagos, Nigeria. Experience across Java, Python, Node.js, React and teaching at NextGen Africa.",
      },
      { property: "og:title", content: "About — Stephen Omotoso" },
      { property: "og:description", content: "3+ years building full-stack web applications and mentoring developers." },
    ],
  }),
  component: About,
});

const skills = {
  Languages: ["Java", "Python", "JavaScript"],
  Backend: ["Spring Boot", "Django", "Express.js"],
  Frontend: ["React.js", "Next.js"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

const experiences = [
  {
    role: "Software Engineer Tutor",
    company: "NextGen Africa",
    period: "January 2026 – April 2026",
    blurb:
      "NextGen Africa is a technical institution where students learn software development, AI automation, product design, cybersecurity, and digital business skills.",
    bullets: [
      "Designed and delivered a structured three-month web development curriculum, taking students from fundamentals to building deployable projects.",
      "Conducted code reviews, debugging sessions, and one-on-one mentorship to ensure every student progressed effectively.",
      "Helped students understand backend and frontend integration through hands-on project work.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Freelance / Self-Employed",
    period: "2022 – Present",
    blurb:
      "Independently designed, built, and deployed full-stack web applications for clients and personal projects, covering both backend and frontend development.",
    bullets: [
      "Built and shipped production-ready web applications using Java (Spring Boot), Python (Django), Node.js (Express.js), React.js, and Next.js.",
      "Designed and implemented RESTful APIs, database schemas, and frontend interfaces across multiple projects.",
      "Managed end-to-end project delivery — from architecture and development to deployment and maintenance.",
      "Worked across EdTech and creator economy domains, building platforms that serve real users.",
    ],
  },
];

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-5xl px-6 py-16 md:py-24">
        <header className="max-w-3xl">
          <p className="font-mono text-xs text-primary uppercase tracking-widest">About</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Engineer, builder, and educator.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Software Engineer with 3+ years of experience building full-stack web applications across
            EdTech, creator economy, and institutional platforms. I take pride in writing clean,
            maintainable code and enjoy working on products that solve real problems. Also experienced
            in technical education, having trained aspiring developers in a structured bootcamp
            environment. Currently pursuing a B.Sc. in Information Technology while continuing to
            build and ship meaningful software.
          </p>
        </header>

        {/* Skills */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold flex items-center gap-2">Technical Skills</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="p-5 rounded-xl border border-border bg-surface shadow-card">
                <p className="font-mono text-xs text-primary uppercase tracking-widest">{cat}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-background/60 border border-border text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase className="size-5 text-primary" /> Experience
          </h2>
          <div className="mt-6 space-y-6">
            {experiences.map((e) => (
              <article key={e.role} className="p-6 rounded-xl border border-border bg-surface shadow-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {e.role} <span className="text-muted-foreground font-normal">— {e.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">{e.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 block size-1 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education + Languages */}
        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-xl border border-border bg-surface shadow-card">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <GraduationCap className="size-5 text-primary" /> Education
            </h2>
            <div className="mt-4">
              <p className="font-semibold">B.Sc. Information Technology (In Progress)</p>
              <p className="text-sm text-muted-foreground">
                National Open University of Nigeria (NOUN), Lagos
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                2022 – Present · Currently in Third Year, Second Semester
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-surface shadow-card">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Languages className="size-5 text-primary" /> Languages
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["English", "Yoruba"].map((l) => (
                <span
                  key={l}
                  className="px-3 py-1.5 text-sm rounded-md bg-background/60 border border-border"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
