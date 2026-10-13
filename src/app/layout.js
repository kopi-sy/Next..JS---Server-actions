import { Inter } from "next/font/google";
import "./globals.css";
import CommonLayout from "@/components/common-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ActionHub | Next.js 14 Server Actions",
  description: "Modern full-stack user management and server actions showcase with Next.js 14 and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
