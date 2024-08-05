import React from 'react';
import { testimonials } from '../../constants/data';

const index = () => {
  return (
    <div className="container">
      <div>
        <div>
          <div className="flex flex-col font-customFontEn">
            <span className="bg-neutral-800 text-indigo-500 m-auto mt-10 mb-10 px-4 py-1 rounded-xl uppercase lg:text-sm mb:text-xs">
              Features
            </span>
            <div className="">
              <h2 className="text-3xl font-semibold tracking-tight text-center lg:text-5xl mb:text-3xl">
                Easily Build{' '}
                <span className="bg-gradient-to-r from-indigo-50 to-indigo-700 text-transparent bg-clip-text">
                  Code User
                </span>
              </h2>
            </div>
          </div>
          <div className="flex  mt-20"></div>
          <div>
            {testimonials.map((item, idx) => (
              <div key={idx} className="w-full flex items-center">
                <div className="w-full lg:w-1/2 p-2 m-4">
                  <img
                    src={item.image}
                    alt="user"
                    className="w-[50%] m-auto p-2 bg-neutral-800 rounded-full"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-2 m-4">
                  <span className="block w-[70%] py-1 rounded-full text-indigo-500 font-semibold lg:text-2xl">
                    User : {item.user}
                  </span>
                  <div className="rounded-xl w-full lg:text-xl ">
                    <p className="text-slate-400 my-5">
                      Company: {item.company}
                    </p>
                    <p className="lg:text-base w-[80%]">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
