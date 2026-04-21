'use client';
import { motion } from "motion/react";
import { 
  BarChart3, 
  Database, 
  LineChart, 
  PieChart, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Code2,
  Table2,
  BrainCircuit,
  GraduationCap,
  Briefcase
} from "lucide-react";
 
const PROJECTS = [
  {
    title: "E-commerce Revenue Optimization",
    description: "Analyzed 500k+ transactions to identify bottlenecks in the checkout funnel, leading to a 15% increase in conversion rate.",
    tags: ["Python", "SQL", "Tableau", "Statistical Modeling"],
    link: "#",
    icon: <BarChart3 className="w-5 h-5" />
  },
  {
    title: "Customer Churn Prediction",
    description: "Built a machine learning model to predict high-risk churn customers with 89% accuracy using random forest algorithms.",
    tags: ["R", "Scikit-learn", "Pandas", "Matplotlib"],
    link: "#",
    icon: <BrainCircuit className="w-5 h-5" />
  },
  {
    title: "Global Supply Chain Dashboard",
    description: "Developed an interactive real-time dashboard tracking logistics KPIs across 12 countries for a Tier-1 manufacturing client.",
    tags: ["SQL", "Power BI", "Excel", "DAX"],
    link: "#",
    icon: <LineChart className="w-5 h-5" />
  }
];

const SKILLS = [
  { category: "Languages", items: ["Python (Pandas, NumPy)", "R", "SQL", "JavaScript"] },
  { category: "Visualization", items: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "D3.js"] },
  { category: "Tools & Tech", items: ["BigQuery", "Snowflake", "Excel (VBA)", "Git", "Docker"] },
  { category: "Analysis", items: ["A/B Testing", "Regression Analysis", "Time Series", "Machine Learning"] }
];

const EXPERIENCE = [
  {
    role: "Senior Data Analyst",
    company: "Insight Data Solutions",
    period: "2022 - Present",
    desc: "Leading advanced analytics for retail clients, automating 40+ hours of weekly reporting tasks."
  },
  {
    role: "Data Analyst",
    company: "Global Tech Inc",
    period: "2020 - 2022",
    desc: "Worked on customer segmentations and marketing attribution models using SQL and Python."
  }
];
























export default function Home() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight flex items-center gap-2">
            <PieChart className="w-6 h-6 text-blue-600" />
            <span className="hidden sm:inline">AnalystPortfolio</span>
          </span>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 max-w-6xl mx-auto px-6">
        
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6 border border-blue-100 uppercase tracking-widest">
                <Database className="w-3 h-3" />
                Empowering decisions through data
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                Hi, I'm <span className="text-blue-600">Alex</span>. 
                <br />I turn data into strategy.
              </h1>
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed mb-8">
                Data Analyst specializing in scalable visualization and predictive modeling. 
                I help businesses find the needle in the data haystack and use it to drive growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                  View Case Studies
                </button>
                <div className="flex gap-3 items-center">
                  {/* <a href="#" className="p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                    <Github className="w-5 h-5 text-slate-600" />
                  </a>
                  <a href="#" className="p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                    <LinkedinIcon className="w-5 h-5 text-slate-600" />
                  </a> */}
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[40px] blur-2xl"></div>
              <div className="relative aspect-square rounded-[32px] overflow-hidden border-8 border-white shadow-2xl bg-white p-8">
                {/* Visual Representation of "Data" */}
                <div className="h-full w-full flex flex-col gap-4 justify-center items-center opacity-80">
                  <div className="flex gap-2 items-end h-32">
                    {[40, 70, 55, 90, 65, 80].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 1 + (i * 0.1), duration: 0.8 }}
                        className="w-4 bg-blue-500 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="w-full h-px bg-slate-100" />
                  <div className="grid grid-cols-3 gap-2 w-full">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="h-6 bg-slate-50 border border-slate-100 rounded text-[8px] flex items-center justify-center font-mono">
                        0.{i}934
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Status Dashboard Mini */}
        <section className="mb-32 grid md:grid-cols-3 gap-6">
          {[
            { label: "Data Cleaned", val: "4.2TB+", sub: "Across 20+ sources" },
            { label: "Projects Delivered", val: "150+", sub: "High-impact results" },
            { label: "Automation Saved", val: "500h+", sub: "Yearly efficiency gain" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">{stat.label}</div>
              <div className="text-3xl font-bold mb-1">{stat.val}</div>
              <div className="text-sm text-slate-500">{stat.sub}</div>
            </motion.div>
          ))}
        </section>

        {/* Selected Projects */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3 tracking-tight">Selected Projects</h2>
              <p className="text-slate-500 max-w-md">Real-world applications of data science and business intelligence.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="group relative flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 p-3 rounded-lg bg-blue-50 text-blue-600 w-fit group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-1 bg-slate-100 rounded text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:gap-3 transition-all">
                  Case Study <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="grid lg:grid-cols-[1fr_2.5fr] gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Technical Stack</h2>
              <p className="text-slate-600">
                A diverse toolkit focused on accuracy, performance, and actionable insights.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {SKILLS.map((set, i) => (
                <div key={i}>
                  <h3 className="font-bold text-sm mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {set.category}
                  </h3>
                  <ul className="space-y-4">
                    {set.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience / Education Split */}
        <section id="experience" className="mb-32">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Experience
              </h2>
              <div className="space-y-10 relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="pl-6 relative">
                    <div className="absolute left-[-4.5px] top-1.5 w-[10px] h-[10px] rounded-full bg-blue-600 border-2 border-white" />
                    <div className="text-xs font-mono text-blue-600 mb-1">{exp.period}</div>
                    <h3 className="font-bold">{exp.role}</h3>
                    <div className="text-sm font-medium text-slate-500 mb-2">{exp.company}</div>
                    <p className="text-sm text-slate-500 leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h2>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="text-xs font-mono text-blue-600 mb-1">2018 - 2020</div>
                  <h3 className="font-bold uppercase tracking-tight">MS in Statistics</h3>
                  <div className="text-sm text-slate-500">University of Data Science</div>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="text-xs font-mono text-blue-600 mb-1">2014 - 2018</div>
                  <h3 className="font-bold uppercase tracking-tight">BS in Economics</h3>
                  <div className="text-sm text-slate-500">Royal Institute of Technology</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-12 md:p-20 rounded-3xl bg-slate-900 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Interested in working together?</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg mb-12">
              Currently accepting new consulting projects and freelance analysis opportunities. 
              Let's turn your raw data into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:alex@data.com" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" /> Say Hello
              </a>
              <div className="flex gap-4">
                {/* <a href="#" className="p-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="#" className="p-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-colors">
                  <Github className="w-6 h-6" />
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <PieChart className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-lg">Alex Analyst</span>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Alex. Built with React & Precision.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Substack</a>
            <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
