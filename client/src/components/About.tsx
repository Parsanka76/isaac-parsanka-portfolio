import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Shield, MapPin, Phone } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: GraduationCap,
      title: "Education",
      value: "BSc Actuarial Science",
      subtitle: "University of Nairobi"
    },
    {
      icon: Briefcase,
      title: "Experience",
      value: "Data Analytics",
      subtitle: "Financial Systems"
    },
    {
      icon: Award,
      title: "Certified",
      value: "Data Science",
      subtitle: "ALX Africa"
    },
    {
      icon: Shield,
      title: "Security",
      value: "Cybersecurity",
      subtitle: "Cisco Academy"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A data-driven professional with expertise in actuarial science and analytics
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Data-driven and impact-oriented professional with a solid background in actuarial science and data analytics, 
              dedicated to driving organizational performance through actionable insights. Skilled in managing and analyzing 
              large datasets, developing dashboards, and delivering reports that inform strategic decision-making.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Proficient in Python, SQL, Excel, and Power BI, with experience supporting data verification, due diligence, 
              and regulatory compliance. Passionate about leveraging analytics to enhance staff productivity, implement 
              performance management systems, and foster continuous improvement.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="text-primary mr-2 w-4 h-4" />
                <span className="text-gray-600">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary mr-2 w-4 h-4" />
                <span className="text-gray-600">+254710565065</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <stat.icon className="text-primary text-3xl mb-4 mx-auto" />
                <h4 className="font-semibold text-gray-900 mb-2">{stat.title}</h4>
                <p className="text-gray-600">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
