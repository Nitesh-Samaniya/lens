import ThemeContextProvider from "@/context/ThemeContext";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <>
      <ThemeContextProvider>
        <HomePage />
      </ThemeContextProvider>
    </>
  );
}
