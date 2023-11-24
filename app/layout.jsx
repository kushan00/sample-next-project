import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeHub LK Next Test",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          <main className="container mx-auto p-10 min-h-screen">            
            {children}            
          </main>
        <Footer/>
      </body>
    </html>
  );
}
