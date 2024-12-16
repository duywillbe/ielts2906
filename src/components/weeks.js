import datalesson from '../assets/databaihocIELTS/databaihocielts.json';
import React from 'react';
import { useState } from 'react';
import target_tiny from '../assets/icon/target-tiny.svg';
import avt_lesson from '../assets/icon/avt_lesson.svg';

const Weeks = ({ section }) => {
  const [phases] = useState(datalesson.body.phases);
  const [isShowDetail, setIsShowdetail] = useState(true);
  const handleHideShow = () => {
    let currentStatus;
    if (isShowDetail === true) currentStatus = false;
    if (isShowDetail === false) currentStatus = true;

    setIsShowdetail(!isShowDetail);
  };

  return (
    <div>
      <div className="bg-[#48c9b0]">
        <div>
          <img src={target_tiny} alt="mySvgImage" className="mt-[12px]" />
        </div>
        {/*  ---------bài học----*/}
        <div className="text-[#101828] font-semibold text-[18px] mt-[12px]">{section.name}</div>
        <div className="text-[#475467] text-[14px]">
          {section.description}
          <p
            className="text-[#2525e2] mt-[12px]"
            onClick={() => {
              handleHideShow();
            }}
          >
            {/* toán tử ba ngôi  */}
            {`${isShowDetail ? 'Ẩn' : 'Hiện'} danh sách`}
          </p>
        </div>
        <div className=" mt-[24] rounded-3xl">
          <div className="flex">
            {/* --backgound từng bài học--- */}
            {isShowDetail && (
              <div className="w-full">
                {section.tasks.map((task) => (
                  <div className="bg-[white] flex p-8 mt-[14px] rounded-3xl font-semibold  justify-between ">
                    <div className="flex">
                      <div>
                        <img src={avt_lesson} alt="" />
                      </div>
                      <div className="ml-[14px] ">
                        <div className="w-[300px]">
                          <p className="brake-works">{task.name}</p>
                        </div>
                        <div>
                          <p className="text-[12px] font-extralight">{task.estimate_time} min</p>
                        </div>
                      </div>
                    </div>

                    <button className="  px-4 bg-[#1890FF] text-[white] rounded-[12px] font-semibold">Bắt đầu</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weeks;
