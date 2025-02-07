import React, { useEffect, useRef, useState } from 'react';
import Sales from "../img/SalesIcon.png";
import Revenue from "../img/RevenueIcon.jpg";
import Visitors from "../img/VisitorsIcon.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import Dashboard1 from '../img/Dashboardswipper1.png';
import Dashboard2 from '../img/Dashboardswipper2.jpg';
import Dashboard3 from '../img/Dashboardswipper3.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id='Dashboard' ref={sectionRef} className="py-12 bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-5">
        {/* Sarlavha */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl font-semibold text-orange-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            Dashboard
          </motion.h2>
          <motion.p
            className="text-xl mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.4 }}
          >
            Statistika va tahlilni ko'rish uchun qulay joy.
          </motion.p>
        </motion.div>

        {/* Kontent qismi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Box 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Sotuvlar</h3>
              <p className="text-lg text-gray-600 mt-2">Jami sotuvlar</p>
              <p className="text-3xl font-bold text-green-500 mt-4">
                $1,245.50
              </p>
            </div>
            <div>
              <img src={Sales} alt="Sales Icon" className="w-16 h-16" />
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Tashrifchilar</h3>
              <p className="text-lg text-gray-600 mt-2">Veb-sayt tashrifchilari</p>
              <p className="text-3xl font-bold text-blue-500 mt-4">5,245</p>
            </div>
            <div>
              <img src={Visitors} alt="Visitors Icon" className="w-16 h-16" />
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Daromad</h3>
              <p className="text-lg text-gray-600 mt-2">Oylik daromad</p>
              <p className="text-3xl font-bold text-purple-500 mt-4">$12,500</p>
            </div>
            <div>
              <img src={Revenue} alt="Revenue Icon" className="w-16 h-16" />
            </div>
          </motion.div>
        </div>

        {/* Grafik bo'limi */}
        <div className="mt-12 bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Tahlil Ko'rinishi
          </h3>
          <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <motion.img
                  className="h-80 w-full object-cover"
                  src={Dashboard1}
                  alt="img"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <motion.img
                  className="h-80 w-full object-cover"
                  src={Dashboard2}
                  alt="img"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <motion.img
                  className="h-80 w-full object-cover"
                  src={Dashboard3}
                  alt="img"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
