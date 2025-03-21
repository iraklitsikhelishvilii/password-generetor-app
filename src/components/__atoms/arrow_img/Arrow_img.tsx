import React from "react";
interface Arrow_imgProps {
  Hover: boolean;
}
function Arrow_img({ Hover }: Arrow_imgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z"
        fill={`${Hover ? "#A4FFAF" : "#24232C"}`}
      />
    </svg>
  );
}

export default Arrow_img;
