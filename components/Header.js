import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const content = {
  title: {
    T: "SALUT",
    T2: "SADEEM votre Partenaire de Développement ",
    Desc: "Une société Algerienne de développement informatique qui accompagne les entreprises à développer leurs projets.Avec Sadeem réaliser vos idées n'a jamais été aussi simple!",
    btn: {
      href: '/contact',
      label: 'Contactez Nous '
    }
  }
};

const Header = ({ className }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const imgScrol1 = useTransform(scrollYProgress, [0, 1], ['20%', '-40%']);
//   const imgScrol2 = useTransform(scrollYProgress, [0, 1], ['100%', '50%']);

  console.log(content.title.T);

  return (
    <section className={`${className}`} ref={ref}>
      <div className='container px-4 mx-auto'>
        <div className='lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between'>

          <div className='lg:w-5/12'>
            {content.title.T && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 }
                }}
                viewport={{ once: true }}
                className='uppercase tracking-[3px] text-[15px] mb-5 inline-block text-gray-500'>
                {content.title.T}
              </motion.span>
            )}
            {content.title.T2 && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 }
                }}
                viewport={{ once: true }}
                className='text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8'>
                {content.title.T2}
              </motion.h1>
            )}
            {content.title.Desc && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: 0.2 }
                }}
                viewport={{ once: true }}
                className='text-gray-600  w-auto lg:w-screen  max-w-xl text-base lg:text-lg mb-10 lg:mb-16'>
                {content.title.Desc}
              </motion.p>
            )}
            {content.title.btn.label && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: 0.2 }
                }}
                viewport={{ once: true }}>
                <Link href={content.title.btn.href} className='transtion-all duration-300  ease-in-out text-[11px] tracking-[2px] font-bold uppercase bg-slate-400 py-4 px-5 inline-block hover:bg-slate-600'>
                  {content.title.btn.label}
                </Link>
              </motion.p>
            )}
          </div>

          <div className='lg:w-7/12 relative'>
            <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0.2 }
            }}
            viewport={{ once: true }}
            style={{y:imgScrol1}}
            
            className='z-[2] relative bg-cover bg-center'>
              <Image src="/images/p1.png" alt=" Image" width={900} height={985} />
            </motion.div>
{/* <div className='absolute bottom-0 lg-bottom-[200px] -left-[100px] z-[1]'>
    <img src='/images/dots,png'alt='pic'className='w-64'/>


</div> */}


          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;

