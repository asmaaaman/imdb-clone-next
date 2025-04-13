import { ThemeProvider } from "next-themes";

import "./globals.css";
import Header from "./components/Header";
import Provider from "@/ThemeProvider";

export const metadata = {
  title: "IMDB Clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
