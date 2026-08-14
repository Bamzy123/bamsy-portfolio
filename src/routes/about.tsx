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
      { property: "og:description", content: "5 years building full-stack web applications and mentoring developers." },
    ],
  }),
  component: About,
});

const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "Java", "Python"],
  Backend: ["Node.js (Express.js)", "Spring Boot", "Django", "REST APIs", "Microservices"],
  Frontend: ["Angular", "React.js", "Next.js", "React Native"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  Cloud: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "CI/CD", "Netlify", "Vercel"],
  Blockchain: ["SUI Blockchain", "On-chain integrations"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"],
};

const experiences = [
  {
    role: "Software Engineer Tutor",
    company: "NextGen Africa",
    period: "Jan 2026 - Apr 2026",
    blurb:
      "NextGen Africa is a technical institution offering training in software engineering, AI automation, cybersecurity, product design, and digital business.",
    bullets: [
      "Designed and delivered a structured three-month backend and fullstack curriculum taking students from fundamentals to deployable projects.",
      "Provided technical leadership through code reviews, architecture guidance, and one-on-one mentorship.",
      "Mentored students on API design, database management, authentication systems, and production deployment best practices.",
    ],
  },
  {
    role: "Backend Engineer / Full-Stack Developer",
    company: "Freelance / Self-Employed",
    period: "2020 - Present",
    blurb:
      "Architected and delivered backend systems, RESTful APIs, mobile app integrations, and Web3 integrations for client and personal projects across EdTech, logistics, and the creator economy.",
    bullets: [
      "Designed and built RESTful APIs using Node.js (Express.js), implemented JWT authentication, middleware architecture, and production-grade error handling.",
      "Integrated SUI blockchain into fullstack platforms handling on-chain interactions, wallet logic, and transaction flows.",
      "Architected and optimised MongoDB databases, designed schemas, and implemented indexing strategies.",
      "Deployed services to cloud infrastructure (AWS, Netlify), ensuring uptime, scalability, and security in production.",
      "Contributed backend and API integration work for two live mobile apps on Google Play Store (PushnDeliver, Skippa Rider).",
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
            Backend Engineer · Full-Stack Developer
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Backend Engineer with 5 years of experience designing and shipping scalable, secure,
            production-grade backend systems across EdTech, logistics, creator economy, and Web3.
            Proficient in Node.js, Java, and Python with hands-on experience in RESTful API design,
            MongoDB & SQL databases, JWT authentication, microservices patterns, AWS deployments,
            and SUI blockchain integrations. Passionate about maintainable code and reliable
            production systems.
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
                2022 - Present · Currently in Final Year.
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