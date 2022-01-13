import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import Image from 'next/image';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide className="flex items-center justify-center">
          <div className="grid grid-cols-2 px-10" style={{ height: '70vh' }}>
            <div className="flex flex-col justify-center items-center w-full p-12">
              {/* <h1 className="text-black font-sans font-bold text-5xl"> */}
              <h1 className="text-black font-bold font-sans text-5xl text-center">
                Fugiat <span className="text-secondary">consequat</span>{' '}
                incididunt mollit aute voluptate.
              </h1>
              <h3 className="text-black font-medium font-quicksand text-2xl text-center my-6">
                Ipsum amet ut fugiat aliquip excepteur consectetur nostrud
                adipisicing irure magna.
              </h3>
              <button className="bg-secondary py-2.5 px-6 rounded-2xl text-white font-bold font-sans text-2xl">
                Let&apos;s Talk
              </button>
            </div>
            <div className="flex flex-col justify-center items-center w-full inline-block">
              <div className="absolute">
                <Image src="/__images/slide1-pc.png" width={500} height={500} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div
            className="grid grid-cols-2 px-10 mx-2 bg-primary"
            style={{ height: '70vh' }}
          >
            <div className="flex flex-col justify-center items-start w-full p-12">
              {/* <h1 className="text-black font-sans font-bold text-5xl"> */}
              <h1 className="text-black font-bold font-sans text-5xl">
                Occaecat fugiat id eu non sit culpa ut nostrud.
              </h1>
              <div className="flex justify-start items-center">
                <button className="bg-secondary py-2.5 px-6 rounded-2xl text-white font-bold font-sans text-2xl mt-8 mr-0">
                  Let&apos;s Talk
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full inline-block">
              <div className="absolute">
                <Image src="/__images/slide1-pc.png" width={500} height={500} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div
            className="grid grid-cols-1 px-10 mx-2 w-screen"
            style={{
              height: '70vh',
              'background-image': 'url(/__images/slide3.png)',
            }}
          >
            <div className="flex flex-col justify-center items-center p-12">
              <div className="text-center">
                <h1 className="font-bold font-lilita text-5xl text-white">
                  Occaecat fugiat id eu non sit culpa ut nostrud.
                </h1>
                <h1 className="font-bold font-lilita text-3xl text-black">
                  Occaecat fugiat id eu non sit culpa ut nostrud.
                </h1>
              </div>
              <div className="flex justify-start items-center">
                <button className="bg-secondary py-2.5 px-6 rounded-2xl text-white font-bold font-sans text-2xl mt-8 mr-0">
                  Let&apos;s Talk
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
