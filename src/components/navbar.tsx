"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full p-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="font-bold text-xl mr-4">
          <Link href="/">Ayush Anand</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center justify-between gap-2">
          {/* <ThemeToggle /> */}
          
          {/* Desktop CTA Button */}
          <Link 
            href="#contact" 
            className="hidden md:flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Bring Me on Board
          </Link>
          
          {/* Mobile - Always visible CTA Button */}
          <Link 
            href="#contact" 
            className="md:hidden flex h-8 items-center justify-center rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Bring Me on Board
          </Link>
          
          {/* Hamburger Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="flex md:hidden flex-col justify-center items-center w-9 h-9 rounded-full bg-muted/80 hover:bg-muted p-1.5"
            whileTap={{ scale: 0.9 }}
            animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
          >
            <motion.div
              className="w-4 h-0.5 bg-foreground rounded-full"
              animate={isMenuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-4 h-0.5 bg-foreground rounded-full my-0.5"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-4 h-0.5 bg-foreground rounded-full"
              animate={isMenuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
          >
            <div className="container p-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center rounded-md py-2 text-sm font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 