import React from "react";
import { motion } from "framer-motion";
import Googlesheets from "../img/GoogleSheets.png";

const GoogleSheets = () => {
  return (
    <section id="GoogleSheets" className="py-12">
      <div className="w-full max-w-7xl mx-auto px-5">
        {/* Sarlavha */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-orange-500">
            Google Sheets
          </h2>
          <p className="text-lg md:text-xl mt-6 md:mt-8">
            Google Sheets – bulutli jadvallar yordamida real vaqt rejimida <br className="hidden md:block" />
            hujjatlar yaratish va tahrirlash imkonini beruvchi qulay vosita.
          </p>
        </motion.div>

        {/* Kontent qismi */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Matn qismi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Nima uchun Google Sheets?
            </h3>
            <ul className="list-disc mt-4 ml-5 text-white text-lg md:text-xl space-y-3">
              <li>Ma'lumotlarni real vaqtda tahrirlash.</li>
              <li>Google Drive bilan avtomatik sinxronizatsiya.</li>
              <li>Har qanday qurilmadan foydalanish imkoniyati.</li>
              <li>App Script bilan avtomatlashtirish.</li>
              <li>Jamoaviy ishlash va hujjatlarni birgalikda tahrirlash.</li>
              <li>Turli formatdagi ma'lumotlarni import va eksport qilish.</li>
              <li>Ko‘plab tayyor formulalar va funksiyalar.</li>
              <li>Ma’lumotlarni diagrammalar va grafiklar yordamida tahlil qilish.</li>
            </ul>
          </motion.div>

          {/* Rasm qismi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={Googlesheets}
              alt="Google Sheets logotipi"
              className="w-72 md:w-96 rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleSheets;
