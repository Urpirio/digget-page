import React from "react";
import "@/../style/global.css";

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
      {children}
    </html>
  );
}
