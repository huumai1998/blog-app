import { Inter } from "next/font/google";
import "@/styles/_main.scss";
import { Navbar, Footer } from "@/components";
import { ThemeContextProvider } from "@/context/themeContext";
import { ThemeProvider } from "@/provider/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Study Blog",
  description: "This is study app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
