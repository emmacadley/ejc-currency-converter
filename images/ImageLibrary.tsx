import * as React from "react";
import Svg, { Mask, Path, G, Rect, Defs, ClipPath } from "react-native-svg";
import { Image, ImageStyle } from "react-native";

interface ImageProps {
  width: number;
  height: number;
}
export const ConverterLogo: React.FC<ImageProps> = ({ width, height }) => {
  return (
    <Image
      source={require("./CurrencyConverterLogo.png")}
      style={{ width, height } as ImageStyle}
    />
  );
};

export const AED = (props:any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_1538"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={16} height={12} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_1538)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H16V12H0V0Z"
        fill="#F7FCFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V4H16V0H0Z"
        fill="#5EAA22"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8V12H16V8H0Z"
        fill="#272727"
      />
      <Rect width={5} height={12} fill="#E31D1C" />
    </G>
  </Svg>
);

export const AUD = (props: any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_6320"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={16} height={12} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_6320)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H16V12H0V0Z"
        fill="#2E42A5"
      />
      <Mask
        id="mask1_1086_6320"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={9}
        height={7}
      >
        <Rect width={9} height={6.75} fill="white" />
      </Mask>
      <G mask="url(#mask1_1086_6320)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V6.75H9V0H0Z"
          fill="#2E42A5"
        />
        <Mask
          id="mask2_1086_6320"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={9}
          height={7}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V6.75H9V0H0Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask2_1086_6320)">
          <Mask
            id="mask3_1086_6320"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={9}
            height={7}
          >
            <Rect width={9} height={6.75} fill="white" />
          </Mask>
          <G mask="url(#mask3_1086_6320)">
            <Path
              d="M-0.720825 6.26777L0.69715 7.10535L4.07821 4.35937L5.0117 4.00799L9.045 0.910641L10.0897 -0.334026L8.53432 -0.61397L5.24415 2.05551L2.31465 3.85411L-0.720825 6.26777Z"
              fill="white"
            />
            <Path
              d="M-0.140625 6.85452L-0.00332648 7.34058L4.71493 3.44541L5.48438 2.81242L9.43318 -0.449751H8.71875L4.20436 3.20238L3.82479 3.65617L-0.140625 6.85452Z"
              fill="#E40046"
            />
            <Path
              d="M9.72095 6.26777L8.58422 7.10535L4.4103 4.00799L-0.0448761 0.910641L-1.08953 -0.334026L0.465801 -0.61397L3.75597 2.05551L6.68548 3.85411L9.72095 6.26777Z"
              fill="white"
            />
            <Path
              d="M9.65332 6.68887L9.42189 7.17493L7.4128 5.5072L5.40372 3.83948L3.71615 3.46682L-1.1901 -0.329827H-0.403481L4.50001 3.37671L6.15131 3.82357L9.65332 6.68887Z"
              fill="#E40046"
            />
            <Mask id="path-11-inside-1_1086_6320" fill="white">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.56247 -0.5625H3.43747V2.24996H-0.55481V4.49996H3.43747V7.3125H5.56247V4.49996H9.57019V2.24996H5.56247V-0.5625Z"
              />
            </Mask>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.56247 -0.5625H3.43747V2.24996H-0.55481V4.49996H3.43747V7.3125H5.56247V4.49996H9.57019V2.24996H5.56247V-0.5625Z"
              fill="#E40046"
            />
            <Path
              d="M3.43747 -0.5625V-0.984375H3.01559V-0.5625H3.43747ZM5.56247 -0.5625H5.98434V-0.984375H5.56247V-0.5625ZM3.43747 2.24996V2.67184H3.85934V2.24996H3.43747ZM-0.55481 2.24996V1.82809H-0.976685V2.24996H-0.55481ZM-0.55481 4.49996H-0.976685V4.92184H-0.55481V4.49996ZM3.43747 4.49996H3.85934V4.07809H3.43747V4.49996ZM3.43747 7.3125H3.01559V7.73438H3.43747V7.3125ZM5.56247 7.3125V7.73438H5.98434V7.3125H5.56247ZM5.56247 4.49996V4.07809H5.14059V4.49996H5.56247ZM9.57019 4.49996V4.92184H9.99207V4.49996H9.57019ZM9.57019 2.24996H9.99207V1.82809H9.57019V2.24996ZM5.56247 2.24996H5.14059V2.67184H5.56247V2.24996ZM3.43747 -0.140625H5.56247V-0.984375H3.43747V-0.140625ZM3.85934 2.24996V-0.5625H3.01559V2.24996H3.85934ZM-0.55481 2.67184H3.43747V1.82809H-0.55481V2.67184ZM-0.132935 4.49996V2.24996H-0.976685V4.49996H-0.132935ZM3.43747 4.07809H-0.55481V4.92184H3.43747V4.07809ZM3.85934 7.3125V4.49996H3.01559V7.3125H3.85934ZM5.56247 6.89063H3.43747V7.73438H5.56247V6.89063ZM5.14059 4.49996V7.3125H5.98434V4.49996H5.14059ZM9.57019 4.07809H5.56247V4.92184H9.57019V4.07809ZM9.14832 2.24996V4.49996H9.99207V2.24996H9.14832ZM5.56247 2.67184H9.57019V1.82809H5.56247V2.67184ZM5.14059 -0.5625V2.24996H5.98434V-0.5625H5.14059Z"
              fill="white"
              mask="url(#path-11-inside-1_1086_6320)"
            />
          </G>
        </G>
      </G>
      <G clipPath="url(#clip0_1086_6320)">
        <Path
          d="M4.40804 9.83429L3.81761 10.3799L3.87608 9.57811L3.08136 9.4567L3.7447 9.00249L3.34412 8.30545L4.11283 8.54087L4.40804 7.79309L4.70326 8.54087L5.47196 8.30545L5.07138 9.00249L5.73472 9.4567L4.94 9.57811L4.99847 10.3799L4.40804 9.83429Z"
          fill="#F7FCFF"
        />
        <Path
          d="M10.776 6.06893L10.3824 6.43269L10.4213 5.89814L9.89152 5.8172L10.3337 5.51439L10.0667 5.0497L10.5792 5.20665L10.776 4.70813L10.9728 5.20665L11.4853 5.0497L11.2182 5.51439L11.6604 5.8172L11.1306 5.89814L11.1696 6.43269L10.776 6.06893Z"
          fill="#F7FCFF"
        />
        <Path
          d="M11.7147 2.37667L11.3211 2.74043L11.3601 2.20588L10.8302 2.12494L11.2725 1.82213L11.0054 1.35744L11.5179 1.51439L11.7147 1.01587L11.9115 1.51439L12.424 1.35744L12.1569 1.82213L12.5991 2.12494L12.0693 2.20588L12.1083 2.74043L11.7147 2.37667Z"
          fill="#F7FCFF"
        />
        <Path
          d="M14.0614 4.22286L13.6678 4.58662L13.7067 4.05208L13.1769 3.97113L13.6191 3.66833L13.3521 3.20363L13.8646 3.36058L14.0614 2.86206L14.2582 3.36058L14.7707 3.20363L14.5036 3.66833L14.9458 3.97113L14.416 4.05208L14.455 4.58662L14.0614 4.22286Z"
          fill="#F7FCFF"
        />
        <Path
          d="M12.1841 9.53048L11.7904 9.89424L11.8294 9.35969L11.2996 9.27875L11.7418 8.97594L11.4748 8.51125L11.9872 8.6682L12.1841 8.16968L12.3809 8.6682L12.8933 8.51125L12.6263 8.97594L13.0685 9.27875L12.5387 9.35969L12.5777 9.89424L12.1841 9.53048Z"
          fill="#F7FCFF"
        />
        <Path
          d="M13.8266 6.64792L13.4267 6.85817L13.5031 6.41285L13.1795 6.09746L13.6267 6.03249L13.8266 5.62732L14.0266 6.03249L14.4737 6.09746L14.1502 6.41285L14.2266 6.85817L13.8266 6.64792Z"
          fill="#F7FCFF"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_1086_6320">
        <Rect width={12} height={10} fill="white" transform="translate(3 1)" />
      </ClipPath>
    </Defs>
  </Svg>
);


