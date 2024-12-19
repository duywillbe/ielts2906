import React from 'react';
import ielts_coach from '../assets/images/IELTS Coach.svg';
import microphone from '../assets/images/microphone.svg';
import home_line from '../assets/icon/home-line.svg';
import dethi from '../assets/icon/dethi.svg';
import phongthi from '../assets/icon/phongthi.svg';
import chart from '../assets/icon/barChart.svg';
import barChart from '../assets/icon/barChart.svg';

const SidebarLeft = () => {
  return (
    <div>
      <div>
        <div className="ipad:hidden flex items-center justify-between pt-2 pb-0 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 ml-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div>
              <div className=" flex gap-[4px] ">
                <img src={microphone} alt="mySvgImage" />
                <img src={ielts_coach} alt="mySvgImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden ipad:block">
        {/*------- MENU -------*/}
        <div className=" pt-[32px] pl-[24px] pl-6 pt-8 justify-start h-[100%] fixed">
          <div className=" flex gap-[4px] ">
            <img src={microphone} alt="mySvgImage" />
            <img src={ielts_coach} alt="mySvgImage" />
          </div>
          {/* ---menulist --- */}
          <div className="flex flex-col content-between">
            <div className="flex flex-col mt-[12px]">
              <a className="flex mt-5" href="#!">
                <img src={home_line} alt="mySvgImage" />
                <p className="ml-[12px] font-semibold menu-hover">Lộ Trình</p>
              </a>
              <a className="flex mt-5" href="#!">
                <img src={dethi} alt="mySvgImage" />
                <p className="ml-[12px] font-semibold menu-hover">Chủ Đề </p>
              </a>
              <a className="flex mt-5" href="#!">
                <img src={phongthi} alt="mySvgImage" />
                <p className="ml-[12px] font-semibold  menu-hover">Phòng Tập</p>
              </a>
              <a className="flex mt-5" href="#!">
                <img src={chart} alt="mySvgImage" />
                <p className="ml-[12px] font-semibold menu-hover">Phòng thi</p>
              </a>
              <a className="flex mt-5" href="#!">
                <img src={barChart} alt="mySvgImage" />
                <p className="ml-[12px] font-semibold menu-hover">Báo cáo</p>
              </a>
            </div>
            <div className="flex"></div>
          </div>

          {/* ---hỗ trợ và cài đặt --- */}
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
