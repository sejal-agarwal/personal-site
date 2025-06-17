import "./globals.css";
import { Metadata } from "next";
import { Poppins, Press_Start_2P } from "next/font/google";

export const metadata: Metadata = {
  title: "Sejal Agarwal - Software Engineer",
  description: "Personal site of Sejal Agarwal",
};

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable} 
          ${pressStart.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