export const CAD = (props:any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_1756"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={16} height={12} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_1756)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0H12.5V12H4V0Z"
        fill="#F7FCFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.16447 4.20127L7.98652 3L8 10H7.65742L7.86761 8.2677C7.86761 8.2677 5.56179 8.69124 5.75241 8.4776C5.94304 8.26397 6.05283 7.87204 6.05283 7.87204L4 6.47393C4 6.47393 4.32382 6.46978 4.58726 6.30984C4.8507 6.1499 4.32382 5.20134 4.32382 5.20134L5.36027 5.35527L5.75241 4.92023L6.53439 5.7557H6.8859L6.53439 3.842L7.16447 4.20127ZM8 10V3L8.83553 4.20127L9.46561 3.842L9.1141 5.7557H9.46561L10.2476 4.92023L10.6397 5.35527L11.6762 5.20134C11.6762 5.20134 11.1493 6.1499 11.4127 6.30984C11.6762 6.46978 12 6.47393 12 6.47393L9.94717 7.87204C9.94717 7.87204 10.057 8.26397 10.2476 8.4776C10.4382 8.69124 8.13239 8.2677 8.13239 8.2677L8.34258 10H8Z"
        fill="#E31D1C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0H16V12H12V0Z"
        fill="#E31D1C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H4V12H0V0Z"
        fill="#E31D1C"
      />
    </G>
  </Svg>
);

