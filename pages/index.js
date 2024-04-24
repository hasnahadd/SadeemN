import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
// import ProjectsRecent from "@/components/ProjectsRecent";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  justify-between `}
    >
      <Nav/>
      <Header className='pt-32 pb-0 lg:pb-10'/>
       <Services className='pt-1'/>
       < Testimonial className='py-16 lg:py32'/>
       <ProjectCard className='pt-40 mt-4  mb-20 lg:pb-10'/>
       {/* <ProjectsRecent className='pt-32 lg:pb-10'/> */}
       <Footer/>


    </main>
  );
}
