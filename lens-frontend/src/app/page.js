import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import About from "@/components/about/About";
import Service from "@/components/service/Service";
import Meet from "@/components/Meet/Meet";
import Why from "@/components/why/Why";
import KnowUs from "@/components/KnowUs";
import Footer from "@/components/Footer";
import Blogs from "@/components/blogs/Blogs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Meet />
      <Why />
      <Blogs />
      <KnowUs />
      <Footer />
    </>
  );
}
