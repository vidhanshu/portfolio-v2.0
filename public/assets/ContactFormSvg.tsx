import React from "react";

function ContactFormSvg() {
  return (
    <svg
      width="731"
      height="929"
      viewBox="0 0 731 929"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_80_5469)">
        <path
          d="M120 163.217C120 134.586 147.458 113.951 174.96 121.914L547.96 229.919C566.346 235.243 579 252.08 579 271.222V705.64C579 733.704 552.553 754.247 525.361 747.304L152.361 652.059C133.322 647.197 120 630.046 120 610.396V163.217Z"
          fill="url(#paint0_linear_80_5469)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_80_5469"
          x="0"
          y="0.1875"
          width="759"
          height="928.477"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="30" dy="30" />
          <feGaussianBlur stdDeviation="75" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0980392 0 0 0 0 0.666667 0 0 0 0 0.788235 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_80_5469"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_80_5469"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_80_5469"
          x1="120"
          y1="147.5"
          x2="557.5"
          y2="723"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8F5FD2" />
          <stop offset="1" stopColor="#19AAC9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ContactFormSvg;