export const CHF = (props:any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_1751"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={16} height={12} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_1751)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V12H16V0H0Z"
        fill="#E31D1C"
      />
      <Mask
        id="mask1_1086_1751"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={12}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask1_1086_1751)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 3H7V5H5V7H7V9H9V7H11V5H9V3Z"
          fill="#F1F9FF"
        />
      </G>
    </G>
  </Svg>
);

export const CNY = (props: any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_1746"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={20} height={15} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_1746)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H16V12H0V0Z"
        fill="#E31D1C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.55698 4.87768L1.61033 6.4034L2.35366 4.09609L1.05548 2.89633L2.81328 2.83146L3.55698 0.974243L4.30067 2.83146H6.05548L4.7603 4.09609L5.35031 6.4034L3.55698 4.87768Z"
        fill="#FECA00"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.50817 3.08597L6.69131 3.57911L6.87763 2.6168L6.19739 1.89661L7.11848 1.85766L7.50817 0.959106L7.89787 1.85766H8.81739L8.13871 2.6168L8.34303 3.57911L7.50817 3.08597Z"
        fill="#FECA00"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.50817 5.08597L7.69131 5.57911L7.87763 4.6168L7.19739 3.89661L8.11848 3.85766L8.50817 2.95911L8.89787 3.85766H9.81739L9.13871 4.6168L9.34303 5.57911L8.50817 5.08597Z"
        fill="#FECA00"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.50817 7.08597L6.69131 7.57911L6.87763 6.6168L6.19739 5.89661L7.11848 5.85766L7.50817 4.95911L7.89787 5.85766H8.81739L8.13871 6.6168L8.34303 7.57911L7.50817 7.08597Z"
        fill="#FECA00"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.50817 8.08597L4.69131 8.57911L4.87763 7.6168L4.19739 6.89661L5.11848 6.85766L5.50817 5.95911L5.89787 6.85766H6.81739L6.13871 7.6168L6.34303 8.57911L5.50817 8.08597Z"
        fill="#FECA00"
      />
    </G>
  </Svg>
);

