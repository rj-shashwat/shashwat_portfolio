import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashwat Raj // Java Backend Developer | Spring Boot & Microservices",
  description: "Personal portfolio of Shashwat Raj — Java Backend Developer specializing in Spring Boot, distributed microservices, Docker, Apache Kafka, and cloud-native server architectures.",
  keywords: ["Java Developer", "Spring Boot", "Microservices", "Backend Developer", "Shashwat Raj", "Apache Kafka", "Docker", "SQL"],
  openGraph: {
    title: "Shashwat Raj // Java Backend Developer",
    description: "Architecting high-performance distributed systems & Spring Boot microservices.",
    url: "https://shashwatraj.dev",
    siteName: "Shashwat Raj Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#090612] text-[#f3e8ff] selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
