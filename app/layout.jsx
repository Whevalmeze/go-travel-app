import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const poppins = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata = {
  title: "Go Travel ",
  description: "by wheval",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <Nav />
          <section className="bg-[#F0F2F5] gap-4 p-4 w-full min-h-full flex">
            {children}
          </section>
      </body>
    </html>
  );
}
