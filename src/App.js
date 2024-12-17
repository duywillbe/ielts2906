import datalesson from './assets/databaihocIELTS/databaihocielts.json';
import React from 'react';
import { useState } from 'react';

import SidebarLeft from './components/sidebarLeft';
import Weeks from './components/weeks';

function App() {
  const [phases] = useState(datalesson.body.phases);

  return (
    <div className="flex ">
      {/* ------------------------------------Side bar left -----------------------------*/}

      <SidebarLeft />
      {/* ----------------------------------- Content right------------------------------*/}
      <div className=" w-full max-w-[calc(100%-3px) mx-auto h-[1500px] ml-[224px]">
        {/*--------------------- Header------------------------*/}
        <div className="">
          <div className="bg-[#7A5Af8] max-w-[1096px] w-full mt-8 mb-0 mx-8 p-8 rounded-2xl  relative">
            <div className="flex text-white ">
              {/*----- header left--------*/}
              <div>
                <h1 className="leading-[1.2] text-3xl font-semibold ">IELTS Speaking nền tảng</h1>
                <p className="text-white leading-[1.2] mt-4 font-medium max-w-[650px]">
                  Bước đầu làm quen với cấu trúc bài thi IELTS speaking và các chủ đề cơ bản thường được sử dụng trong đề thi. Nâng cao vốn từ vựng và
                  ngữ pháp để đáp ứng đầu ra 5.0
                </p>
                {/*----- tiến độ --------*/}
                <div className="mt-8 flex text-white gap-10  font-bold">
                  <img src={require('./assets/images/Progressbar.svg').default} alt="mySvgImage" />
                  10% hoàn thành
                  <div className="flex">
                    <img src={require('./assets/icon/target.svg').default} alt="mySvgImage" />
                    <p className="text-white">Mục tiêu 5.0</p>
                  </div>
                  <div className="flex">
                    <img src={require('./assets/icon/documenticon.svg').default} alt="mySvgImage" />
                    <p className="text-white">35 Bài học</p>
                  </div>
                </div>
                <button className="text-[#344054] px-6 py-3 bg-white rounded-[50px] flex gap-[5px] mt-8 font-bold">
                  Tiếp tục bài học
                  <img src={require('./assets/images/arrow-circle-broken-right.svg').default} alt="mySvgImage" className="ml-1" />
                </button>
              </div>
              {/*----- header right-------*/}
              <img src={require('./assets/images/avatar.svg').default} alt="mySvgImage" className="absolute right-[20px] bottom-0" />
            </div>
          </div>
        </div>
        {/*--------------- Nội dung bài học------------------- */}
        <div className="pt-0 pb-8 px-8 ">
          {/*--------part --------- */}
          {phases.map((phase, index) => (
            <div key={index}>
              <div className="font-semibold text-2xl mt-[32px]">{phase.phase_name}</div>
              <p className="text-[#475467]">{phase.phase_description}</p>
              <div>
                <div className="pt-[18px] pb-8 px-8 mt-[32px] rounded-3xl bg-[#ebedee] max-w-[760px]">
                  {/*--------chủ đề --------- */}
                  {phase.tasks_sections.map((section, index) => (
                    /*----------- Weeks -----------*/
                    <Weeks key={index} section={section} week={index + 1} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
