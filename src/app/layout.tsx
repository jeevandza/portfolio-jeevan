import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components";


export const metadata: Metadata = {
  title: "Jeevan Dsouza",
  description: "A passionate developer bringing you best programming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <div className="flex">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 overflow-auto h-screen flex items-center justify-start p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
