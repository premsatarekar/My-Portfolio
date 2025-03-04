import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "../app/context/DarkModeContext"; // Import DarkModeProvider
import Navbar from "../app/components/Navbar"; // Import Navbar
// import Footer from "../app/components/Footer.jsx"; // Import Footer

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Prem Satarekar",
  description: "Prem Satarekar's portfolio showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const darkMode = localStorage.getItem("darkMode");
                if (darkMode && JSON.parse(darkMode)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white text-black dark:bg-darkTheme dark:text-white`}
      >
        <DarkModeProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </DarkModeProvider>
      </body>
    </html>
  );
}
