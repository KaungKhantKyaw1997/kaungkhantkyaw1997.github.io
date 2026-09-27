import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kaung Khant Kyaw — Software Developer Portfolio",
  description:
    "Software Developer & Manager portfolio showcasing web and mobile expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${poppins.className} bg-cream-50 text-forest-900 antialiased selection:bg-mustard/30 selection:text-forest-900`}
      >
        {children}
      </body>
    </html>
  );
}
