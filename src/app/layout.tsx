
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "./animate/page-transition";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bostex",
  description: "bostex app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        {/* Any additional head elements */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <SidebarTrigger />
          <div className="flex-row w-full">
            <NavigationMenuDemo />

            {children}

          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}