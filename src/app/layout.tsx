import type { Metadata } from "next";
import "./globals.scss";
import React from "react";

export const metadata: Metadata = {
  title: "Ludovic Fieret Photography",
  description: "Ludovic Fieret's photography presentation website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"overflow-x-hidden"}>
      {children}
      </body>
    </html>
  );
}
