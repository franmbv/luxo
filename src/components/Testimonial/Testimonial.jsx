import React from "react";
import { delay, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";

const TestimonialData = [
  {
    id: 1,
    name: "Ana Gonzalez",
    designation: "Diseñadora",
    img: "https://i.pravatar.cc/300?img=1",
    text: "Gracias a LUXO, mi casa se ha transformado en un verdadero santuario. La atención personalizada y los productos de alta calidad hicieron que todo el proceso fuera sencillo y agradable. ¡No podría estar más feliz con el resultado!.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Alex Fermin",
    designation: "Desarrollador",
    img: "https://i.pravatar.cc/300?img=59",
    text: "Siempre soñé con tener una sala de estar elegante y acogedora, y este equipo lo hizo posible. Los materiales de alta gama y los acabados impecables realmente marcan la diferencia. Además, lograron todo dentro de mi presupuesto. ¡Altamente recomendados!",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Jorge Rondon",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=65",
    text: "La sinergia del equipo de LUXO es impresionante. Trabajaron conmigo en cada paso del camino para asegurarse de que mi visión se hiciera realidad. El resultado final superó todas mis expectativas. ¡Un servicio excepcional!",
    delay: 0.6,
  },
];
const Testimonial = () => {
  return (
    <div className="py-14">
      {/* heading title */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
        >
          Palabras de nuestros clientes
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
         Haz realidad la casa de tus sueños con ayuda personalizada en el diseño y productos seleccionados a mano
        </motion.p>
      </div>
      {/* tesitomonial cards */}
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {TestimonialData.map((card) => {
            return (
              <motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300"
              >
                {/* Upper section */}
                <div className="flex flex-row items-center gap-3 ">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[60px] rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold group-hover:text-black">
                      {card.name}
                    </p>
                    <p className="text-gray-400 text-xs group-hover:text-black">
                      {card.designation}
                    </p>
                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                {/* Bottom section */}
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-sm text-gray-300 group-hover:text-black duration-300">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
