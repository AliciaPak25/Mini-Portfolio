"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export const metadata = {
  title: "Alicia Pak",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
