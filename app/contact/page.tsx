"use client";

import { useState, FormEvent } from "react";
import type { Metadata } from "next";

// Note: metadata must be exported from a server component.
// We'll handle the form interactivity client-side while
// keeping the overall structure.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const mailtoLink = `mailto:nirmalmanvar7@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page-enter">
      {/* Header */}
      <div className="text-center pt-16 pb-8 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight fade-in-up">
          Let&apos;s Connect
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg fade-in-up">
          Reach out for collaborations, inquiries, or just to say hello.
        </p>
      </div>

      {/* Content */}
      <section className="w-full max-w-5xl mx-auto px-6 py-12 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 space-y-6 fade-in-left">
            {/* Email */}
            <a
              href="mailto:nirmalmanvar7@gmail.com"
              className="neo-raised rounded-2xl p-6 flex items-start gap-5 hover:bg-surface-container-high transition-all duration-300 group block"
              id="contact-email"
            >
              <div className="w-12 h-12 rounded-full neo-inset flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined fill">mail</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                  Email
                </h3>
                <p className="text-on-surface-variant text-sm">
                  nirmalmanvar7@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+916354089030"
              className="neo-raised rounded-2xl p-6 flex items-start gap-5 hover:bg-surface-container-high transition-all duration-300 group block"
              id="contact-phone"
            >
              <div className="w-12 h-12 rounded-full neo-inset flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined fill">call</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                  Phone
                </h3>
                <p className="text-on-surface-variant text-sm">
                  +91 6354089030
                </p>
              </div>
            </a>

            {/* Location */}
            <div
              className="neo-raised rounded-2xl p-6 flex items-start gap-5 hover:bg-surface-container-high transition-all duration-300 group"
              id="contact-location"
            >
              <div className="w-12 h-12 rounded-full neo-inset flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined fill">
                  location_on
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                  Location
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Ahmedabad, Gujarat
                  <br />
                  LDCE Campus
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="neo-inset rounded-2xl p-6">
              <h3 className="font-bold text-sm text-on-surface mb-4 uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    label: "LinkedIn",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                    href: "https://www.linkedin.com/in/nirmal-manvar-338a7629b/",
                  },
                  {
                    label: "GitHub",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
                      </svg>
                    ),
                    href: "https://github.com/excalibur-nm",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-raised p-3 rounded-xl neo-button text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
                    id={`contact-social-${social.label.toLowerCase()}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 neo-raised rounded-2xl p-8 md:p-10 fade-in-right">
            {submitted && (
              <div className="mb-6 neo-inset rounded-xl p-4 text-center">
                <span className="material-symbols-outlined text-primary text-2xl mb-1 block">
                  check_circle
                </span>
                <p className="text-primary font-semibold text-sm">
                  Email client opened! Thank you for reaching out.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-semibold text-on-surface-variant ml-1"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-surface text-on-surface border-none rounded-xl p-4 neo-inset placeholder-on-surface-variant/40"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-semibold text-on-surface-variant ml-1"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-surface text-on-surface border-none rounded-xl p-4 neo-inset placeholder-on-surface-variant/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-semibold text-on-surface-variant ml-1"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-surface text-on-surface border-none rounded-xl p-4 neo-inset placeholder-on-surface-variant/40"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-on-surface-variant ml-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-surface text-on-surface border-none rounded-xl p-4 neo-inset placeholder-on-surface-variant/40 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full neo-raised text-primary font-bold text-lg py-4 rounded-xl neo-button flex items-center justify-center gap-2 hover:bg-surface-container-high hover:text-tertiary transition-all duration-300"
                  id="contact-submit"
                >
                  Send Message
                  <span className="material-symbols-outlined fill">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
