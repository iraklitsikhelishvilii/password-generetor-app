"use client";
import Image from "next/image";
import copy_img from "../../../images/fa-regular_copy.svg";
import { useMainStates } from "@/store";
import Features_div from "@/components/__molecules/features_div/Features_div";
import Strength_div from "@/components/__molecules/strength_div/Strength_div";
import { useState } from "react";
import Button from "@/components/__atoms/button/Button";

function Main() {
  const Hover = useMainStates((state) => state.Hover);
  const HandleEnter = useMainStates((state) => state.HandleEnter);
  const HandleLeave = useMainStates((state) => state.HandleLeave);
  const [Value, setValue] = useState(12);
  const [Password, setPassword] = useState("PTx1f5DaFX");
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const UpperCaseLetters = useMainStates((state) => state.UpperCaseLetters);
  const LowerCaseLetters = useMainStates((state) => state.LowerCaseLetters);
  const Numbers = useMainStates((state) => state.Numbers);
  const Symbols = useMainStates((state) => state.Symbols);
  function Getpassword(
    length: number,
    UpperCaseLetters: boolean,
    LowerCaseLetters: boolean,
    Numbers: boolean,
    Symbols: boolean
  ) {
    let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let lowercase = "qwertyuiopasdfghjklzxcvbnm";
    let numbers = "1234567890";
    let symbols = "!()_-@#$%&?";
    let allChars = "";

    if (UpperCaseLetters) allChars += uppercase;
    if (LowerCaseLetters) allChars += lowercase;
    if (Numbers) allChars += numbers;
    if (Symbols) allChars += symbols;

    if (allChars.length === 0) return "Select option";

    let password = "";
    for (let i = 0; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return password;
  }

  const PasswordClick = () => {
    setPassword(
      Getpassword(Value, UpperCaseLetters, LowerCaseLetters, Numbers, Symbols)
    );
  };
  const Copy = () => {
    navigator.clipboard.writeText(Password);
    alert("Password copied!");
  };
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center bg-[#18171F]">
      <div className="flex flex-col items-center justify-between w-[100%] px-[15px]">
        <h1 className="text-[#817D92] text-[24px] font-[700] max-[500px]:text-[16px] ">
          Password Generator
        </h1>
        <div className="w-[100%] max-w-[540px] bg-[#24232C] flex justify-between items-center px-[32px] py-[28px] mt-[30px] max-[500px]:px-[16px] max-[500px]:py-[16px]">
          <p className="text-[#E6E5EA] text-[32px] max-[500px]:text-[24px]">
            {Password}
          </p>
          <Image
            className="w-[21px] h-[28px] cursor-pointer max-[500px]:w-[17px] max-[500px]:h-[20px]"
            src={copy_img}
            alt="foto of copy feature"
            width={600}
            height={600}
            onClick={Copy}
          />
        </div>

        <div className="w-[100%] max-w-[540px] bg-[#24232C] px-[32px] py-[32px] mt-[24px] max-[500px]:px-[16px] max-[500px]:py-[16px]">
          <div className="flex w-[100%] justify-between items-center">
            <p className=" text-[#E6E5EA] text-[18px] max-[500px]:text-[16px]">
              Character Length
            </p>
            <p className="text-[#A4FFAF] text-[32px] max-[500px]:text-[24px]">
              {Value}
            </p>
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
          <Button
            PasswordClick={PasswordClick}
            Hover={Hover}
            HandleEnter={HandleEnter}
            HandleLeave={HandleLeave}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
