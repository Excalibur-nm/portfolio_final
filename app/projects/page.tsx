import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Nirmal Manvar — AI-Integrated IDE, Real-Time Face Recognition, and more. Built with Python, Django, React, OpenCV, and LLMs.",
};

const projects = [
  {
    title: "AI-Integrated IDE",
    subtitle: "Intelligent Development Environment",
    description:
      "A feature-rich web IDE with a React frontend and Django backend. Integrated OpenAI/Claude API via LangChain to provide project-wide code assistance, automated unit testing, and intelligent terminal error interpretation. Optimized frontend performance using the Monaco Editor API for a seamless VS Code-like experience.",
    tags: ["Python", "Django", "React", "WebSockets", "LLMs", "LangChain", "Monaco Editor"],
    image: "/images/project-ide.webp",
    highlights: [
      "Project-wide code assistance powered by OpenAI/Claude via LangChain",
      "Automated unit test generation and execution",
      "Intelligent terminal error interpretation and fix suggestions",
      "Monaco Editor API integration for VS Code-like editing experience",
      "Real-time collaboration via WebSocket connections",
    ],
    category: "Full Stack / AI",
    status: "Completed",
  },
  {
    title: "Real-Time Face Recognition on Raspberry Pi",
    subtitle: "Embedded Computer Vision System",
    description:
      "Developed and deployed a real-time face recognition system on a Raspberry Pi using Python and OpenCV. The system captures video from a camera, performs live face detection, and identifies individuals by matching them against a known database.",
    tags: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision", "NumPy"],
    image: "/images/project-face.webp",
    highlights: [
      "Real-time video capture and processing on Raspberry Pi hardware",
      "Live face detection using Haar cascades and dlib",
      "Face encoding and matching against a pre-built known database",
      "Optimized for low-latency performance on embedded hardware",
      "Visual overlay with bounding boxes and name labels",
    ],
    category: "Computer Vision / IoT",
    status: "Completed",
  },
];

const techUsed = [
  { name: "Python", icon: "code", color: "text-tertiary" },
  { name: "React", icon: "web", color: "text-primary" },
  { name: "Django", icon: "dns", color: "text-tertiary" },
  { name: "OpenCV", icon: "visibility", color: "text-primary" },
  { name: "LangChain", icon: "smart_toy", color: "text-tertiary" },
  { name: "WebSockets", icon: "sync_alt", color: "text-primary" },
];

export default function ProjectsPage() {
  return (
    <div className="page-enter">
      {/* Header */}
      <header className="text-center pt-16 pb-4 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight fade-in-up">
          My Projects
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto fade-in-up">
          A collection of projects showcasing my expertise in full-stack
          development, machine learning, and computer vision.
        </p>
      </header>

      {/* Tech Overview Strip */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 fade-in-up">
          {techUsed.map((tech) => (
            <div
              key={tech.name}
              className="neo-raised-sm flex items-center gap-2 px-4 py-2 rounded-xl"
            >
              <span className={`material-symbols-outlined text-lg ${tech.color}`}>
                {tech.icon}
              </span>
              <span className="text-sm font-semibold text-on-surface-variant">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="w-full max-w-6xl mx-auto px-6 py-8 space-y-16">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`fade-in-up`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="neo-raised rounded-3xl overflow-hidden">
              {/* Project Image */}
              <div className="relative w-full aspect-[21/9] overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 1152px"
                  priority={index === 0}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

                {/* Category & Status badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="neo-raised-sm text-xs font-bold text-primary px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="neo-raised-sm text-xs font-bold text-tertiary px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-tertiary inline-block" />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left: Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm font-semibold text-primary mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-on-surface-variant leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="neo-inset-sm text-xs font-semibold text-primary px-3 py-1.5 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Highlights */}
                  <div className="md:w-[380px] flex-shrink-0">
                    <div className="neo-inset rounded-2xl p-6">
                      <h3 className="text-sm font-bold text-tertiary uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">
                          star
                        </span>
                        Key Highlights
                      </h3>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">
                              check_circle
                            </span>
                            <span className="text-sm text-on-surface-variant leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 py-16 mb-8">
        <div className="neo-inset rounded-3xl p-8 md:p-12 text-center fade-in-up">
          <h2 className="text-2xl font-bold text-on-surface mb-3">
            Interested in working together?
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 neo-raised text-primary font-bold px-8 py-4 rounded-xl neo-button text-lg hover:text-tertiary transition-colors"
            id="projects-cta"
          >
            Let&apos;s Talk
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
