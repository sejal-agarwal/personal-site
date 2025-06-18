import "./globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Sejal Agarwal",
  description: "Personal site of Sejal Agarwal",
};

const poppins = Poppins({
  weight: ["400","700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          antialiased
        `}
      >
        <Providers>
        <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
