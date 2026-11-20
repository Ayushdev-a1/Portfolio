import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ayushanan.me"),
  title: {
    default: "Ayush Anand | Software Engineer & Data Analyst",
    template: "%s | Ayush Anand",
  },
  description: "Ayush Anand is a software engineer and data analyst in India. He builds web products, real-time systems, AI tools, and data analysis projects.",
  applicationName: "Ayush Anand Portfolio",
  alternates: { canonical: "/" },
  keywords: [
    "Ayush Anand",
    "Ayush Anand software engineer",
    "Ayush Anand data analyst",
    "software engineer India",
    "data analyst India",
    "full-stack development",
    "Python data analysis",
    "Next.js developer",
  ],
  authors: [{ name: "Ayush Anand", url: "https://www.ayushanan.me" }],
  creator: "Ayush Anand",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Ayush Anand | Software Engineer & Data Analyst",
    description: "Software engineering and data analytics by Ayush Anand, based in India. Explore product builds, real-time systems, AI tools, and analytics projects.",
    type: "website",
    url: "https://www.ayushanan.me/",
    siteName: "Ayush Anand",
    locale: "en_IN",
    images: [{ url: "/Asset/ayush.png", width: 1558, height: 1578, alt: "Ayush Anand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Anand | Software Engineer & Data Analyst",
    description: "Software engineering and data analytics by Ayush Anand, based in India.",
    images: ["/Asset/ayush.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.ayushanan.me/#person",
      name: "Ayush Anand",
      url: "https://www.ayushanan.me/",
      image: "https://www.ayushanan.me/Asset/ayush.png",
      jobTitle: "Software Engineer and Data Analyst",
      description: "Software engineer and data analyst in India, building web products, real-time systems, AI tools, and analytics projects.",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      sameAs: [
        "https://github.com/Ayushdev-a1",
        "https://www.linkedin.com/in/ayush-anand-566a3622b/",
      ],
      knowsAbout: [
        "Software engineering", "Data analytics", "Python", "SQL", "C++", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Machine learning", "Financial analysis", "Data visualization",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ayushanan.me/#website",
      name: "Ayush Anand",
      url: "https://www.ayushanan.me/",
      inLanguage: "en-IN",
      publisher: { "@id": "https://www.ayushanan.me/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
