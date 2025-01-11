import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Jason Wang</title>
      </head>
      <body className={inter.className} style={{ margin: 0, background: "#030712", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
