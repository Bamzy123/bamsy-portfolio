import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Stephen Omotoso" },
      {
        name: "description",
        content: "Get in touch with Stephen Omotoso — Software Engineer based in Lagos, Nigeria.",
      },
      { property: "og:title", content: "Contact — Stephen Omotoso" },
      { property: "og:description", content: "Reach out for fullstack development work or collaborations." },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "stephenomotos@gmail.com",
    href: "mailto:stephenomotos@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 916 108 4583 or +234 901 661 4219",
    href: "tel:+2349161084583",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Bamzy123",
    href: "https://github.com/Bamzy123",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "omotoso-stephen-298010273",
    href: "https://linkedin.com/in/omotoso-stephen-298010273",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Yaba, Lagos, Nigeria",
    href: null,
  },
];

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-16 md:py-24">
        <header className="max-w-3xl">
          <p className="font-mono text-xs text-primary uppercase tracking-widest">Contact</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Let's build something <span className="text-gradient">together</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you have a project in mind, want to collaborate, or just want to say hello —
            I'd love to hear from you.
          </p>
        </header>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {channels.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <div className="size-10 grid place-items-center rounded-md bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 font-medium truncate">{value}</p>
                </div>
              </>
            );
            const className =
              "flex items-center gap-4 p-5 rounded-xl border border-border bg-surface shadow-card transition-colors hover:border-primary/40";
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <div key={label} className={className}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-border bg-surface shadow-card text-center">
          <p className="text-muted-foreground">Prefer email? Just hit the button.</p>
          <a
            href="mailto:stephenomotos@gmail.com"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3
             rounded-md bg-primary text-primary-foreground font-medium
              hover:opacity-90 transition-opacity shadow-glow"
          >
            <Mail className="size-4" /> Send an email
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