export const EUR = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    {...props}
  >
    <Rect width={16} height={12} fill="#003399" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.23393 2.86695L7.85822 3.125L7.98506 2.66578L7.65137 2.37477H8.08722L8.2334 2L8.40481 2.37477H8.77637L8.48443 2.66578L8.59745 3.125L8.23393 2.86695Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.23393 9.60377L7.85822 9.86182L7.98506 9.4026L7.65137 9.11158H8.08722L8.2334 8.73682L8.40481 9.11158H8.77637L8.48443 9.4026L8.59745 9.86182L8.23393 9.60377Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.91801 3.2881L9.5423 3.54614L9.66915 3.08693L9.33545 2.79591H9.7713L9.91749 2.42114L10.0889 2.79591H10.4604L10.1685 3.08693L10.2815 3.54614L9.91801 3.2881Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.91801 9.18275L9.5423 9.4408L9.66915 8.98158L9.33545 8.69056H9.7713L9.91749 8.3158L10.0889 8.69056H10.4604L10.1685 8.98158L10.2815 9.4408L9.91801 9.18275Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1812 4.55116L10.8055 4.8092L10.9323 4.34999L10.5986 4.05897H11.0345L11.1807 3.6842L11.3521 4.05897H11.7236L11.4317 4.34999L11.5447 4.8092L11.1812 4.55116Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1812 7.91957L10.8055 8.17761L10.9323 7.7184L10.5986 7.42738H11.0345L11.1807 7.05261L11.3521 7.42738H11.7236L11.4317 7.7184L11.5447 8.17761L11.1812 7.91957Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6023 6.23536L11.2266 6.49341L11.3535 6.03419L11.0198 5.74317H11.4556L11.6018 5.36841L11.7732 5.74317H12.1448L11.8528 6.03419L11.9659 6.49341L11.6023 6.23536Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.22664 3.2881L6.60235 3.54614L6.47551 3.08693L6.8092 2.79591H6.37335L6.22717 2.42114L6.05576 2.79591H5.6842L5.97614 3.08693L5.86312 3.54614L6.22664 3.2881Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.22664 9.18275L6.60235 9.4408L6.47551 8.98158L6.8092 8.69056H6.37335L6.22717 8.3158L6.05576 8.69056H5.6842L5.97614 8.98158L5.86312 9.4408L6.22664 9.18275Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.96358 4.55116L5.33929 4.8092L5.21245 4.34999L5.54614 4.05897H5.11029L4.96411 3.6842L4.7927 4.05897H4.42114L4.71308 4.34999L4.60006 4.8092L4.96358 4.55116Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.96358 7.91957L5.33929 8.17761L5.21245 7.7184L5.54614 7.42738H5.11029L4.96411 7.05261L4.7927 7.42738H4.42114L4.71308 7.7184L4.60006 8.17761L4.96358 7.91957Z"
      fill="#FFD801"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.54244 6.23536L4.91815 6.49341L4.7913 6.03419L5.125 5.74317H4.68915L4.54296 5.36841L4.37155 5.74317H4L4.29194 6.03419L4.17892 6.49341L4.54244 6.23536Z"
      fill="#FFD801"
    />
  </Svg>
);

