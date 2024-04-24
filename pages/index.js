import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import ProjectsRecent from "@/components/ProjectsRecent";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  justify-between `}
    >
      <Nav/>
      <Header className='pt-32 pb-0 lg:pb-10'/>
       <Services className='pt-1'/>
       {/* < Testimonial className='py-16 lg:py32'/> */}
       <ProjectsRecent className='pt-70 lg:pb-10'/>
       <Footer/>


    </main>
  );
}
