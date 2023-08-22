import "./globals.css";
import type { Metadata } from "next";
import { Sidebar ,MobileNavbar } from "@/components";


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
        <div className="lg:flex">
          <div className="sm:hidden lg:block w-1/5">
            <Sidebar />
          </div>
          <div className="sm:block lg:hidden ">
            <MobileNavbar />
          </div>
          <div className="sm:w-full lg:w-4/5 overflow-y-auto overflow-x-hidden h-screen flex items-center justify-start p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
