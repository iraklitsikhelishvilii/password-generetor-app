"use client";
import React, { useEffect } from "react";
import { useMainStates } from "@/store";
function Strength_div() {
  const {
    ChangeColors,
    TooWeakColor,
    WeakColor,
    MediumColor,
    StrongColor,
    TooWeakColorBorder,
    WeakColorBorder,
    MediumColorBorder,
    StrongColorBorder,
    UpperCaseLetters,
    LowerCaseLetters,
    Numbers,
    Symbols,
  } = useMainStates();

  useEffect(() => {
    ChangeColors();
  }, [UpperCaseLetters, LowerCaseLetters, Numbers, Symbols]);
  return (
    <div className="w-[100%] mt-[30px] bg-[#18171F] flex items-center justify-between py-[20px] px-[30px]">
      <p className="text-[#817D92] text-[18px] ">STRENGTH</p>
      <div className="flex items-center gap-[15px]">
        <p className="text-[#E6E5EA] text-[24px]"></p>
        <div className="flex gap-[8px]">
          <div
            style={{
              backgroundColor: TooWeakColor,
              border: `2px solid ${TooWeakColorBorder}`,
            }}
            className="w-[10px] h-[28px] "
          ></div>
          <div
            style={{
              backgroundColor: WeakColor,
              border: `2px solid ${WeakColorBorder}`,
            }}
            className="w-[10px] h-[28px] "
          ></div>
          <div
            style={{
              backgroundColor: MediumColor,
              border: `2px solid ${MediumColorBorder}`,
            }}
            className="w-[10px] h-[28px]"
          ></div>
          <div
            style={{
              backgroundColor: StrongColor,
              border: `2px solid ${StrongColorBorder}`,
            }}
            className="w-[10px] h-[28px] border-[2px] border-solid border-[#E6E5EA]"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Strength_div;
