import Header from "./components/Header";
import Provider from "@/ThemeProvider";
import Navbar from "./components/Navbar";
import "./globals.css";

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
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
