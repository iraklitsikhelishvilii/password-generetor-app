"use client";
import React from "react";
import Image from "next/image";
import check_img from "../../../images/Group 10.svg";
import { useMainStates } from "@/store";

function Features_div() {
  let UpperCaseLetters = useMainStates((state) => state.UpperCaseLetters);
  let setUpperCaseletters = useMainStates((state) => state.setUpperCaseletters);

  let LowerCaseLetters = useMainStates((state) => state.LowerCaseLetters);
  let LowerCaseLettersClick = useMainStates(
    (state) => state.LowerCaseLettersClick
  );

  let Numbers = useMainStates((state) => state.Numbers);
  let NumberClick = useMainStates((state) => state.NumberClick);

  let Symbols = useMainStates((state) => state.Symbols);
  let SymbolsClick = useMainStates((state) => state.SymbolsClick);

  return (
    <div className=" flex flex-col gap-[20px] mt-[32px]">
      <div className="flex items-center gap-[24px]">
        <div
          className={`w-[20px] h-[20px] border-[2px] border-solid  cursor-pointer hover:border-[#A4FFAF] ${
            UpperCaseLetters ? "border-[#A4FFAF]" : "border-[#E6E5EA]"
          }`}
          onClick={setUpperCaseletters}
        >
          {UpperCaseLetters && <Image src={check_img} alt="check-box image" />}
        </div>
        <p className="text-[#E6E5EA] text-[18px]">Include Uppercase Letters</p>
      </div>
      <div className="flex items-center gap-[24px]">
        <div
          className={`w-[20px] h-[20px] border-[2px] border-solid  cursor-pointer hover:border-[#A4FFAF] ${
            LowerCaseLetters ? "border-[#A4FFAF]" : "border-[#E6E5EA]"
          }`}
          onClick={LowerCaseLettersClick}
        >
          {LowerCaseLetters && <Image src={check_img} alt="check-box image" />}
        </div>
        <p className="text-[#E6E5EA] text-[18px]">Include Lowercase Letters</p>
      </div>
      <div className="flex items-center gap-[24px]">
        <div
          className={`w-[20px] h-[20px] border-[2px] border-solid  cursor-pointer hover:border-[#A4FFAF] ${
            Numbers ? "border-[#A4FFAF]" : "border-[#E6E5EA]"
          }`}
          onClick={NumberClick}
        >
          {Numbers && <Image src={check_img} alt="check-box image" />}
        </div>
        <p className="text-[#E6E5EA] text-[18px]">Include Numbers</p>
      </div>
      <div className="flex items-center gap-[24px]">
        <div
          className={`w-[20px] h-[20px] border-[2px] border-solid  cursor-pointer hover:border-[#A4FFAF] ${
            Symbols ? "border-[#A4FFAF]" : "border-[#E6E5EA]"
          }`}
          onClick={SymbolsClick}
        >
          {Symbols && <Image src={check_img} alt="check-box image" />}
        </div>
        <p className="text-[#E6E5EA] text-[18px]">Include Symbols</p>
      </div>
    </div>
  );
}

export default Features_div;
