import Header from "./components/Header";
import Provider from "@/ThemeProvider";
import Navbar from "./components/Navbar";
import "./globals.css";
import SearchBar from "./components/SearchBar";

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
          <SearchBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
