import Link from 'next/link';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nirmalmanvar', icon: 'person' },
  { label: 'GitHub', href: 'https://github.com/nirmalmanvar', icon: 'code' },
  { label: 'Email', href: 'mailto:nirmalmanvar7@gmail.com', icon: 'mail' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-6 gap-6 max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-on-surface hover:text-primary transition-colors">
          Nirmal Manvar
        </Link>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-all duration-300 text-sm font-semibold flex items-center gap-1.5 hover:scale-105"
              id={`footer-${social.label.toLowerCase()}`}
            >
              <span className="material-symbols-outlined text-lg">{social.icon}</span>
              {social.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-secondary">
          © {new Date().getFullYear()} Nirmal Manvar. Built with precision.
        </div>
      </div>
    </footer>
  );
}
