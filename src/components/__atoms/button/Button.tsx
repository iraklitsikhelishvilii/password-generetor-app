import React from "react";
import Arrow_img from "../arrow_img/Arrow_img";
interface ButtonProps {
  PasswordClick: () => void;
  HandleEnter: () => void;
  HandleLeave: () => void;
  Hover: boolean;
}
function Button({
  PasswordClick,
  Hover,
  HandleEnter,
  HandleLeave,
}: ButtonProps) {
  return (
    <button
      onClick={PasswordClick}
      className={`w-[100%] py-[20px] mt-[30px]   text-[18px] flex items-center justify-center gap-[24px] border-solid border-[2px] border-[#A4FFAF]  ${
        Hover ? "bg-[#24232C] text-[#A4FFAF]" : "bg-[#A4FFAF] text-[#24232C]"
      }`}
      onMouseEnter={HandleEnter}
      onMouseLeave={HandleLeave}
    >
      GENERATE
      <Arrow_img Hover={Hover} />
    </button>
  );
}

export default Button;
