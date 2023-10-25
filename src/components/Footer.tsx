import { Github, Linkedin } from "lucide-react";

function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="text-center py-4 text-white">
      <p className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/angela-garcia-mu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/Angela-GM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </p>
      <small>&copy; {year} Angela Garcia. Todos los derechos reservados.</small>
    </footer>
  );
}

export default Footer;
