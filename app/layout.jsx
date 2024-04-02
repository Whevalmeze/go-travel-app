import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Go Travel ",
  description: "by wheval",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="h-screen w-full">
          <Nav />
          <section className="bg-[#F0F2F5] gap-4 p-4 w-full h-[90%] flex">
            <Sidebar />
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
