import { motion } from "framer-motion";
import { Shield, TrendingUp, PieChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Fraud Detection System",
      description: "Developed a comprehensive fraud detection framework using Python and SQL to analyze financial transaction patterns and identify anomalies.",
      icon: Shield,
      gradient: "from-primary to-accent",
      tags: ["Python", "SQL", "Data Analysis"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"]
    },
    {
      title: "Credit Risk Assessment Model",
      description: "Built predictive models for credit risk assessment using actuarial science principles and machine learning algorithms to support loan approval decisions.",
      icon: TrendingUp,
      gradient: "from-green-500 to-green-600",
      tags: ["Machine Learning", "Risk Modeling", "Actuarial Science"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-purple-100 text-purple-800"]
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Created interactive dashboards using Power BI and Python to visualize financial performance metrics and support strategic decision-making.",
      icon: PieChart,
      gradient: "from-purple-500 to-pink-500",
      tags: ["Power BI", "Visualization", "Financial Analysis"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-green-100 text-green-800"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Showcasing data analytics and financial modeling expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <project.icon className="text-white text-6xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 rounded text-sm ${project.tagColors[tagIndex]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="text-primary font-medium hover:text-blue-700 p-0"
                >
                  View Details <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
