import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Modal from "../components/Popup/Modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Startups Advisory",
  description:
    "Startups Advisory is a platform that provides startups with the tools and resources they need to succeed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="../assets/images/favicon.svg" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="/assets/css/theme/theme-two.min.purge.css"
        />
        <link rel="stylesheet" href="/assets/css/unicons.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/header.css" />
        <link rel="stylesheet" href="/assets/js/uni-core/css/uni-core.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
        <Modal />
      </body>
    </html>
  );
}
