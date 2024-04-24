import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Services from "@/components/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  justify-between `}
    >
      <Nav/>
      <Header className='pt-32 pb-0 lg:pb-10'/>
       <Services className='pt-1'/>


    </main>
  );
}
