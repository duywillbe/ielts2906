function App() {
    return (
        <div className="flex ">
            {/* ---------side bar left bên trái -------*/}
            <div className="bg-blue-200 pt-[32px] pl-[24px] w-[280px] pl-6 pt-8 justify-start h-[100%] fixed">
                <div className=" flex gap-[4px]">
                    <img src={require('./assets/images/microphone.svg').default} alt="mySvgImage" />
                    <img src={require('./assets/images/IELTS Coach.svg').default} alt="mySvgImage" />
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
                    </div>
                    <div className="flex">
                        <h1>123</h1>
                        <h2>abc</h2>
                        <h3>sss</h3>
                    </div>
                </div>
                {/* ---hỗ trợ và cài đặt --- */}
            </div>
            {/* -------- content bên phải--------*/}
            <div className="bg-slate-500 w-full max-w-[caclc(100%-0px) mx-auto h-[1500px]">
                b{/*----- header------- */}
                <div className="">
                    <div className="">
                        <h1></h1>
                        <p></p>
                        <div className=""></div>
                    </div>
                </div>
                {/*----- tittle------- */}
                <div className=""></div>
                {/*----- Nội dung bài học------- */}
                <div className=""></div>
            </div>
        </div>
    );
}

export default App;
