import { motion } from "framer-motion";
import { GraduationCap, School, Award, Shield } from "lucide-react";

export default function Education() {
  const mainEducation = [
    {
      title: "Bachelor of Science in Actuarial Science",
      institution: "University of Nairobi",
      period: "2020 – 2024",
      grade: "Second Class Honours (Upper Division)",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      title: "Certificate of Secondary Education",
      institution: "Koelel Forces Academy",
      period: "2016 – 2019",
      grade: "Grade: A-",
      icon: School,
      color: "bg-secondary"
    }
  ];

  const certifications = [
    {
      title: "Data Science Training",
      institution: "ALX Africa, Nairobi, Kenya",
      period: "2023 – 2024",
      borderColor: "border-accent"
    },
    {
      title: "Cybersecurity Essentials",
      institution: "Cisco Networking Academy",
      period: "March 2022 – May 2022",
      borderColor: "border-green-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic background and certifications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {mainEducation.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className={`${edu.color} text-white rounded-full w-16 h-16 flex items-center justify-center mr-4`}>
                  <edu.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.title}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period}</p>
                </div>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                {edu.grade}
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-6 rounded-lg shadow-sm border-l-4 ${cert.borderColor}`}
              >
                <div className="flex items-center mb-3">
                  {index === 0 ? (
                    <Award className="text-accent text-xl mr-3" />
                  ) : (
                    <Shield className="text-green-500 text-xl mr-3" />
                  )}
                  <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                </div>
                <p className="text-gray-600 mb-2">{cert.institution}</p>
                <p className="text-gray-500 text-sm">{cert.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
