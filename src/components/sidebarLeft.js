import datalesson from '../assets/databaihocIELTS/databaihocielts.json';
import React from 'react';
import ielts_coach from '../assets/images/IELTS Coach.svg';
import target_tiny from '../assets/icon/target-tiny.svg';
import avt_lesson from '../assets/icon/avt_lesson.svg';
import microphone from '../assets/images/microphone.svg';
import home_line from '../assets/icon/home-line.svg';
import dethi from '../assets/icon/dethi.svg';
import phongthi from '../assets/icon/phongthi.svg';
import chart from '../assets/icon/bar-chart-square-02.svg';

const SidebarLeft = () => {
  return (
    <div className=" pt-[32px] pl-[24px] w-[280px] pl-6 pt-8 justify-start h-[100%] fixed">
      <div className=" flex gap-[4px]">
        <img src={microphone} alt="mySvgImage" />
        <img src={ielts_coach} alt="mySvgImage" />
      </div>
      {/* ---menulist --- */}
      <div className="flex flex-col content-between">
        <div className="flex flex-col mt-[12px]">
          <a className="flex mt-5" href="#!">
            <img src={home_line} alt="mySvgImage" />
            <p className="ml-[12px] font-semibold">Lộ Trình</p>
          </a>
          <a className="flex mt-5" href="#!">
            <img src={dethi} alt="mySvgImage" />
            <p className="ml-[12px] font-semibold">Chủ Đề </p>
          </a>
          <a className="flex mt-5" href="#!">
            <img src={phongthi} alt="mySvgImage" />
            <p className="ml-[12px] font-semibold">Phòng Tập</p>
          </a>
          <a className="flex mt-5" href="#!">
            <img src={chart} alt="mySvgImage" />
            <p className="ml-[12px] font-semibold">Phòng thi</p>
          </a>
          <a className="flex mt-5" href="#!">
            <img src={require('../assets/icon/bar-chart-square-02.svg').default} alt="mySvgImage" />
            <p className="ml-[12px] font-semibold">Báo cáo</p>
          </a>
        </div>
        <div className="flex"></div>
      </div>
      {/* ---hỗ trợ và cài đặt --- */}
    </div>
  );
};

export default SidebarLeft;
