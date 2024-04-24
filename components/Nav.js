import React, { useState, useEffect } from 'react';
 import { IoIosMenu } from "react-icons/io";
 import { MdClose } from "react-icons/md";
 import { CiMenuFries } from "react-icons/ci";
const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1011); 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-[#ffffff]  text-black cursor-pointer text-xl font-medium">
      <div>
    
        <img className="h-[80px] lg:h-[90px]" src="./Images/logo.png" alt="logo" />
      </div>
      {isMobile ? (
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none lg:hidden">
         
          <CiMenuFries size={30} />

          </button>
        </div>
      ) : (
        <ul className="hidden lg:flex lg:items-center lg:space-x-16 ">
        
          <li className=" hover:underline decoration-[#777674]">
            

              Accueil

          </li>
          <li className="hover:underline decoration-[#777674]">
              Website
          </li>
          <li className="hover:underline decoration-[#777674]">
              MobileApp
          </li>
          <li className="hover:underline decoration-[#777674]">
              ERP          </li>
              <li className="hover:underline decoration-[#777674]">
              Marketing          </li>
              <li className="hover:underline decoration-[#777674]">
              Services          </li>
              <li className="hover:underline decoration-[#777674]">
              Blog          </li>
        </ul>
      )}

 
      {isMobile && isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-white p-4">
          <div className='flex flex-row justify-end' onClick={closeMenu}>  <MdClose size={30}/></div>
           
          <ul className="flex flex-col space-y-4 ">
         
         < li className=" hover:underline decoration-[#777674]">
            

            Accueil

        </li>
        <li className="hover:underline decoration-[#777674]">
            Website
        </li>
        <li className="hover:underline decoration-[#777674]">
            MobileApp
        </li>
        <li className="hover:underline decoration-[#777674]">
            ERP          </li>
            <li className="hover:underline decoration-[#777674]">
            Marketing          </li>
            <li className="hover:underline decoration-[#777674]">
            Services          </li>
            <li className="hover:underline decoration-[#777674]">
            Blog          </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
