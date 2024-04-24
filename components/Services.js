import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {

    BiHardHat,
    BiPaintRoll,
    BiNote,
    // BiBulb,
    // BiLayer,
    // BiOutline
    
} from 'react-icons/bi'
const contentS = {
    titleS: {
      S1: "Avec Sadeem réaliser vos idées n'a jamais été aussi simple!",
      S2: " Nos Services",
      S3: "Société de Développement des Apps Mobiles , de Développement des Sites Web et  de Développement des ERP",
    },
      steps:[
{
   number:'01',
   icon:BiHardHat,
     title:'Développement des Apps Mobiles',

     desc:'Nous créons des Applications Mobiles optimisées et natives pour les nouvelles versions iOS et Android. afin de les publiés sur le Google Play Store et l App Store d Apple.',
   btn:{

    href:'#',
    label:'learn more',
     }


    },

    {
        number:'02',
        icon:BiPaintRoll,
          title:' Développement des Sites Web',
     
          desc:'Sadeem informatique est une excellente entreprise de conception de sites Web et de développement web en Algérie Nous développons des site Web personnalisées sur mesure.',
     btn:{
     
         href:'#',
         label:'learn more',
     }
     
     
         },
         {
            number:'03',
            icon:BiNote,
              title:' Société de Développement des ERP',
         
              desc:'Sadeem informatique est une excellente entreprise dintégration des logiciels de gestion en Algérie. Nous intégrons un système complet de gestion des ressources ',
         btn:{
         
             href:'#',
             label:'learn more',
         }
         
         
             },

      ],
      
      

      
    }
  ;
console.log(contentS.titleS.S2)

const Services = ({ className }) => {
  return (
    <section className={`${className}`} >
      
<div className='container px-4 mx-auto '>
    <div className='lg:flex justify-center mb-20 lg:mb-36  '>
<div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>
<div className='lg:w-7/12 mb-5 lg:mb-0'>
{contentS.titleS.S2 && (

<motion.span 
initial={{ opacity: 0, y: 20 }}
whileInView={{
  opacity: 1,
  y: 0,
  transition: { duration: 0.5, delay: 0.2 }
}}
viewport={{ once: true }}


className='uppercase tracking-[3px] text-[15px] mb-5 text-sm inline-block text-gray-500'>{contentS.titleS.S2} </motion.span>


)

}
{contentS.titleS.S1 && (

<motion.h2 
initial={{ opacity: 0, y: 20 }}
whileInView={{
  opacity: 1,
  y: 0,
  transition: { duration: 0.5, delay: 0.3 }
}}
viewport={{ once: true }}


className='text-2xl lg:text-4xl'>

{contentS.titleS.S1}


</motion.h2>
)}


</div>
<div className='lg:w-5/12 self-end'>
{contentS.titleS.S3 && (
    <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }}
    viewport={{ once: true }}
    className='text-gray-500'>{contentS.titleS.S3}</motion.p>

)}
    
</div>


</div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 mt-0 mb-11 lg:w-10/12 mx-auto'>

{contentS.steps.map((step,index) =>{
return(

<motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{
   opacity: 1,
   y: 0,
   transition: { duration: 0.7, delay: 0.3 }
 }}
 viewport={{ once: true }}
 whileHover={{y:-10 ,transition:0.1 ,}}
key={step.title} className='group duration-300 pt-32 pl-10 pr-10 bg-white relative overflow-hidden hover:bg-slate-300 hover:shadow-2xl'>

<span className='text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0
 leading-0'>{step.number}</span>
 <div className='absolute top-10 right-10'>
    <span className='text-3xl text-black duration-300 transtion-all ease-in-out group-hover:text-white'>
        <step.icon/>
    </span>
 </div>
<div className='relative z-40 flex gap-3 items-start'>
<div className='font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-50'>
{step.number}

</div>
<div>
    <h3 className=' text-[18px] mb-4 duration-300 transtion-all ease-in-out group-hover:text-white'>
{step.title}
    </h3>
    <p className='text-[15px] text-gray-500 mb-7 duration-300 transtion-all ease-in-out group-hover:text-white'>
{step.desc}

    </p>
    <p>
<Link href={step.btn.href} className='text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-black duration-300 transtion-all ease-in-out group-hover:border-white group-hover:text-white'> {step.btn.label}</Link>
    </p>
</div>

</div>



</motion.div>

)
}
)}


    </div>

</div>





    </section>
  )
}

export default Services
