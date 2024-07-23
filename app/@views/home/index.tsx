import Image from "next/image";
import React from "react";
import Logo from "../../@core/assets/logo.png";
import Framer from "../../@core/assets/frame.png";
import Button from "@/app/@core/components/Button";
import acme1 from "../../@core/assets/acme1.png";
import apex1 from "../../@core/assets/apex1.png";
import celestia1 from "../../@core/assets/celestia1.png";
import echo1 from "../../@core/assets/echo1.png";
import pulse1 from "../../@core/assets/pulse1.png";
import quantum1 from "../../@core/assets/quantum1.png";
import leave from "../../@core/assets/leave.png";
import network from "../../@core/assets/logo2.png";
import elipse from "../../@core/assets/elipse.png";
import menu from "../../@core/assets/menu.png";

const partners = [acme1, quantum1, echo1, celestia1, pulse1, apex1];

const Home = () => {
  return (
    <div>
      <header className="w-full py-4 flex justify-between items-center px-6 max-sm:px-2 md:px-12 top-0 left-0 menu">
        <div className="text-2xl text-sm flex gap-[4px] items-center">
          <Image src={Logo} alt="Image review" />
          <span className="text-white max-sm:hidden">made by</span>
          &ensp;
          <Image className="max-sm:hidden" src={Framer} alt="Image review" />
          <span className="font-bold text-white max-sm:hidden">Framer</span>
        </div>
        <Button className="bg-white max-sm:hidden text-black py-2 px-4 font-medium">
          Get for free
        </Button>
        <Image className="hidden max-sm:block" src={menu} alt="Image review" />
      </header>
      <div>
        <div className="content max-sm:h-[505px] max-sm:min-h-[505px]">
          <div className="text-center py-16 max-w-[642px] m-auto relative z-10 px-[40px]">
            <div className="box">
              <p>
                Version 2.0 is here{" "}
                <a href="#" className="text-blue-300 underline">
                  Read more
                </a>{" "}
                →
              </p>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold text-white">
              One Task at a Time
            </h1>
            <p className="mt-4 font-[400] md:px-[40px]  text-white md:text-xl">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <Button className="bg-white text-black py-2 px-4 font-medium mt-10">
              Get for free
            </Button>
          </div>
          <img src={elipse.src} className="img-banner z-0 h-[200px] max-sm:h-[120px]" />
        </div>

        <section className="bg-black  px-[40px]">
          <div className="p-3">
            <div className="text-center text-sm md:text-base text-[#7A7A7A]">
              Trusted by the world's most innovative teams
            </div>
            <div className="flex flex-wrap justify-center items-center mt-6 space-x-6 text-sm md:text-base text-[#7A7A7A] gap-[10px]">
              {partners?.map((partner, index) => (
                <Image key={index} src={partner} alt="Image review" />
              ))}
            </div>
          </div>
          <div className="text-white py-10 mt-10">
            <div className="max-w-[642px] m-auto">
              <h2 className="text-[54px] font-bold mb-6 text-center max-sm:text-[32px]">
                Everything you need
              </h2>
              <p className="text-[22px] mt-4 font-[400] md:px-[40px]  text-white md:text-xl text-center">
                Enjoy customizable lists, team work tools, and smart tracking
                all in one place. Set tasks, get reminders, and see your
                progress simply and quickly.
              </p>
            </div>

            <div className="flex-wrap flex justify-center gap-[10px] mt-[30px]">
              {Array(3)
                .fill(0)
                ?.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      border: "1px solid #FFFFFF33",
                    }}
                    className=" p-7 rounded-lg text-center flex-col items-center justify-center flex gap-[10px] w-[100%] max-w-[360px]"
                  >
                    <Image className="mb-2" src={leave} alt="Imager review" />
                    <h3 className="font-bold">Secure data encryption</h3>
                    <p>
                      With end-to-end encryption, your data is securely stored
                      and protected from unauthorized access.
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="w-full flex justify-between items-center pb-[20px] h-[100px] bg-black pl-[25px] pr-[25px] text-neutral-200 max-sm:flex-col max-sm:justify-center gap-[5px]">
        <div>© 2024 Your Company, Inc. All rights reserved.</div>
        <div>
          {" "}
          <Image src={network} alt="Imager review" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
