import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../img/ofislogo.jpg";
import CallCenter from "../img/ofis-call-center.png";
import Telegram from "../img/ofis-telegram.png";

const links = [
  { name: "Google Sheets", path: "/google-sheets" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Web Sayt", path: "/web-sayt" },
  { name: "AppScript", path: "/appscript" },
  { name: "AppSheet", path: "/appsheet" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <header className="py-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5 text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <motion.img
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-full w-16 h-16 hover:rotate-180 transition-transform duration-500"
            src={Logo}
            alt="logo"
          />
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl font-bold tracking-wide"
          >
            FSA Systeam
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-300 items-center">
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <NavLink
                className="relative text-lg font-medium hover:text-yellow-300 transition-colors group"
                to={link.path}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-gray-700 text-white fixed inset-0 overflow-y-auto"
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setIsOpen(false)} className="text-3xl">
            <X />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-10 mt-10">
          <Link className="text-3xl font-bold tracking-wide -mt-10 mb-10">
            <span className="text-orange-500">FSA</span> Systeam
          </Link>
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <NavLink
                className="relative text-xl font-medium transition-colors group text-white border-2 py-3 px-4 rounded-2xl bg-gray-800  overflow-hidden"
                to={link.path}
              >
                {link.name}
                <div className="border-[10px] rounded-2xl absolute inset-0 animate-spin-border shadow-yellow-500 shadow-2xl" />
              </NavLink>
            </motion.div>
          ))}
          <div className="flex flex-col gap-5">
            <button
              onClick={() => setIsModalOpen(true)} // Modalni ochish
              className="bg-blue-600 text-white text-xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-105 flex items-center mt-12"
            >
              <img className="w-12 mr-5" src={CallCenter} alt="CallCenter" />
              Xizmat ko'rsatish
            </button>
            <button
              onClick={() => window.open("https://t.me/FSA_syesteam", "_blank")}
              className="bg-teal-500 text-white text-xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-teal-400 transition-colors duration-300 ease-in-out transform hover:scale-105 flex items-center mb-20"
            >
              <img className="w-12 mr-5" src={Telegram} alt="Telegram icon" />
              Telegram kanal
            </button>
          </div>
        </nav>
      </motion.div>

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
    </header>
  );
};

export default Header;
