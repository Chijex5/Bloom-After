import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/base.css";
import "../styles/components.css";
import "../styles/layouts.css";
import "../styles/admin-dashboard.css";
import "../styles/admin-login.css";
import "../styles/admin-moderation.css";
import "../styles/admin-settings.css";
import "../styles/clinics.css";
import "../styles/content-management.css";
import "../styles/crisis-handling.css";
import "../styles/lifestyle.css";
import "../styles/ngos.css";
import "../styles/resources.css";
import "../styles/stories.css";
import "../styles/suggest-drawer.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloom After",
  description: "Bloom After - a safe, clinically grounded space for navigating postpartum depression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