export const GBP = (props: any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 32 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_968_1492"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={32}
      height={24}
    >
      <Rect width={32} height={24} fill="white" />
    </Mask>
    <G mask="url(#mask0_968_1492)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V24H32V0H0Z"
        fill="#003399"
      />
      <Mask
        id="mask1_968_1492"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={32}
        height={24}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V24H32V0H0Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask1_968_1492)">
        <Mask
          id="mask2_968_1492"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={32}
          height={24}
        >
          <Rect width={32} height={24} fill="white" />
        </Mask>
        <G mask="url(#mask2_968_1492)">
          <Path
            d="M-2.56323 22.2854L2.47846 25.2635L14.5 15.5L17.8191 14.2507L32.1597 3.23787L35.874 -1.18761L30.344 -2.18297L18.6456 7.3085L8.22956 13.7035L-2.56323 22.2854Z"
            fill="white"
          />
          <Path
            d="M-0.5 24.3719L-0.0118275 26.1001L16.7642 12.2507L19.5 10L33.5402 -1.59881H31L14.9489 11.3865L13.5992 13L-0.5 24.3719Z"
            fill="#E40046"
          />
          <Path
            d="M34.5631 22.2854L30.5214 25.2635L15.6808 14.2507L-0.159817 3.23787L-3.87415 -1.18761L1.65593 -2.18297L13.3543 7.3085L23.7703 13.7035L34.5631 22.2854Z"
            fill="white"
          />
          <Path
            d="M34.3229 23.7829L33.5 25.5111L26.3566 19.5814L19.2132 13.6518L13.2129 12.3267L-4.23151 -1.17246H-1.43464L16 12.0063L21.8713 13.5952L34.3229 23.7829Z"
            fill="#E40046"
          />
          <Mask id="path-9-inside-1_968_1492" fill="white">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.7777 -2H12.2222V8H-1.97253V16H12.2222V26H19.7777V16H34.0275V8H19.7777V-2Z"
            />
          </Mask>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.7777 -2H12.2222V8H-1.97253V16H12.2222V26H19.7777V16H34.0275V8H19.7777V-2Z"
            fill="#E40046"
          />
          <Path
            d="M12.2222 -2V-3.5H10.7222V-2H12.2222ZM19.7777 -2H21.2777V-3.5H19.7777V-2ZM12.2222 8V9.5H13.7222V8H12.2222ZM-1.97253 8V6.5H-3.47253V8H-1.97253ZM-1.97253 16H-3.47253V17.5H-1.97253V16ZM12.2222 16H13.7222V14.5H12.2222V16ZM12.2222 26H10.7222V27.5H12.2222V26ZM19.7777 26V27.5H21.2777V26H19.7777ZM19.7777 16V14.5H18.2777V16H19.7777ZM34.0275 16V17.5H35.5275V16H34.0275ZM34.0275 8H35.5275V6.5H34.0275V8ZM19.7777 8H18.2777V9.5H19.7777V8ZM12.2222 -0.5H19.7777V-3.5H12.2222V-0.5ZM13.7222 8V-2H10.7222V8H13.7222ZM-1.97253 9.5H12.2222V6.5H-1.97253V9.5ZM-0.472534 16V8H-3.47253V16H-0.472534ZM12.2222 14.5H-1.97253V17.5H12.2222V14.5ZM13.7222 26V16H10.7222V26H13.7222ZM19.7777 24.5H12.2222V27.5H19.7777V24.5ZM18.2777 16V26H21.2777V16H18.2777ZM34.0275 14.5H19.7777V17.5H34.0275V14.5ZM32.5275 8V16H35.5275V8H32.5275ZM19.7777 9.5H34.0275V6.5H19.7777V9.5ZM18.2777 -2V8H21.2777V-2H18.2777Z"
            fill="white"
            mask="url(#path-9-inside-1_968_1492)"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const JPY = (props: any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_1676"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={16} height={12} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_1676)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V12H16V0H0Z"
        fill="#F7FCFF"
      />
      <Mask
        id="mask1_1086_1676"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={12}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask1_1086_1676)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 9.75C10.0711 9.75 11.75 8.07107 11.75 6C11.75 3.92893 10.0711 2.25 8 2.25C5.92893 2.25 4.25 3.92893 4.25 6C4.25 8.07107 5.92893 9.75 8 9.75Z"
          fill="#E31D1C"
        />
      </G>
    </G>
  </Svg>
);

