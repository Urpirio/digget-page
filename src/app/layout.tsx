import React from "react";
import "@/../style/global.css";
import { Albert_Sans } from "next/font/google";
import Section_Header from "../../components/components_Globales/Components/Section_Header";
import Section_Footer from "../../components/components_Globales/Components/Section_Footer";

const albert_Sans = Albert_Sans({
  subsets: ["latin-ext"],
});
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Digget-app</title>
      </head>
      <body className={`${albert_Sans.className}`}>
        <Section_Header />
        {children}
        <Section_Footer />
      </body>
    </html>
  );
}
