import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional journey of Nirmal Manvar — internships and work experience in Full Stack Development, Data Analytics, and Software Engineering.",
};

const experiences = [
  {
    period: "March 2026 – April 2026",
    role: "Full Stack Developer",
    company: "Ywork.ai",
    highlights: [
      "Leading the development of full-stack web applications using Python/Django and React.",
      "Building scalable APIs, responsive UIs, and robust database architectures for AI-driven platforms.",
    ],
    current: true,
  },
  {
    period: "Jan 2 – Feb 28, 2026",
    role: "Software Engineering Trainee",
    company: "Adani Digital Labs",
    highlights: [
      "Leveraged OOP principles and DSA to build efficient, scalable, and modular Python applications.",
      "Managed and queried data across both SQL and MongoDB for diverse storage requirements.",
      "Applied algorithmic best practices to optimize code performance and data handling.",
    ],
    current: false,
  },
  {
    period: "July 2025",
    role: "Data Analytics & ML Intern",
    company: "Infolabz",
    highlights: [
      "Leveraged Python (Pandas, Scikit-learn) for predictive modeling and data visualization.",
      "Ensured high scalability and secure system integration for real-world analytical projects.",
    ],
    current: false,
  },
  {
    period: "July 2025",
    role: "Data Analytics Intern",
    company: "IBM CSRBOX",
    highlights: [
      "Leveraged Excel and Tableau to clean data, build interactive dashboards, and present actionable insights.",
      "Analyzed complex datasets to deliver business-critical recommendations.",
    ],
    current: false,
  },
];

export default function ExperiencePage() {
  return (
    <div className="page-enter">
      {/* Header */}
      <header className="text-center pt-16 pb-8 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight fade-in-up">
          Professional Journey
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto fade-in-up">
          A timeline of my career, showcasing roles that shaped my expertise in
          building scalable applications and data-driven solutions.
        </p>
      </header>

      {/* Timeline */}
      <section className="w-full max-w-5xl mx-auto px-6 py-12">
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 neo-inset transform md:-translate-x-1/2 rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.role + exp.company}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full fade-in-up`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Marker */}
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-6 md:mt-0 z-10 ${exp.current
                    ? "bg-primary glow-dot"
                    : "neo-inset-sm border-2 border-primary"
                    }`}
                />

                {/* Card — Alternating left/right */}
                <div
                  className={`w-full md:w-1/2 pl-12 ${index % 2 === 0
                    ? "md:pr-12 md:pl-0 flex md:justify-end"
                    : "md:pl-12 md:ml-auto flex"
                    }`}
                >
                  <div className="neo-raised p-8 rounded-2xl w-full max-w-md group hover:-translate-y-1 transition-transform duration-300">
                    {/* Period Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-bold text-tertiary">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-on-surface-variant font-medium mb-4">
                      {exp.company}
                    </div>

                    <ul className="text-on-surface-variant text-sm space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">
                            check_circle
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Summary */}
      <section className="w-full max-w-5xl mx-auto px-6 py-12 mb-8">
        <div className="neo-inset rounded-3xl p-8 md:p-12 fade-in-up">
          <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary fill">
              school
            </span>
            Education
          </h2>
          <div className="neo-raised rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-on-surface">
                  B.E. Electronics & Communication Engineering
                </h3>
                <p className="text-on-surface-variant">
                  L.D. College of Engineering, Ahmedabad
                </p>
                <p className="text-on-surface-variant text-sm">
                  Gujarat Technological University (GTU)
                </p>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">7.10</div>
                  <div className="text-xs text-on-surface-variant">CPI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tertiary">2022-26</div>
                  <div className="text-xs text-on-surface-variant">Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
