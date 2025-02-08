import React, { useState, useEffect } from 'react';
import AppScriptsection from '../img/Appscript-section.png';

const AppScript = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Sectionning 50% ko'rinishi bo'yicha trigger
    );

    const sectionElement = document.getElementById('appScriptSection');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section
      id="AppScript"
      className='bg-gradient-to-r from-gray-700 via-gray-900 to-black py-24'
    >
      <div className='w-full max-w-7xl mx-auto px-8'>
        <div className='text-center mb-16'>
          <h2
            className={`text-5xl font-semibold text-orange-500 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            AppScript Bilan Ishlash
          </h2>
          <p
            className={`text-xl text-gray-300 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Biz sizning barcha dasturiy yechimlaringizni AppScript orqali yaratishga yordam beramiz. AppScript xizmatlarimiz sizga ishlash jarayonlarini avtomatlashtirish va samaradorlikni oshirishga imkon beradi.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          <div className='flex-1'>
            <p
              className={`text-lg text-gray-200 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              AppScript yordamida siz Google Sheets, Gmail, Google Docs kabi xizmatlarda avtomatik ishlarni tashkil qilishingiz mumkin. 
              Masalan, ma'lumotlarni bir varaqdan boshqasiga nusxalash, email yuborish, shakllar bilan ishlash va boshqalar.
            </p>
            <p
              className={`text-lg text-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Shuningdek, biz sizga o'zingizga mos avtomatlashtirilgan ish jarayonlarini yaratishda yordam beramiz. AppScript yordamida siz ko'plab murakkab vazifalarni juda oddiy va samarali bajarishingiz mumkin.
            </p>
          </div>
          <div className='flex-1'>
            <img 
              src={AppScriptsection}
              alt='AppScript Illustration'
              className={`w-full h-auto md:h-full object-cover rounded-xl shadow-2xl shadow-orange-500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppScript;
