import React from "react";
import freelandlog from '../../img/freelandlog.jpeg'
import brandtrendlogo from '../../img/brandtrendlogo.png';
import kaykraftlogo from '../../img/kaykraftlogo.png';
import lerevelog from '../../img/lerevelog.png';
import sailor from '../../img/sailor.png'




const brandLogo = [
  {
    id: "1",
    imageLogo: freelandlog,
  },
  {
    id: "2",
    // imageLogo: "img: https://i.ibb.co/fY2ZHmd/brandtrendlogo.png" ,
    imageLogo: brandtrendlogo,
  },
  {
    id: "3",
    imageLogo: kaykraftlogo,
  },
  {
    id: "4",
    imageLogo: lerevelog,
  },
  {
    id: "5",
    imageLogo: sailor,
  },
];

const LogoSection = () => {
  return (
    <section className="p-5">
      <h1 className="font-bold md:text-2xl text-xl uppercase">popular brands</h1>
     <div className="flex justify-center gap-5 my-5">
     {brandLogo.map((item, i) => (
        <div  key={i}>
          <img className=" hover:animate-spin md:w-48 md:h-48 w-16 h-16  border rounded-full" src={item.imageLogo} alt="logo" />
        </div>
      ))}
     </div>
    </section>
  );
};

export default LogoSection;
