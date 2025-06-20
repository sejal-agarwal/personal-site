import "./globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Sejal Agarwal",
  description: "Sejal Agarwal's Personal Website",
  icons: {
    icon: "data:image/svg+xml;utf8," +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">' +
        '<text x="0" y="108" font-size="108">👩🏽‍💻</text>' +
      "</svg>"
  }
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
