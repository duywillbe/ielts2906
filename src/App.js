import datalesson from './assets/databaihocIELTS/databaihocielts.json';
import React from 'react';
import { useState } from 'react';

import SidebarLeft from './components/sidebarLeft';
import Weeks from './components/weeks';
import Header from './components/header';

function App() {
  const [phases] = useState(datalesson.body.phases);

  return (
    <div className="flex ">
      {/* ------------------------------------Side bar left -----------------------------*/}

      <SidebarLeft />
      {/* ----------------------------------- Content right------------------------------*/}
      <div className=" w-full max-w-[calc(100%-3px) mx-auto h-[1500px] ml-[224px]">
        {/*--------------------- Header------------------------*/}
        <Header />
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
