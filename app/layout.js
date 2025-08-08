import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/hero/Navbar";
import Footer from "@/components/hero/Footer";

const sora = localFont({
  src: '../fonts/sora.ttf',
  variable: '--font-sora',
  display: 'swap',
});

export const metadata = {
  title: "Techno Task",
  description: "A simple task management app built in Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} w-full antialiased bg-gradient-to-tl to-[#21082b] from-[#27022e]`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
