import "./globals.css";

import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "BookerPlanner",
  description: "Discover world's best booker showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' data-theme="business">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}