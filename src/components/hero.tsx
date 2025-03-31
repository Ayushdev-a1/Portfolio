"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_400px] md:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div 
            className="flex flex-col justify-center space-y-4 mt-8 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ayush Anand
              </h1>
              <p className="text-muted-foreground text-base sm:text-xl">
                Full-Stack Developer | Tech Enthusiast
              </p>
            </div>
            <div className="max-w-[700px] text-muted-foreground md:text-xl">
              <p>
                An ambitious Full-Stack Developer with expertise in the MERN stack, 
                blockchain, AI, and real-time applications. Building innovative 
                digital solutions that make a difference.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#projects">
                <Button className="w-full min-[400px]:w-auto">View Projects</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="w-full min-[400px]:w-auto">Contact Me</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 aspect-square overflow-hidden rounded-full border bg-muted/50 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
              <Image
                src="/Asset/ayush.jpg"
                alt="Ayush Anand"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 