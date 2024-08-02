import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';

import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 font-semibold text-center">
        AceDot Build Tools{' '}
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="text-center text-neutral-400 max-w-4xl font-customFontKr text-base lg:text-lg  mb:text-sm">
        국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다.
        법률안에 이의가 있을 때에는 대통령은 제1항의 기간내에 이의서를 붙여
        국회로 환부하고, 그 재의를 요구할 수 있다. 국회의 폐회중에도 또한 같다.
        이 헌법중 공무원의 임기 또는 중임제한에 관한 규정은 이 헌법에 의하여 그
        공무원이 최초로 선출 또는 임명된 때로부터 적용한다. 모든 국민은
        인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 국가는
        개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.
      </p>
      <div className="flex gap-4 ">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={`font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 0 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className="flex mt-10 gap-4 justify-center items-center flex-col md:flex-row">
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
