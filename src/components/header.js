import React from 'react';
import Progressbar from '../assets/images/Progressbar.svg';
import target from '../assets/icon/target.svg';
import documenticon from '../assets/icon/documenticon.svg';
import arrow from '../assets/images/arrow.svg';
import avatar from '../assets/images/avatar.svg';

const Header = () => {
  return (
    <div className="">
      <div className="bg-[#7A5Af8] max-w-[1096px] w-full mt-8 mb-0 mx-8 p-8 rounded-2xl  relative max-ipad:(bg-white text-black)">
        <div className="flex text-white ">
          {/*----- header left--------*/}
          <div>
            <h1 className="leading-[1.2] text-3xl font-semibold ">IELTS Speaking nền tảng</h1>
            <p className="text-white leading-[1.2] mt-4 font-medium max-w-[650px]">
              Bước đầu làm quen với cấu trúc bài thi IELTS speaking và các chủ đề cơ bản thường được sử dụng trong đề thi. Nâng cao vốn từ vựng và ngữ
              pháp để đáp ứng đầu ra 5.0
            </p>
            {/*----- tiến độ --------*/}
            <div className="mt-8 flex text-white gap-10  font-bold">
              <img src={Progressbar} alt="mySvgImage" />
              10% hoàn thành
              <div className="flex">
                <img src={target} alt="mySvgImage" />
                <p className="text-white">Mục tiêu 5.0</p>
              </div>
              <div className="flex">
                <img src={documenticon} alt="mySvgImage" />
                <p className="text-white">35 Bài học</p>
              </div>
            </div>
            <button className="text-[#344054] px-6 py-3 bg-white rounded-[50px] flex gap-[5px] mt-8 font-bold">
              Tiếp tục bài học
              <img src={arrow} alt="mySvgImage" className="ml-1" />
            </button>
          </div>
          {/*----- header right-------*/}
          <img src={avatar} alt="mySvgImage" className="relative right-0" />
        </div>
      </div>
    </div>
  );
};
export default Header;
