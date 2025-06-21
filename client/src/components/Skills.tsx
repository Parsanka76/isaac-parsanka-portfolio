import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, BarChart, PieChart } from "lucide-react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "bg-primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Excel/VBA", level: 80 }
      ]
    },
    {
      title: "Data Analysis",
      icon: BarChart,
      color: "bg-accent",
      skills: [
        { name: "Data Cleaning", level: 90 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Machine Learning", level: 80 }
      ]
    },
    {
      title: "Visualization",
      icon: PieChart,
      color: "bg-green-500",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Data Reporting", level: 75 }
      ]
    }
  ];

  const tools = [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "💾" },
    { name: "Excel", icon: "📊" },
    { name: "Power BI", icon: "📈" },
    { name: "Office Suite", icon: "💼" },
    { name: "Cybersecurity", icon: "🛡️" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Proficiencies and expertise across various technologies</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <category.icon className="text-primary mr-3 w-5 h-5" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.3) + (skillIndex * 0.2) }}
                        className={`${category.color} h-2 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <p className="text-gray-700 font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
