import datalesson from './assets/databaihocIELTS/databaihocielts.json';
import React from 'react';
import { useState } from 'react';
import ielts_coach from './assets/images/IELTS Coach.svg';
import target_tiny from './assets/icon/target-tiny.svg';
import avt_lesson from './assets/icon/avt_lesson.svg';

function App() {
  const [phases] = useState(datalesson.body.phases);

  return (
    <div className="flex ">
      {/* ---------side bar left bên trái -------*/}
      <div className=" pt-[32px] pl-[24px] w-[280px] pl-6 pt-8 justify-start h-[100%] fixed">
        <div className=" flex gap-[4px]">
          <img src={require('./assets/images/microphone.svg').default} alt="mySvgImage" />
          <img src={ielts_coach} alt="mySvgImage" />
        </div>
        {/* ---menulist --- */}
        <div className="flex flex-col content-between">
          <div className="flex flex-col mt-[12px]">
            <a className="flex mt-5" href="#!">
              <img src={require('./assets/icon/home-line.svg').default} alt="mySvgImage" />
              <p className="ml-[12px] font-semibold">Lộ Trình</p>
            </a>
            <a className="flex mt-5" href="#!">
              <img src={require('./assets/icon/dethi.svg').default} alt="mySvgImage" />
              <p className="ml-[12px] font-semibold">Chủ Đề </p>
            </a>
            <a className="flex mt-5" href="#!">
              <img src={require('./assets/icon/phongthi.svg').default} alt="mySvgImage" />
              <p className="ml-[12px] font-semibold">Phòng Tập</p>
            </a>
            <a className="flex mt-5" href="#!">
              <img src={require('./assets/icon/bar-chart-square-02.svg').default} alt="mySvgImage" />
              <p className="ml-[12px] font-semibold">Phòng thi</p>
            </a>
            <a className="flex mt-5" href="#!">
              <img src={require('./assets/icon/bar-chart-square-02.svg').default} alt="mySvgImage" />
              <p className="ml-[12px] font-semibold">Báo cáo</p>
            </a>
          </div>
          <div className="flex"></div>
        </div>
        {/* ---hỗ trợ và cài đặt --- */}
      </div>
      {/* ----------- content bên phải-----------*/}
      <div className=" w-full max-w-[caclc(100%-0px) mx-auto h-[1500px] ml-[224px]">
        {/*------------- header----------*/}
        <div className="">
          <div className="bg-[#7A5Af8] w-[1096px] mt-8 mb-0 mx-8 h-[300px] p-8 rounded-2xl  ">
            <div className="flex text-white ">
              {/*----- left-------*/}
              <div>
                <h1 className="leading-[1.2] text-3xl font-semibold ">IELTS Speaking nền tảng</h1>
                <p className="text-white leading-[1.2] mt-4 font-medium">
                  Bước đầu làm quen với cấu trúc bài thi IELTS speaking và các chủ đề cơ bản thường được sử dụng trong
                  đề thi. Nâng cao vốn từ vựng và ngữ pháp để đáp ứng đầu ra 5.0
                </p>
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
                  <img
                    src={require('./assets/images/arrow-circle-broken-right.svg').default}
                    alt="mySvgImage"
                    className="ml-1"
                  />
                </button>
              </div>
              {/*----- right-------*/}
              <img
                src={require('./assets/images/avatar.svg').default}
                alt="mySvgImage"
                className="relative right-[20px] bottom-8"
              />
            </div>
          </div>
        </div>
        {/*----- Nội dung bài học------- */}
        <div className="pt-0 pb-8 px-8 ">
          {phases.map((phase) => (
            <div>
              <div className="font-semibold text-2xl mt-[32px]">{phase.phase_name}</div>
              <p className="text-[#475467]">{phase.phase_description}</p>
              <div>
                <div className="pt-[18px] pb-8 px-8 mt-[32px] rounded-3xl bg-[#ebedee] max-w-[760px]">
                  {phase.tasks_sections.map((section) => (
                    <div>
                      <div>
                        <img src={target_tiny} alt="mySvgImage" className="mt-[12px]" />
                      </div>
                      {/*  ---------                    tuần           ----------           */}
                      <div className="text-[#101828] font-semibold text-[18px] mt-[12px]">{section.name}</div>
                      <div className="text-[#475467] text-[14px]">{section.description}</div>
                      <div className=" mt-[24] rounded-3xl">
                        <div className="flex">
                          {/* --backgound từng bài học--- */}
                          <div className="w-full">
                            {section.tasks.map((tasks) => (
                              <div className="bg-[white] flex p-8 mt-[14px] rounded-3xl font-semibold  justify-between ">
                                <div className="flex">
                                  <div>
                                    <img src={avt_lesson} alt="" />
                                  </div>
                                  <div className="ml-[14px] ">
                                    <div className="w-[300px]">
                                      <p className="brake-works">{tasks.name}</p>
                                    </div>
                                    <div>
                                      <p className="text-[12px] font-extralight">{tasks.estimate_time} min</p>
                                    </div>
                                  </div>
                                </div>

                                <button className="  px-4 bg-[#1890FF] text-[white] rounded-[12px] font-semibold">
                                  Bắt đầu
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
