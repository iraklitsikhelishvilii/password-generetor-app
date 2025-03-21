"use client";
import Image from "next/image";
import copy_img from "../../../images/fa-regular_copy.svg";
import { useMainStates } from "@/store";
import Arrow_img from "@/components/__atoms/arrow_img/Arrow_img";
import Features_div from "@/components/__molecules/features_div/Features_div";
import Strength_div from "@/components/__molecules/strength_div/Strength_div";
import { useState } from "react";

function Main() {
  let Hover = useMainStates((state) => state.Hover);
  let HandleEnter = useMainStates((state) => state.HandleEnter);
  let HandleLeave = useMainStates((state) => state.HandleLeave);
  const [Value, setValue] = useState(12);
  const [Password, setPassword] = useState("PTx1f5DaFX");
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };
  const Array =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!()_-@#$%&?";
  function Getpassword(length: any) {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += Array[Math.floor(Math.random() * Array.length)];
    }
    return password;
  }
  const PasswordClick = () => {
    setPassword(Getpassword(Value));
  };
  const Copy = () => {
    navigator.clipboard.writeText(Password);
    alert("Password copied!");
  };
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center bg-[#18171F]">
      <div className="flex flex-col items-center justify-center w-[100%] px-[10px]">
        <h1 className="text-[#817D92] text-[24px] font-[700]">
          Password Generator
        </h1>
        <div className="w-[100%] max-w-[540px] bg-[#24232C] flex justify-between items-center px-[32px] py-[28px] mt-[30px]">
          <p className="text-[#E6E5EA] text-[32px]">{Password}</p>
          <Image
            className="w-[21px] h-[28px] cursor-pointer"
            src={copy_img}
            alt="foto of copy feature"
            width={600}
            height={600}
            onClick={Copy}
          />
        </div>

        <div className="w-[100%] max-w-[540px] bg-[#24232C] px-[32px] py-[32px] mt-[24px]">
          <div className="flex w-[100%] justify-between items-center">
            <p className=" text-[#E6E5EA] text-[18px]">Character Length</p>
            <p className="text-[#A4FFAF] text-[32px]">{Value}</p>
          </div>
          <input
            type="range"
            max={20}
            min={4}
            className="max-w-[476px] w-[100%] mt-[25px] accent-[#A4FFAF] cursor-pointer"
            onChange={HandleChange}
          />
          <Features_div />
          <Strength_div />
          <button
            onClick={PasswordClick}
            className={`w-[100%] py-[20px] mt-[30px]   text-[18px] flex items-center justify-center gap-[24px] border-solid border-[2px] border-[#A4FFAF] ${
              Hover
                ? "bg-[#24232C] text-[#A4FFAF]"
                : "bg-[#A4FFAF] text-[#24232C]"
            }`}
            onMouseEnter={HandleEnter}
            onMouseLeave={HandleLeave}
          >
            GENERATE
            <Arrow_img Hover={Hover} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
