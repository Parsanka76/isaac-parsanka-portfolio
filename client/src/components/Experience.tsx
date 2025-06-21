import { motion } from "framer-motion";
import { Shield, University, CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Financial Systems & Data Intern",
      company: "Personal Project – Fraud Detection",
      period: "2025",
      icon: Shield,
      color: "bg-primary",
      side: "left",
      achievements: [
        "Developed data documentation framework for transaction indicators",
        "Applied Python and SQL for financial data cleaning and processing",
        "Conducted transaction pattern analysis for compliance reports",
        "Collaborated with peers to validate data accuracy"
      ]
    },
    {
      title: "Bancassurance & Credit Relationship Officer",
      company: "Equity Bank, Loitokitok, Kenya",
      period: "2020 - Internship",
      icon: University,
      color: "bg-accent",
      side: "right",
      achievements: [
        "Participated in client onboarding and document verification",
        "Assisted in credit risk assessments and data review",
        "Conducted customer profiling and financial record analysis",
        "Gained experience with regulatory compliance and KYC processes"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">Professional journey and key achievements</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  exp.side === "left" ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                <div className={`lg:w-1/2 ${exp.side === "left" ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className={`${exp.color} text-white rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                        <exp.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                      </div>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <CheckCircle className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.color} rounded-full border-4 border-white hidden lg:block`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
