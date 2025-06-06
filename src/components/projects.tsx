"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu, X, ExternalLink, Github, Eye, Code } from "lucide-react";
import MV from "../Asset/MV.png";

export function Projects() {
  const projectCategories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI & Blockchain" },
    { id: "other", label: "Other Projects" }
  ];

  const projectsData = [
    {
      "id": 1,
      "title": "Rthymix",
      "description": "A Full-Stack Music Streaming App",
      "details": "Rthymix is a modern music streaming platform built using the MERN stack. It features song uploads, likes, play count tracking, and listening history. Users can upload their songs, set them as public or private, and enjoy a seamless music experience.",
      "category": "web",
      // "image": "/assets/rthymix-preview.jpg",
      "techStack": ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
      "features": [
        "User authentication & profiles",
        "Song uploads & cloud storage",
        "Public & private song access",
        "Like & play count tracking",
        "Real-time listening history"
      ],
      "repository": "https://github.com/your-repo/rthymix",
      "website": "https://rthymix.com",
      "status": false
    },
    {
      "id": 2,
      "title": "MV-Live (In Collaboration)",
      "description": "A platform where friends can stream web series, movies, and more together in real-time.",
      "details": "MV-Live enables users to create virtual watch parties with synchronized streaming and live chat. With WebRTC for low-latency communication and Socket.io for real-time interactions, it enhances group entertainment.",
      "category": "web",
      "image": MV,
      "techStack": ["Socket.io", "WebRTC", "MERN Stack", "Multer",],
      "features": [
        "Real-time synchronized streaming",
        "Live chat and reactions",
        "Public & private watch parties",
        "User authentication and profiles",
        "Adaptive video quality",
        "Cloud storage for media"
      ],
      "repository": "https://github.com/Ayushdev-a1/MVLive.git",
      "website": "https://mv-live.netlify.app/",
      "status": true
    },
    {
      "id": 5,
      "title": "WhatsApp Clone",
      "description": "A real-time messaging and calling platform.",
      "details": "Inspired by WhatsApp, this platform enables real-time text messaging, voice rooms, and video calling using WebRTC and Socket.io. It provides seamless communication with rich features like private and public servers, user roles, and media sharing.",
      "category": "web",
      // "image": "/assets/discord-clone-preview.jpg",
      "techStack": ["Socket.io", "WebRTC", "React", "Node.js", "MongoDB", "Redux"],
      "features": [
        "Real-time messaging",
        "Voice & video calls",
        "Group & private chats",
        "User authentication & role management",
        "Media & file sharing"
      ],
      "repository": "https://github.com/Ayushdev-a1/WhatsApp-Clone.git",
      "website": "https://your-discord-clone.com",
      "status": true
    },
    // {
    //   "id": 6,
    //   "title": "FitNxNova",
    //   "description": "A startup for fit trousers & clothing.",
    //   "details": "FitNxNova is a clothing startup focusing on fit trousers and apparel. The initial website will serve as an announcement page, hinting at something exciting coming soon. Future phases will include a full-fledged e-commerce platform with custom fit recommendations and online shopping.",
    //   "category": "web",
    //   "image": "/assets/fitnxnova-preview.jpg",
    //   "techStack": ["Next.js", "Tailwind CSS", "Node.js", "Stripe", "MongoDB"],
    //   "features": [
    //     "Landing page with an announcement",
    //     "Future e-commerce integration",
    //     "Custom fit recommendations",
    //     "Secure payments & order tracking"
    //   ],
    //   "repository": "https://github.com/your-repo/fitnxnova",
    //   "website": "https://fitnxnova.com",
    //   "status": "Early Development"
    // }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const [activeCategory, setActiveCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 503px)");

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a10_1px,transparent_1px),linear-gradient(to_bottom,#0f172a10_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-3xl opacity-30 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl opacity-30 -translate-x-1/4 translate-y-1/4"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            A collection of my recent work showcasing my skills and expertise in various technologies.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="mb-8">
          {isMobile ? (
            <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  {isMenuOpen ? <X className="mr-2 h-4 w-4" /> : <Menu className="mr-2 h-4 w-4" />}
                  {activeCategory === "all" ? "All Projects" : activeCategory}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Select Category</DialogTitle>
                  <DialogDescription>
                    Choose a category to filter projects
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {projectCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => {
                        setActiveCategory(category.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-6 backdrop-blur-sm bg-background/80">
                {projectCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl backdrop-blur-sm bg-background/70 border-primary/10 hover:border-primary/30 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>

                  <CardHeader className="relative z-10 pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs bg-primary/10">{project.category}</Badge>
                    </div>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 pb-4 relative z-10">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.details}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/5 hover:bg-primary/10 text-xs transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="default"
                            size="sm"
                            className="gap-1 flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                          >
                            <Eye className="w-4 h-4" /> View Project
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                            <DialogDescription className="text-lg">
                              {project.description}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <div className="aspect-video relative rounded-lg overflow-hidden bg-muted/50 mb-4">
                              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-background/60 to-background/40">
                                <div className="text-center max-w-md mx-auto p-4">
                                  <h3 className="text-xl font-semibold mb-2">{project.status ? "Go through with repo. " : "Preview Coming Soon"}</h3>
                                  <p className="text-muted-foreground text-sm">{project.status ? "Go through with live preview." : "The project preview will be available shortly."}</p>
                                  <div className="mt-4 flex gap-4 justify-center">
                                    <a href={project.repository} target="blank">
                                      <Button variant="outline" size="sm" className="gap-1 opacity-70 cursor-allowed">
                                        <Code className="w-4 h-4" />Source Code
                                      </Button>
                                    </a>
                                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                                      <Button variant="outline" size="sm" className="gap-1 opacity-70 cursor-allowed">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                      </Button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2">Project Details</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.details}</p>
                              </div>
                              {/* <div>
                                <h4 className="font-semibold mb-2">Features</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.features}</p>
                              </div> */}
                              <div>
                                <h4 className="font-semibold mb-2">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.techStack.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="bg-primary/10">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Status</h4>
                                <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200">{project.status ? "Completed" : "In Development"}</Badge>
                                <p className="text-sm text-muted-foreground mt-2">{project.status ? "The code repository will be available ! Go through it." : "The code repository will be available soon."}</p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 