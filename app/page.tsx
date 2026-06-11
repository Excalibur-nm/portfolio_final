import Image from "next/image";
import Link from "next/link";

const skills = [
  {
    icon: "code",
    title: "Full Stack Development",
    description:
      "Building scalable web applications with React, Django, and Node.js. Creating responsive UIs and robust APIs for AI-driven platforms.",
    color: "text-primary",
  },
  {
    icon: "psychology",
    title: "Machine Learning & AI",
    description:
      "Developing predictive models and intelligent systems using Python, Scikit-learn, OpenCV, and LLM integrations via LangChain.",
    color: "text-tertiary",
  },
  {
    icon: "storage",
    title: "Data & Analytics",
    description:
      "Leveraging Pandas, NumPy, and visualization tools for data-driven insights. Experienced with SQL, MongoDB, and Tableau dashboards.",
    color: "text-primary",
  },
];

const techStack = [
  { category: "Languages", items: "Python, JavaScript, Java, Dart, SQL, MongoDB" },
  { category: "Frameworks", items: "React, Django, Node.js, Next.js, FastAPI" },
  { category: "ML / Data", items: "Scikit-learn, Pandas, NumPy, OpenCV, Matplotlib, Seaborn" },
  { category: "Tools", items: "Git, VS Code, Jupyter,Docker ,Google Cloud,  Google Colab, Tableau" },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* ===== Hero Section ===== */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 mt-8">
        <div className="flex-1 flex flex-col gap-6 items-start">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-primary glow-dot animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Available for work
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-on-surface tracking-tight leading-tight">
            Hola, I&apos;m{" "}
            <span className="gradient-text">Nirmal</span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Full Stack Developer & ML Enthusiast with a B.E. in E.C Engineering at{" "}
            <span className="text-primary font-medium">
              L.D. College of Engineering
            </span>
            . I build intelligent, scalable web applications and data-driven
            solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="/projects"
              className="neo-raised text-primary font-semibold px-8 py-4 rounded-xl neo-button transition-all duration-300 text-lg flex items-center gap-2 hover:text-tertiary"
              id="hero-cta"
            >
              Explore My Work
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/contact"
              className="neo-inset text-on-surface-variant font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg flex items-center gap-2 hover:text-primary"
              id="hero-contact"
            >
              Get In Touch
              <span className="material-symbols-outlined text-xl">
                mail
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Visual - Floating Code Card */}
        <div className="flex-shrink-0 hidden md:block">
          <div className="neo-raised rounded-3xl p-8 w-80 relative">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-error/60" />
              <div className="w-3 h-3 rounded-full bg-tertiary/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <pre className="text-sm text-on-surface-variant font-mono leading-relaxed">
              <code>
                <span className="text-primary">const</span>{" "}
                <span className="text-tertiary">developer</span> = {`{`}
                {"\n\n"}
                {"  "}name: <span className="text-primary">&quot;Nirmal&quot;</span>,{"\n"}
                {"  "}role: <span className="text-primary">&quot;Full Stack&quot;</span>,{"\n"}
                {"  "}passion: <span className="text-primary">&quot;AI/ML&quot;</span>,{"\n"}
                {"  "}coffee: <span className="text-tertiary">true</span>,{"\n"}
                {"  "}
                <span className="text-on-surface-variant/50">                </span>
                {"\n"}
                {`}`};
              </code>
            </pre>
            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 neo-raised-sm rounded-full px-4 py-2 text-xs font-bold text-tertiary">
              <span className="material-symbols-outlined text-sm mr-1 align-middle">
                workspace_premium
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About / Skills Section ===== */}
      <section id="about" className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-on-surface text-center mb-4 fade-in-up">
          Core Competencies
        </h2>
        <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12 fade-in-up">
          Blending software engineering with machine learning to build
          impactful digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="neo-raised rounded-3xl p-8 flex flex-col gap-4 items-start transition-transform duration-300 hover:-translate-y-2 group"
            >
              <div className="neo-inset p-4 rounded-xl">
                <span
                  className={`material-symbols-outlined text-3xl ${skill.color}`}
                >
                  {skill.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Bar */}
        <div className="mt-16 neo-inset rounded-2xl p-8 fade-in-up">
          <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              terminal
            </span>
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.category}>
                <div className="text-xs font-bold text-tertiary uppercase tracking-wider mb-2">
                  {tech.category}
                </div>
                <div className="text-sm text-on-surface-variant leading-relaxed">
                  {tech.items}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Academics Section ===== */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-on-surface text-center mb-12 fade-in-up">
          Academics
        </h2>
        <div className="overflow-x-auto fade-in-up">
          <table className="w-full max-w-3xl mx-auto">
            <thead>
              <tr className="border-b border-outline-variant/30">
                <th className="text-left py-4 px-4 text-xs font-bold text-tertiary uppercase tracking-wider">
                  Examination
                </th>
                <th className="text-left py-4 px-4 text-xs font-bold text-tertiary uppercase tracking-wider">
                  University
                </th>
                <th className="text-left py-4 px-4 text-xs font-bold text-tertiary uppercase tracking-wider">
                  Institute
                </th>
                <th className="text-left py-4 px-4 text-xs font-bold text-tertiary uppercase tracking-wider">
                  Year
                </th>
                <th className="text-left py-4 px-4 text-xs font-bold text-tertiary uppercase tracking-wider">
                  CPI / %
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors">
                <td className="py-4 px-4 text-on-surface font-semibold">BE Sem 7</td>
                <td className="py-4 px-4 text-on-surface-variant">GTU (ECE)</td>
                <td className="py-4 px-4 text-on-surface-variant">LDCE Ahmedabad</td>
                <td className="py-4 px-4 text-on-surface-variant">2022-26</td>
                <td className="py-4 px-4 text-primary font-bold">7.10</td>
              </tr>
              <tr className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors">
                <td className="py-4 px-4 text-on-surface font-semibold">HSC</td>
                <td className="py-4 px-4 text-on-surface-variant">CBSE</td>
                <td className="py-4 px-4 text-on-surface-variant">KV Rajkot</td>
                <td className="py-4 px-4 text-on-surface-variant">2022</td>
                <td className="py-4 px-4 text-primary font-bold">90.5%</td>
              </tr>
              <tr className="hover:bg-surface-container-high/50 transition-colors">
                <td className="py-4 px-4 text-on-surface font-semibold">SSC</td>
                <td className="py-4 px-4 text-on-surface-variant">CBSE</td>
                <td className="py-4 px-4 text-on-surface-variant">KV Rajkot</td>
                <td className="py-4 px-4 text-on-surface-variant">2020</td>
                <td className="py-4 px-4 text-primary font-bold">78.8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== Achievements ===== */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-on-surface text-center mb-12 fade-in-up">
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {[
            { icon: "school", text: "Data Science & Analytics Certificate", org: "HP LIFE" },
            { icon: "smart_toy", text: "Python with Machine Learning Certificate", org: "Cloud Computing" },
            { icon: "analytics", text: "Python for Data Science Certificate", org: "Infosys Springboard" },
            { icon: "badge", text: "Data Pathway: Learner to Data Professional", org: "IBM SkillsBuild" },
            { icon: "trophy", text: "National Level Chess — Representing GTU", org: "Gujarat Technological University" },
            { icon: "emoji_events", text: "Gold Medal — Intra College Chess Tournament", org: "L.D. College of Engineering" },
          ].map((item) => (
            <div
              key={item.text}
              className="neo-raised rounded-2xl p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className="neo-inset p-3 rounded-xl flex-shrink-0">
                <span className="material-symbols-outlined text-2xl text-tertiary">
                  {item.icon}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                  {item.text}
                </h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  {item.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Interests & Hobbies ===== */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 mb-8">
        <div className="neo-inset rounded-3xl p-8 md:p-12 fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  interests
                </span>
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Machine Learning", "Artificial Intelligence", "Web Development"].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="neo-raised text-sm font-semibold text-primary px-5 py-2.5 rounded-xl"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">
                  sports_esports
                </span>
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Chess", icon: "strategy" },
                  { name: "Badminton", icon: "sports_tennis" },
                  { name: "Football", icon: "sports_soccer" },
                ].map((hobby) => (
                  <span
                    key={hobby.name}
                    className="neo-raised text-sm font-semibold text-tertiary px-5 py-2.5 rounded-xl flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">
                      {hobby.icon}
                    </span>
                    {hobby.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