export const NZD = (props: any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_1619"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={16} height={12} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_1619)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V12H16V0H0Z"
        fill="#2E42A5"
      />
      <Mask
        id="mask1_1086_1619"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={12}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask1_1086_1619)">
        <Mask
          id="mask2_1086_1619"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={9}
          height={7}
        >
          <Rect width={9} height={7} fill="white" />
        </Mask>
        <G mask="url(#mask2_1086_1619)">
          <Path
            d="M-1.00208 6.49993L0.9784 7.36853L9.045 0.944391L10.0897 -0.346375L7.97182 -0.636686L4.68165 2.13166L2.0334 3.99688L-1.00208 6.49993Z"
            fill="#F7FCFF"
          />
          <Path
            d="M-0.730957 7.10849L0.278004 7.61255L9.71451 -0.466309H8.29782L-0.730957 7.10849Z"
            fill="#F50100"
          />
          <Path
            d="M10.0022 6.49993L8.02172 7.36853L-0.0448761 0.944391L-1.08953 -0.346375L1.0283 -0.636686L4.31847 2.13166L6.96673 3.99688L10.0022 6.49993Z"
            fill="#F7FCFF"
          />
          <Path
            d="M9.93457 6.93661L8.92561 7.44067L4.90745 3.9817L3.71615 3.59523L-1.1901 -0.342034H0.226597L5.13009 3.50178L6.43256 3.96519L9.93457 6.93661Z"
            fill="#F50100"
          />
          <Mask
            id="path-9-outside-1_1086_1619"
            maskUnits="userSpaceOnUse"
            x={-1}
            y={-1}
            width={11}
            height={9}
            fill="black"
          >
            <Rect fill="white" x={-1} y={-1} width={11} height={9} />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.99226 0H3.99226V3H0V4H3.99226V7H4.99226V4H9V3H4.99226V0Z"
            />
          </Mask>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.99226 0H3.99226V3H0V4H3.99226V7H4.99226V4H9V3H4.99226V0Z"
            fill="#F50100"
          />
          <Path
            d="M3.99226 0V-0.75H3.24226V0H3.99226ZM4.99226 0H5.74226V-0.75H4.99226V0ZM3.99226 3V3.75H4.74226V3H3.99226ZM0 3V2.25H-0.75V3H0ZM0 4H-0.75V4.75H0V4ZM3.99226 4H4.74226V3.25H3.99226V4ZM3.99226 7H3.24226V7.75H3.99226V7ZM4.99226 7V7.75H5.74226V7H4.99226ZM4.99226 4V3.25H4.24226V4H4.99226ZM9 4V4.75H9.75V4H9ZM9 3H9.75V2.25H9V3ZM4.99226 3H4.24226V3.75H4.99226V3ZM3.99226 0.75H4.99226V-0.75H3.99226V0.75ZM4.74226 3V0H3.24226V3H4.74226ZM0 3.75H3.99226V2.25H0V3.75ZM0.75 4V3H-0.75V4H0.75ZM3.99226 3.25H0V4.75H3.99226V3.25ZM4.74226 7V4H3.24226V7H4.74226ZM4.99226 6.25H3.99226V7.75H4.99226V6.25ZM4.24226 4V7H5.74226V4H4.24226ZM9 3.25H4.99226V4.75H9V3.25ZM8.25 3V4H9.75V3H8.25ZM4.99226 3.75H9V2.25H4.99226V3.75ZM4.24226 0V3H5.74226V0H4.24226Z"
            fill="#F7FCFF"
            mask="url(#path-9-outside-1_1086_1619)"
          />
        </G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4266 10.25L11.5449 10.7135L11.7133 9.73176L11 9.03647L11.9857 8.89324L12.4266 8L12.8674 8.89324L13.8532 9.03647L13.1399 9.73176L13.3083 10.7135L12.4266 10.25Z"
          fill="#F50100"
          stroke="#F7FCFF"
          strokeWidth={0.35}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6 6.93499L9.92016 7.2924L10.05 6.53539L9.5 5.99927L10.2601 5.88882L10.6 5.20007L10.9399 5.88882L11.7 5.99927L11.15 6.53539L11.2798 7.2924L10.6 6.93499Z"
          fill="#F50100"
          stroke="#F7FCFF"
          strokeWidth={0.35}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0988 6.93306L13.4197 7.29007L13.5494 6.5339L13 5.99838L13.7592 5.88806L14.0988 5.20007L14.4383 5.88806L15.1976 5.99838L14.6482 6.5339L14.7779 7.29007L14.0988 6.93306Z"
          fill="#F50100"
          stroke="#F7FCFF"
          strokeWidth={0.35}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6 4.13494L11.9202 4.49235L12.05 3.73534L11.5 3.19922L12.2601 3.08877L12.6 2.40002L12.9399 3.08877L13.7 3.19922L13.15 3.73534L13.2798 4.49235L12.6 4.13494Z"
          fill="#F50100"
          stroke="#F7FCFF"
          strokeWidth={0.35}
        />
      </G>
    </G>
  </Svg>
);


export const THB = (props: any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_1571"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={16} height={12} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_1571)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8H16V12H0V8Z"
        fill="#F50101"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H16V3H0V0Z"
        fill="#F50101"
      />
      <Path
        d="M0 3.25H-0.75V4V8V8.75H0H16H16.75V8V4V3.25H16H0Z"
        fill="#3D58DB"
        stroke="white"
        strokeWidth={1.5}
      />
    </G>
  </Svg>
);

