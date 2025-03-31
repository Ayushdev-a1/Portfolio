"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import emailjs from '@emailjs/browser';

type ContactInfo = {
  icon: string;
  label: string;
  value: string;
  href: string;
};

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo: ContactInfo[] = [
    { 
      icon: "✉️", 
      label: "Email", 
      value: "anandayush865@gmail.com", 
      href: "mailto:anandayush865@gmail.com" 
    },
    { 
      icon: "📱", 
      label: "Phone", 
      value: "9122253096", 
      href: "tel:9122253096" 
    },
    {   
      icon: "📍", 
      label: "Location", 
      value: "Patna, Bihar, India", 
      href: "https://maps.google.com/?q=Patna,Bihar,India" 
    },
    { 
      icon: "🔗", 
      label: "LinkedIn", 
      value: "linkedin.com/in/ayushanand-566a3622b", 
      href: "https://www.linkedin.com/in/ayushanand-566a3622b" 
    }
  ];

  // Check online status on client-side only
  useEffect(() => {
    setIsOffline(!window.navigator.onLine);
    
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    // Clear any error message when user starts typing again
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    // For demo purposes - simulates successful submission
    // when offline, comment this out for production
    if (isOffline) {
      // If offline, simulate successful submission for demo
      setShowDialog(true);
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
      return;
    }

    try {
      // Initialize EmailJS
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
      console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")
      // Send email
      await emailjs.send(
       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",   
       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ayush Anand',
        }
      );
      
      // Show success message and reset form
      setShowDialog(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Specific error handling
      if (isOffline) {
        setErrorMessage("You appear to be offline. Please check your internet connection and try again.");
      } else if (error instanceof Error) {
        setErrorMessage(`Failed to send message: ${error.message}`);
      } else {
        setErrorMessage("Failed to send message. Please try contacting directly via email.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="z-10 py-16 md:py-24 relative overflow-hidden flex items-center justify-center bg-muted/30">
      <div className="container px-4 md:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Get In Touch</h2>
          <Separator className="my-6 mx-auto w-1/6" />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            I'm always open to discussing new projects and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-32"
                      placeholder="Your message"
                      rows={4}
                      required
                    />
                  </div>
                </div>
                {errorMessage && (
                  <div className="text-red-500 text-sm p-2 bg-red-50 rounded border border-red-200">
                    {errorMessage}
                  </div>
                )}
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
                {isOffline && (
                  <p className="text-amber-500 text-xs text-center mt-2">
                    ⚠️ You appear to be offline. For demo purposes, form submission will still show success.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-xl">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-medium">{info.label}</h4>
                      <a 
                        href={info.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Future Goals & Vision</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Scale FitNxNova into a full e-commerce brand.</li>
                  <li>Develop AI agents that generate full-stack applications autonomously.</li>
                  <li>Expand decentralized healthcare records for mass adoption.</li>
                  <li>Build a startup around AI-driven automation in software development.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Thank You Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
            <DialogDescription>
              Thank you for your valuable feedback. I will get back to you soon!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}  