import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">© {new Date().getFullYear()} Stephen Omotoso</p>
          <p className="text-sm text-muted-foreground font-mono">English • Yoruba</p>
        </div>
        <div className="flex items-center gap-2">
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
            href="tel:+2349161084583"
            className="size-9 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Phone"
          >
            <Phone className="size-4" />
          </a>
          <a
            href="mailto:stephenomotos@gmail.com"
            className="size-9 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