export const USD = (props: any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_6319"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={16} height={12} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_6319)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H16V12H0V0Z"
        fill="#F7FCFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.33337V8.33337H16V7.33337H0Z"
        fill="#E40046"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.16663V10.1666H16V9.16663H0Z"
        fill="#E40046"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.66663V4.66663H16V3.66663H0Z"
        fill="#E40046"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11V12H16V11H0Z"
        fill="#E40046"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.5V6.5H16V5.5H0Z"
        fill="#E40046"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V1H16V0H0Z"
        fill="#E40046"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.83337V2.83337H16V1.83337H0Z"
        fill="#E40046"
      />
      <Rect width={10} height={6.5} fill="#003399" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.86111 1.46935L2.49817 1.7238L2.6207 1.27099L2.29834 0.984036H2.71938L2.8606 0.614502L3.02618 0.984036H3.38511L3.10309 1.27099L3.21227 1.7238L2.86111 1.46935ZM0.861166 1.46938L0.498227 1.72383L0.620759 1.27102L0.298401 0.984066H0.719445L0.860659 0.614532L1.02624 0.984066H1.38517L1.10315 1.27102L1.21234 1.72383L0.861166 1.46938ZM4.49817 1.7238L4.86111 1.46935L5.21227 1.7238L5.10309 1.27099L5.38511 0.984036H5.02618L4.8606 0.614502L4.71938 0.984036H4.29834L4.6207 1.27099L4.49817 1.7238ZM6.86111 1.46935L6.49817 1.7238L6.6207 1.27099L6.29834 0.984036H6.71938L6.8606 0.614502L7.02618 0.984036H7.38511L7.10309 1.27099L7.21227 1.7238L6.86111 1.46935ZM0.498166 3.7238L0.861105 3.46935L1.21227 3.7238L1.10309 3.27099L1.38511 2.98404H1.02618L0.860598 2.6145L0.719383 2.98404H0.29834L0.620698 3.27099L0.498166 3.7238ZM2.86111 3.46935L2.49817 3.7238L2.6207 3.27099L2.29834 2.98404H2.71938L2.8606 2.6145L3.02618 2.98404H3.38511L3.10309 3.27099L3.21227 3.7238L2.86111 3.46935ZM4.49817 3.7238L4.86111 3.46935L5.21227 3.7238L5.10309 3.27099L5.38511 2.98404H5.02618L4.8606 2.6145L4.71938 2.98404H4.29834L4.6207 3.27099L4.49817 3.7238ZM6.86111 3.46935L6.49817 3.7238L6.6207 3.27099L6.29834 2.98404H6.71938L6.8606 2.6145L7.02618 2.98404H7.38511L7.10309 3.27099L7.21227 3.7238L6.86111 3.46935ZM0.498166 5.7238L0.861105 5.46935L1.21227 5.7238L1.10309 5.27099L1.38511 4.98404H1.02618L0.860598 4.6145L0.719383 4.98404H0.29834L0.620698 5.27099L0.498166 5.7238ZM2.86111 5.46935L2.49817 5.7238L2.6207 5.27099L2.29834 4.98404H2.71938L2.8606 4.6145L3.02618 4.98404H3.38511L3.10309 5.27099L3.21227 5.7238L2.86111 5.46935ZM4.49817 5.7238L4.86111 5.46935L5.21227 5.7238L5.10309 5.27099L5.38511 4.98404H5.02618L4.8606 4.6145L4.71938 4.98404H4.29834L4.6207 5.27099L4.49817 5.7238ZM6.86111 5.46935L6.49817 5.7238L6.6207 5.27099L6.29834 4.98404H6.71938L6.8606 4.6145L7.02618 4.98404H7.38511L7.10309 5.27099L7.21227 5.7238L6.86111 5.46935ZM8.49817 1.7238L8.8611 1.46935L9.21227 1.7238L9.10309 1.27099L9.38511 0.984036H9.02618L8.8606 0.614502L8.71938 0.984036H8.29834L8.6207 1.27099L8.49817 1.7238ZM8.8611 3.46935L8.49817 3.7238L8.6207 3.27099L8.29834 2.98404H8.71938L8.8606 2.6145L9.02618 2.98404H9.38511L9.10309 3.27099L9.21227 3.7238L8.8611 3.46935ZM8.49817 5.7238L8.8611 5.46935L9.21227 5.7238L9.10309 5.27099L9.38511 4.98404H9.02618L8.8606 4.6145L8.71938 4.98404H8.29834L8.6207 5.27099L8.49817 5.7238ZM1.86111 2.46935L1.49817 2.7238L1.6207 2.27099L1.29834 1.98404H1.71938L1.8606 1.6145L2.02618 1.98404H2.38511L2.10309 2.27099L2.21227 2.7238L1.86111 2.46935ZM3.49817 2.7238L3.86111 2.46935L4.21227 2.7238L4.10309 2.27099L4.38511 1.98404H4.02618L3.8606 1.6145L3.71938 1.98404H3.29834L3.6207 2.27099L3.49817 2.7238ZM5.86111 2.46935L5.49817 2.7238L5.6207 2.27099L5.29834 1.98404H5.71938L5.8606 1.6145L6.02618 1.98404H6.38511L6.10309 2.27099L6.21227 2.7238L5.86111 2.46935ZM1.49817 4.7238L1.86111 4.46935L2.21227 4.7238L2.10309 4.27099L2.38511 3.98404H2.02618L1.8606 3.6145L1.71938 3.98404H1.29834L1.6207 4.27099L1.49817 4.7238ZM3.86111 4.46935L3.49817 4.7238L3.6207 4.27099L3.29834 3.98404H3.71938L3.8606 3.6145L4.02618 3.98404H4.38511L4.10309 4.27099L4.21227 4.7238L3.86111 4.46935ZM5.49817 4.7238L5.86111 4.46935L6.21227 4.7238L6.10309 4.27099L6.38511 3.98404H6.02618L5.8606 3.6145L5.71938 3.98404H5.29834L5.6207 4.27099L5.49817 4.7238ZM7.86111 2.46935L7.49817 2.7238L7.6207 2.27099L7.29834 1.98404H7.71938L7.8606 1.6145L8.02618 1.98404H8.38511L8.10309 2.27099L8.21227 2.7238L7.86111 2.46935ZM7.49817 4.7238L7.86111 4.46935L8.21227 4.7238L8.10309 4.27099L8.38511 3.98404H8.02618L7.8606 3.6145L7.71938 3.98404H7.29834L7.6207 4.27099L7.49817 4.7238Z"
        fill="#F7FCFF"
      />
    </G>
  </Svg>
);

