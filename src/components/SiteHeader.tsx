import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Avatar className="w-8 h-8 md:w-10 md:h-10">
            <AvatarImage src="/profile.jpg" alt="Stephen Omotoso" className="object-cover" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <span className="font-mono text-sm tracking-tight">stephen.dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-md bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+2349161084583"
            className="size-9 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Phone"
          >
            <Phone className="size-4" />
          </a>
          <a
            href="https://github.com/Bamzy123"
            target="_blank"
            rel="noreferrer"
            className="size-9 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/omotoso-stephen-298010273"
            target="_blank"
            rel="noreferrer"
            className="size-9 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="mailto:stephenomotos@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Hire me
          </a>
        </div>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md"
                activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-md bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:stephenomotos@gmail.com"
              className="mt-2 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground"
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
