"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Image from "next/image";

export function About() {
  const skills = [
    { name: "React.js", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express.js", level: 80, category: "backend" },
    { name: "MongoDB", level: 85, category: "backend" },
    { name: "Firebase", level: 75, category: "backend" },
    { name: "Socket.io & WebRTC", level: 80, category: "realtime" },
    { name: "Git & GitHub", level: 70, category: "realtime" },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (BE)",
      field: "Electronics & Communication Engineering",
      institution: "UIET, Panjab University",
      period: "2022 - 2026",
      description: "Currently pursuing my bachelor's degree with a focus on electronics and communications while expanding my skills in software development."
    },
    {
      degree: "Intermediate (PCM)",
      field: "Physics, Chemistry, Mathematics",
      institution: "Anugrah Narayan College",
      period: "2020 - 2022",
      description: "Completed my intermediate education with a strong foundation in science and mathematics."
    }
  ];

  const achievements = [
    {
      title: "ISRO Antariksha Hackathon",
      description: "Participated in the space-tech innovation challenge organized by ISRO, developing solutions for real-world space exploration problems."
    },
    {
      title: "Smart India Hackathon",
      description: "Worked with a team to build innovative solutions for challenges faced by various government and private organizations."
    },
    {
      title: "AI Aware Badge",
      description: "Received recognition for proficiency in artificial intelligence concepts and applications."
    },
    {
      title: "AI For All Certification",
      description: "Completed comprehensive training in AI technologies and their practical implementations across various domains."
    }
  ];

  // Decorative elements data
  const floatingIcons = [
    { icon: "⚛️", x: 20, y: 30, delay: 0 },
    { icon: "🔗", x: 85, y: 15, delay: 0.2 },
    { icon: "🚀", x: 10, y: 85, delay: 0.4 },
    { icon: "🤖", x: 80, y: 80, delay: 0.6 },
    { icon: "💻", x: 50, y: 50, delay: 0.8 },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center">

      {/* Decorative floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl md:text-3xl opacity-20 z-0 pointer-events-none select-none"
          style={{ left: `${item.x}%`, top: `${item.y}%` } as any}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.15,
            scale: 1,
            y: [0, -15, 0, 15, 0],
            rotate: [0, 10, 0, -10, 0]
          }}
          transition={{
            delay: item.delay,
            duration: 8,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-primary/5 rounded-full filter blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-3xl opacity-30 translate-x-1/4 translate-y-1/4"></div>

      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 sm:mb-6">About Me</h2>
          <Separator className="my-4 sm:my-6 mx-auto w-1/6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 sm:gap-8 mt-6 sm:mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-full border bg-muted/50 md:w-[400px]">
                <Image
                  src="/Asset/ayush.jpg"
                  alt="Ayush Anand"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <Card className="transform transition-all hover:scale-[1.02] hover:shadow-md backdrop-blur-sm bg-background/80 border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Info</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">🎓</span>
                    <span>BE, Electronics & Communication (2022-2026)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">🏆</span>
                    <span>Hackathon Enthusiast</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">💻</span>
                    <span>MERN Stack Specialist</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">🤖</span>
                    <span>AI & Blockchain Developer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="mb-6 sm:mb-8 shadow-md backdrop-blur-sm bg-background/80 border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-lg leading-relaxed">
                    <span className="text-primary font-semibold text-2xl">Ayush Anand</span> I am a passionate Full-Stack Developer specializing in the MERN stack, blockchain, AI, and real-time applications.
                    Currently pursuing a Bachelor of Engineering (BE) in Electronics and Communication Engineering at UIET, Panjab University (2022-2026),
                    I combine technical prowess with a relentless drive for innovation.
                  </p>
                  <p className="leading-relaxed">
                    I excel in crafting cutting-edge solutions, from AI-powered platforms and music streaming apps to decentralized health record systems.
                    My experience spans freelancing, internships, and startup collaborations, complemented by standout performances in hackathons like Smart India Hackathon and ISRO Antariksha.
                  </p>
                  <p className="leading-relaxed">
                    With an eye on the future, I am working toward creating autonomous AI agents capable of designing websites and applications, pushing the boundaries of technology and creativity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-3 backdrop-blur-sm bg-background/80">
                <TabsTrigger value="skills" className="text-xs sm:text-sm">Skills</TabsTrigger>
                <TabsTrigger value="education" className="text-xs sm:text-sm">Education</TabsTrigger>
                <TabsTrigger value="achievements" className="text-xs sm:text-sm">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="skills" className="p-4 bg-card rounded-b-lg border-x border-b mt-0 backdrop-blur-sm bg-background/80">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <HoverCard key={index}>
                      <HoverCardTrigger asChild>
                        <div className="relative w-full h-8 bg-muted rounded-full overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-primary/60 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                          <div className="absolute inset-0 flex items-center justify-between px-3 text-sm">
                            <span>{skill.name}</span>
                            <span className="text-xs font-medium bg-background/50 px-1.5 py-0.5 rounded-full">{skill.level}%</span>
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{skill.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            {skill.category === "frontend" && "Frontend development skills used to create interactive user interfaces"}
                            {skill.category === "backend" && "Backend technologies used for server-side development"}
                            {skill.category === "realtime" && "Technologies for building real-time communication features"}
                            {skill.category === "blockchain" && "Blockchain platforms for building decentralized applications"}
                            {skill.category === "ai" && "AI and machine learning technologies"}
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education" className="p-4 bg-card rounded-b-lg border-x border-b mt-0 space-y-6 backdrop-blur-sm bg-background/80">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-6 border-l-2 border-primary/30"
                  >
                    <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-primary"></div>
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-primary">{edu.field}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution} | {edu.period}</p>
                    <p className="mt-2 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="achievements" className="p-4 bg-card rounded-b-lg border-x border-b mt-0 backdrop-blur-sm bg-background/80">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-lg bg-muted/50 border hover:border-primary/50 transition-all"
                    >
                      <h4 className="text-lg font-bold flex items-center">
                        <span className="mr-2 text-xl">🏆</span>
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}