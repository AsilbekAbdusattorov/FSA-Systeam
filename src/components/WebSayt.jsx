import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Websayt from '../img/websayt-section.png';

const WebSayt = () => {
  const sectionRef = useRef(null);

  return (
    <section id='WebSayt' ref={sectionRef} className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-12">
      <div className="w-full max-w-7xl mx-auto px-5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }} 
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold text-orange-500">Bizning websayt</h2>
          <p className="text-white mt-3 text-xl">Biz sizga eng yaxshi xizmatlarni taqdim etamiz.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100, rotate: -5 }} 
            whileInView={{ opacity: 1, x: 0, rotate: 0 }} 
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img 
              src={Websayt} 
              alt="Vebsayt rasmi" 
              className="w-full rounded-lg shadow-lg shadow-orange-500"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100, rotate: 5 }} 
            whileInView={{ opacity: 1, x: 0, rotate: 0 }} 
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-white">Nega bizni tanlashingiz kerak?</h3>
            <p className="mt-4 text-white">
              Biz zamonaviy va tezkor texnologiyalarni qo‘llagan holda sizning biznesingiz uchun
              eng sifatli websaytlarni yaratamiz. Mijozlarimizning ehtiyojlarini tushunib,
              ularning talablariga mos keladigan yechimlarni taqdim etamiz.
            </p>
            <ul className="mt-4 space-y-2 text-white">
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Yuqori sifatli dizayn</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Tezkor ishlash</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Mobil moslashuvchanlik</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> 24/7 qo‘llab-quvvatlash</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebSayt;
