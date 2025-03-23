"use client";
import React, { useEffect } from "react";
import { useMainStates } from "@/store";
function Strength_div() {
  let TooWeakColor = useMainStates((state) => state.TooWeakColor);
  let WeakColor = useMainStates((state) => state.WeakColor);
  let MediumColor = useMainStates((state) => state.MediumColor);
  let StrongColor = useMainStates((state) => state.StrongColor);
  let TooWeakColorBorder = useMainStates((state) => state.TooWeakColorBorder);
  let WeakColorBorder = useMainStates((state) => state.WeakColorBorder);
  let MediumColorBorder = useMainStates((state) => state.MediumColorBorder);
  let StrongColorBorder = useMainStates((state) => state.StrongColorBorder);
  let UpperCaseLetters = useMainStates((state) => state.UpperCaseLetters);
  let LowerCaseLetters = useMainStates((state) => state.LowerCaseLetters);
  let Numbers = useMainStates((state) => state.Numbers);
  let Symbols = useMainStates((state) => state.Symbols);
  let ChangeColors = useMainStates((state) => state.ChangeColors);
  let strengthWord = useMainStates((state) => state.strengthWord);
  useEffect(() => {
    ChangeColors();
  }, [UpperCaseLetters, LowerCaseLetters, Numbers, Symbols]);
  return (
    <div className="w-[100%] mt-[30px] bg-[#18171F] flex items-center justify-between py-[20px] px-[30px] max-[500px]:px-[16px] max-[500px]:py-[16px]">
      <p className="text-[#817D92] text-[18px] max-[500px]:text-[16px] ">
        STRENGTH
      </p>
      <div className="flex items-center gap-[15px]">
        <p className="text-[#E6E5EA] text-[24px] max-[500px]:text-[18px]">
          {strengthWord}
        </p>
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
