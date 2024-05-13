import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata = {
  title: "Go Travel ",
  description: "by wheval",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider >
    <html lang="en">
      <body className={poppins.className}>
          <section className="w-full min-h-full">
            {children}
          </section>
      </body>
    </html>
    </ClerkProvider>
  );
}
