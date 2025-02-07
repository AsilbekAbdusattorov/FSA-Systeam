import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../img/ofislogo.jpg";
import Appscript from "../img/AppScript1.png";
import Appsheet from "../img/Appsheet1.png";
import Dashboard from "../img/Dashboard1.png";
import googlesheets from "../img/google-sheets.png";
import Websayt from "../img/websayt1.png";
import CallCenter from "../img/ofis-call-center.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("web");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Telegram botga yuboriladigan xabar
    const text = `Xizmat so'rovi:
        Ism va Familya: ${name}
        Telefon raqami: ${phone}
        Xizmat turi: ${service}
        Izoh: ${message}`;

    const botToken = "8145586082:AAEoft9GQn38oGlwrzFW1vnKicLd5XCdIZA"; // O'zingizning bot tokeningizni kiriting
    const chatId = "6380897170"; // O'zingizning chat ID'ingizni kiriting

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (response.ok) {
        alert("So'rov yuborildi!");
        setIsModalOpen(false); // Modalni yopish
        setName("");
        setPhone("");
        setService("web");
        setMessage("");
      } else {
        alert("Xato yuz berdi!");
      }
    } catch (error) {
      alert("Xato yuz berdi!");
    }
  };
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-20">
      <div className="w-full max-w-7xl mx-auto px-5">
        <motion.div
          className="w-full max-w-7xl mx-auto px-5 flex flex-wrap justify-center md:justify-between items-center text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Chap tomon: Sarlavha */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              <span className="text-orange-500 text-4xl sm:text-5xl">
                FSA System:
              </span>{" "}
              Ish jarayonlaringizni inqilob qilish
            </h2>
            <p className="text-base sm:text-lg mt-2">
              Bizning yechimlarimiz yordamida biznes jarayonlaringizni samarali
              va zamonaviy tarzda tashkil qilamiz. Web saytlar, Google Sheets,
              App Script, AppSheet, Dashboard va boshqa ko'plab xizmatlarni
              taklif etamiz.
            </p>
          </div>

          {/* O'ng tomon: Logo */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              className="w-64 sm:w-80 md:w-96 rounded-3xl"
              src={Logo}
              alt="Kompaniya logotipi"
            />
          </motion.div>
        </motion.div>

        {/* Texnologiyalar bo'limi */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            { src: googlesheets, alt: "Google Sheets", label: "Google Sheets" },
            { src: Dashboard, alt: "Dashboard", label: "Dashboard" },
            { src: Websayt, alt: "Web Sayt", label: "Web Sayt" },
            { src: Appscript, alt: "App Script", label: "App Script" },
            { src: Appsheet, alt: "AppSheet", label: "AppSheet" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.5 }}
            >
              <img className="w-24 mx-auto" src={item.src} alt={item.alt} />
              <p className="mt-2 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action (CTA) */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white text-xl font-semibold py-2 px-6 rounded-3xl shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out flex items-center mt-12"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            <img className="w-12 mr-5" src={CallCenter} alt="CallCenter" />
            Xizmat ko'rsatish
          </motion.button>
        </motion.div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Xizmat so'rovi</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Ism va Familya
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Ism va Familya"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
                  } // Faqat harflarni qabul qiladi
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium mb-2"
                >
                  Telefon raqami
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Telefon raqami"
                  value={phone}
                  onChange={(e) => {
                    let value = e.target.value;

                    // Avtomatik +998 qo'shish va faqat raqamlar, 9 ta raqam kiritish
                    if (value === "") {
                      setPhone("");
                    } else if (value.startsWith("+998")) {
                      // Agar +998 kiritilgan bo'lsa, 13 ta belgidan oshmasligi kerak
                      setPhone(value.slice(0, 13));
                    } else {
                      // Faqat raqamlarni qabul qilish va 9 ta raqam kiritish
                      setPhone(
                        "+998" + value.replace(/[^0-9]/g, "").slice(0, 9)
                      );
                    }
                  }}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-lg font-medium mb-2"
                >
                  Xizmat turi
                </label>
                <select
                  id="service"
                  className="w-full p-2 border border-gray-300 rounded-lg text-black"
                  value={service || ""}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="" disabled selected>
                    Xizmat turini tanlang
                  </option>
                  <option value="google-sheets">Google Sheets</option>
                  <option value="web">Web Sayt</option>
                  <option value="AppScript">AppScript</option>
                  <option value="Dashboard">Dashboard</option>
                  <option value="AppSheet">AppSheet</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Izoh
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Izoh"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)} // Modalni yopish
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                >
                  Yopish
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Jo'natish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
