"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export function Experience() {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      date: "November 2022 - Present",
      description: [
        "Developed custom web solutions for clients using MERN stack.",
        "Specialized in real-time applications with Socket.io."
      ],
      icon: "🚀"
    },
    {
      title: "Full Stack Developer",
      company: "Infotech",
      date: "June 2024 - July 2024",
      description: [
        "Enhanced CSS styling, debugging, and optimization for better UI/UX.",
        "Participated in UI/UX design discussions to improve user experience.",
        "Worked primarily on frontend development, focusing on responsive design.",
        "Gained hands-on experience with Git, GitHub, and version control workflows.",
        "Collaborated with the team to implement best coding practices and improve code maintainability."
      ],
      icon: "💼"
    },
    {
      title: "Full Stack Developer",
      company: "Superceuticals Private Limited",
      date: "Nov 2024 - Feb 2025",
      description: [
        "Integrated frontend with backend APIs to enable seamless data flow.",
        "Worked on API integration for AI-based health checkup reports.",
        "Enhanced website styling and UI/UX for a better user experience.",
        "Developed features to generate AI-powered health reports dynamically.",
        "Optimized frontend performance for improved loading speed and responsiveness."
      ],
      icon: "💼"
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Work Experience</h2>
          <Separator className="my-6 mx-auto w-1/6" />
        </motion.div>

        <VerticalTimeline lineColor="var(--primary)" className="vertical-timeline-custom-line">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              icon={<div className="flex h-full w-full items-center justify-center text-2xl">{exp.icon}</div>}
              iconStyle={{ background: 'var(--primary)', color: '#fff' }}
              contentStyle={{ 
                background: 'var(--card)', 
                color: 'var(--foreground)',
                boxShadow: '0 3px 0 var(--primary)'
              }}
              contentArrowStyle={{ borderRight: '7px solid var(--card)' }}
            >
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <h4 className="text-primary font-medium">{exp.company}</h4>
              <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-1">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
} 