export const ZAR = (props: any) => (
  <Svg
    width={20}
    height={15}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_1086_1542"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={12}
    >
      <Rect width={16} height={12} fill="white" />
    </Mask>
    <G mask="url(#mask0_1086_1542)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H16V12H0V0Z"
        fill="#F7FCFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V4H16V0H0Z"
        fill="#E31D1C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8V12H16V8H0Z"
        fill="#3D58DB"
      />
      <Mask
        id="path-5-outside-1_1086_1542"
        maskUnits="userSpaceOnUse"
        x={-1}
        y={-4}
        width={18}
        height={20}
        fill="black"
      >
        <Rect fill="white" x={-1} y={-4} width={18} height={20} />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.71429 5L0 -1V13L7.71429 7H16V5H7.71429Z"
        />
      </Mask>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.71429 5L0 -1V13L7.71429 7H16V5H7.71429Z"
        fill="#5EAA22"
      />
      <Path
        d="M0 -1L0.613941 -1.78935L-1 -3.04464V-1H0ZM7.71429 5L7.10035 5.78935L7.37118 6H7.71429V5ZM0 13H-1V15.0446L0.613941 13.7894L0 13ZM7.71429 7V6H7.37118L7.10035 6.21065L7.71429 7ZM16 7V8H17V7H16ZM16 5H17V4H16V5ZM-0.613941 -0.210648L7.10035 5.78935L8.32823 4.21065L0.613941 -1.78935L-0.613941 -0.210648ZM1 13V-1H-1V13H1ZM7.10035 6.21065L-0.613941 12.2106L0.613941 13.7894L8.32823 7.78935L7.10035 6.21065ZM16 6H7.71429V8H16V6ZM15 5V7H17V5H15ZM7.71429 6H16V4H7.71429V6Z"
        fill="#F7FCFF"
        mask="url(#path-5-outside-1_1086_1542)"
      />
      <Path
        d="M0.3 2.6L-0.5 2V3V9V10L0.3 9.4L4.3 6.4L4.83333 6L4.3 5.6L0.3 2.6Z"
        fill="#272727"
        stroke="#FECA00"
      />
    </G>
  </Svg>
);

