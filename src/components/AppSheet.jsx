import React, { useEffect } from 'react';
import AppSheetImage from '../img/AppSheetsection.avif';

const AppSheet = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    elements.forEach(element => {
      observer.observe(element);
    });

  }, []);

  return (
    <section id='AppSheet' className='bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 sm:py-24'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-8'>
        {/* Title Section */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-5xl font-extrabold text-orange-500 mb-6 animate-fade-in'>
            AppSheet Bilan Ishlash
          </h2>
          <p className='text-base sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in'>
            AppSheet yordamida siz Google Sheets yordamida to'liq avtomatlashtirilgan ilovalar yaratishingiz mumkin.
            Bu jarayonlarni samarali va tezlashtiradi.
          </p>
        </div>

        {/* Content Section */}
        <div className='flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-8 sm:gap-12'>
          {/* Left Side Text */}
          <div className='flex-1 p-6 sm:p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 animate-fade-in'>
            <h3 className='text-2xl sm:text-3xl text-orange-500 font-semibold mb-4'>
              Minimal Kod Bilan Ilova Yaratish
            </h3>
            <p className='text-base sm:text-lg text-gray-200 mb-6'>
              AppSheet sizga minimal kod bilan kuchli ilovalarni yaratishga imkon beradi. 
              Siz ma'lumotlar bazasi sifatida Google Sheets yoki boshqa xizmatlardan foydalanib, avtomatik ravishda ilovalar yaratasiz.
            </p>
            <p className='text-base sm:text-lg text-gray-200'>
              Shuningdek, biz sizga moslashtirilgan ilovalar yaratishda yordam beramiz. AppSheet bilan siz tezda ishga tushiriladigan va to'liq integratsiyalashgan ilovalarni yaratishingiz mumkin.
            </p>
          </div>

          {/* Right Side Image */}
          <div className='flex-1 animate-fade-in'>
            <img 
              src={AppSheetImage}
              alt='AppSheet Illustration'
              className='w-full h-auto object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 shadow-orange-500'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppSheet;
