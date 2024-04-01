import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "./components/Footer";
import { CSPostHogProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Entrepreneurship Club at Virginia Tech",
  description:
    "Where Entrepreneurship Becomes Community Right at the center of Virginia Tech's startup ecosystem, we bridge gaps between students, industry leaders, and startups that are building spectacular products.",
  icons: {
    icon: "./app/assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <CSPostHogProvider>
        <body className={`${inter.className}`}>
          <NavBar></NavBar>
          <main className="mx-auto w-11/12">{children}</main>
          <Analytics />
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
