import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const ServiceCard = [
  {
    id: 1,
    title: "Instalaciones de lujo",
    description:
      "Disfruta de espacios diseñados con elegancia y sofisticación, utilizando materiales de alta gama y acabados impecables.",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Productos de calidad",
    description:
      "Ofrecemos una selección de productos cuidadosamente elegidos por su durabilidad, funcionalidad y estética superior.",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Precio asequible",
    description:
      "Logra el hogar de tus sueños sin comprometer tu presupuesto, con opciones que se adaptan a tus necesidades económicas.",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];
const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            Nuestros servicios
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm"
          >
            Haz realidad la casa de tus sueños con ayuda personalizada en el diseño y productos seleccionados a mano
          </motion.p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>
                <a
                  href={card.link}
                  className="inline-block border-b border-black"
                >
                  Leer más
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
