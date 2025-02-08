import React, { useState, useEffect, useRef } from "react";
import CallCenter from "../img/ofis-call-center.png";
import Telegram from "../img/ofis-telegram.png";

const Footer = () => {
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
  const [animationStarted, setAnimationStarted] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationStarted(true);
        } else {
          setAnimationStarted(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the footer is in the viewport
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="w-full max-w-7xl mx-auto px-5" ref={footerRef}>
        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-8 transition-transform transform ${
            animationStarted
              ? "opacity-100 translate-x-0 translate-y-0 scale-100"
              : "opacity-0 translate-x-12 translate-y-12 scale-90"
          } transition-all duration-1000 ease-out`}
        >
          {/* Left Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-4xl font-semibold text-orange-500 mb-3">
              Biz bilan bog'laning!
            </h2>
            <p className="text-xl">
              Ma'lumotlar va yordam uchun quyidagi manzillar orqali bizga
              murojaat qiling.
            </p>
          </div>

          {/* Right Section - Buttons */}
          <div className="flex flex-col gap-6">
            <button
              onClick={() => setIsModalOpen(true)} // Modalni ochish
              className="bg-blue-600 text-white text-xl font-semibold py-3 px-8 rounded-3xl shadow-lg hover:bg-indigo-900 transition-all duration-500 ease-in-out transform hover:scale-105 flex items-center justify-center gap-4 border-2 border-transparent hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
            >
              <img className="w-14" src={CallCenter} alt="CallCenter" />
              Xizmat ko'rsatish
            </button>

            <button
              onClick={() => window.open("https://t.me/FSA_syesteam", "_blank")}
              className="bg-green-600 text-white text-xl font-semibold py-3 px-8 rounded-3xl shadow-lg hover:bg-green-900 transition-all duration-500 ease-in-out transform hover:scale-105 flex items-center justify-center gap-4 border-2 border-transparent hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              <img className="w-14" src={Telegram} alt="Telegram icon" />
              Telegram kanal
            </button>
          </div>
        </div>
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
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg "
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
    </footer>
  );
};

export default Footer;
