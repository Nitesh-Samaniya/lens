import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import About from "@/components/about/About";
import Service from "@/components/service/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
    </>
  );
}
