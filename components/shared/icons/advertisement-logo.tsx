import React from "react";
import Svg, {
  SvgXml,
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Image,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  Text,
  TextPath,
  TSpan,
  Use,
  Pattern,
  Mask,
} from "react-native-svg";

const AdvertisementLogo = {
  BizYerizLogo: (props: any) => (
    <Svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
      {...props}
    >
      <Circle cx="23" cy="23" r="22.5" fill="#3D9970" />
      <Path
        d="M15.61 18.368C15.7032 17.6972 16.2073 17.2287 16.7359 17.3217C17.2644 17.4146 18.2137 19.0327 18.1205 19.7035C18.0272 20.3743 16.9267 19.8436 16.3982 19.7507C15.8696 19.6578 15.5167 19.0387 15.61 18.368Z"
        fill="#FFC700"
      />
      <Path
        d="M19.7377 16.3226C20.1391 15.4981 21.432 16.2014 22.1653 16.6527C22.8985 17.104 23.1675 18.1382 22.7661 18.9627C22.3647 19.7871 21.4449 20.0896 20.7117 19.6382C19.9784 19.1869 19.3363 17.147 19.7377 16.3226Z"
        fill="#FFC700"
      />
      <Path
        d="M24.3943 14.9023C24.6512 14.3747 25.2398 14.1811 25.7091 14.4699C26.1784 14.7588 26.3505 15.4207 26.0936 15.9483C25.8367 16.476 24.9719 17.2368 24.5026 16.948C24.0334 16.6591 24.1374 15.4299 24.3943 14.9023Z"
        fill="#FFC700"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.3199 19.6769C12.1625 23.7905 13.3813 29.6662 13.894 30.4733C20.8037 29.7192 33.6833 23.5098 34.2242 10.5632C32.536 12.6368 29.9356 13.0527 27.1678 13.4943C27.2546 13.7588 27.3154 14.0419 27.3457 14.3389C27.5276 16.123 26.5389 17.7353 25.1374 17.94C24.9916 17.9613 24.8744 18.0749 24.856 18.2254C24.8358 18.3907 24.8062 18.5566 24.7666 18.7222C24.2691 20.8025 22.3961 22.0465 20.583 21.5008C19.6373 21.2162 18.4606 21.1843 17.5243 21.4093C17.0881 21.5141 16.6257 21.5077 16.1677 21.3699C15.3359 21.1195 14.6851 20.4856 14.3199 19.6769Z"
        fill="#FCD139"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.6208 30.3927C25.1532 25.788 32.8162 20.6495 34.2595 10.5001C36.9284 19.7436 34.8443 25.3731 32.2118 28.8701C28.8863 33.2878 22.2007 37.9137 14.1601 30.8802L11.8754 32.2184L11.5 31.2935L13.6279 30.3993C13.6255 30.3971 13.6232 30.3949 13.6208 30.3927Z"
        fill="#FFC700"
      />
    </Svg>
  ),
  PlantLogo: (props: any) => (
    <Svg
      width="50"
      height="46"
      viewBox="0 0 50 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clip-path="url(#clip0_793_6944)">
        <Path
          d="M12.9416 8.12264C13.5834 6.36095 16.6619 7.31004 18.4236 7.95183C20.1853 8.59362 21.0932 10.542 20.4514 12.3037C19.8096 14.0654 17.8612 14.9733 16.0995 14.3315C14.3378 13.6897 12.2998 9.88433 12.9416 8.12264Z"
          fill="#3D9970"
        />
        <Path
          d="M4.00008 15.3202C4.00008 14.1203 4.97284 13.1475 6.17281 13.1475C7.37278 13.1475 9.9751 15.6819 9.9751 16.8819C9.9751 18.0818 7.37278 17.493 6.17281 17.493C4.97284 17.493 4.00008 16.5202 4.00008 15.3202Z"
          fill="#3D9970"
        />
        <Path
          d="M21.706 2.6727C21.706 1.47273 22.6788 0.499966 23.8788 0.499967C25.0787 0.499967 26.0515 1.47273 26.0515 2.6727C26.0515 3.87267 25.0788 6.1355 23.8788 6.1355C22.6789 6.1355 21.706 3.87267 21.706 2.6727Z"
          fill="#3D9970"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.434 17.2651C11.7346 19.1185 10.0203 20.3545 8.109 20.4971C7.84419 21.8259 7.7053 23.2001 7.7053 24.6068C7.7053 35.8157 16.5237 44.9649 27.6012 45.4951C27.4952 43.8451 27.5578 41.9936 27.767 40.2279C27.7799 40.1197 27.7933 40.0116 27.8072 39.9038C27.464 37.1067 26.7945 34.2601 25.637 32.2238C23.9347 33.0685 22.4167 33.2242 21.0936 32.7776C19.6264 32.2824 18.5695 31.1025 17.8203 29.7322C16.3309 27.0077 15.8563 23.1697 15.9002 20.7459C15.9073 20.3552 16.2132 20.0354 16.6032 20.011C19.3209 19.8407 23.1557 20.5214 25.6667 22.3354C26.9411 23.256 27.9288 24.5111 28.1787 26.1386C28.4109 27.6501 27.9864 29.3521 26.7962 31.2352C27.6149 32.5939 28.2068 34.2527 28.6297 35.988C28.9097 35.096 29.2529 34.2797 29.6693 33.6276C28.7966 31.6593 28.6722 29.9004 29.1404 28.3703C29.6369 26.7475 30.767 25.4898 32.135 24.5559C34.8447 22.7061 38.6765 21.993 41.3001 22.2079C41.6592 22.2373 41.9467 22.518 41.9846 22.8764C42.2454 25.3374 41.8667 29.2774 40.167 32.0955C39.3057 33.5235 38.0738 34.7118 36.372 35.2171C34.8124 35.6801 32.9639 35.538 30.8076 34.6435C30.5081 35.1677 30.2294 35.8583 29.9858 36.6838C29.7016 37.6472 29.477 38.7535 29.3192 39.9131C29.3359 40.0551 29.3517 40.1966 29.3668 40.3373C29.5693 42.2318 29.6283 44.045 29.6033 45.4966C40.6955 44.9821 49.5305 35.8262 49.5305 24.6068C49.5305 13.0571 40.1676 3.69426 28.6179 3.69426C28.4513 3.69426 28.2852 3.69621 28.1196 3.70008C27.4182 6.10917 25.4755 7.83746 23.1767 8.36942C23.4798 9.59014 23.489 10.9022 23.1453 12.2041C22.0541 16.3374 17.8188 18.8034 13.6855 17.7122C13.249 17.5969 12.8311 17.4466 12.434 17.2651ZM19.1365 29.0127C17.9518 26.8456 17.4582 23.7532 17.4027 21.4855C19.8084 21.4783 22.8391 22.1431 24.7883 23.5513C25.8422 24.3126 26.5243 25.2479 26.6961 26.3663C26.8375 27.2867 26.649 28.4326 25.8811 29.8362C24.8509 28.2722 23.4168 26.1073 22.0683 24.6432C21.7877 24.3385 21.3132 24.319 21.0085 24.5996C20.7038 24.8802 20.6843 25.3547 20.9649 25.6594C22.2509 27.0557 23.6291 29.1465 24.669 30.7239L24.8201 30.9532C23.4475 31.6015 22.3906 31.6323 21.5733 31.3564C20.6007 31.0281 19.7893 30.2067 19.1365 29.0127ZM33.9704 30.5461C33.1929 31.4788 32.4015 32.5008 31.7167 33.3912C33.4843 34.0643 34.8675 34.099 35.945 33.7791C37.1919 33.4089 38.1552 32.5266 38.8825 31.3208C40.2274 29.091 40.6563 25.9242 40.5422 23.6722C38.2401 23.6331 35.1536 24.3114 32.9808 25.7947C31.804 26.5981 30.9438 27.6031 30.5748 28.8092C30.2879 29.7469 30.2775 30.8726 30.7275 32.2171C31.3687 31.3851 32.0991 30.4483 32.8182 29.5856C33.3373 28.9629 33.8587 28.3689 34.3441 27.8741C34.8189 27.3902 35.2991 26.9594 35.7341 26.7018C36.0905 26.4908 36.5506 26.6086 36.7616 26.965C36.9727 27.3214 36.8548 27.7815 36.4984 27.9925C36.2391 28.1461 35.8711 28.4596 35.4148 28.9246C34.9692 29.3788 34.4768 29.9386 33.9704 30.5461Z"
          fill="#3D9970"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_793_6944">
          <Rect
            width="50"
            height="45"
            fill="white"
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  ),
  SavingLogo: (props: any) => (
    <Svg
      width="50"
      height="45"
      viewBox="0 0 50 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.9378 7.61923C11.5793 5.85831 14.6565 6.80699 16.4174 7.4485C18.1783 8.09001 19.0858 10.0376 18.4443 11.7985C17.8028 13.5594 15.8552 14.4669 14.0943 13.8254C12.3333 13.1839 10.2963 9.38016 10.9378 7.61923Z"
        fill="#3D9970"
      />
      <Path
        d="M1.99998 14.8138C1.99998 13.6143 2.97232 12.642 4.17177 12.642C5.37122 12.642 7.97241 15.1753 7.97241 16.3748C7.97241 17.5742 5.37122 16.9856 4.17177 16.9856C2.97232 16.9856 1.99998 16.0132 1.99998 14.8138Z"
        fill="#3D9970"
      />
      <Path
        d="M19.6984 2.17176C19.6984 0.972308 20.6707 -3.7272e-05 21.8702 -3.71671e-05C23.0696 -3.70622e-05 24.042 0.972309 24.042 2.17176C24.042 3.37121 23.0697 5.63306 21.8703 5.63306C20.6708 5.63306 19.6984 3.37121 19.6984 2.17176Z"
        fill="#3D9970"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.10687 19.9884C8.01731 19.8459 9.73089 18.6104 10.43 16.7578C10.8268 16.9392 11.2445 17.0894 11.6807 17.2045C15.8121 18.2953 20.0456 15.8303 21.1364 11.6988C21.4799 10.3976 21.4707 9.08616 21.1678 7.86603C23.4655 7.33431 25.4075 5.60679 26.1085 3.19878C26.2742 3.1949 26.4403 3.19295 26.6069 3.19295C38.1516 3.19296 47.5104 12.5518 47.5104 24.0965C47.5104 35.6412 38.1516 45 26.6069 45C15.0622 45 5.70333 35.6412 5.70333 24.0965C5.70333 22.6904 5.84216 21.3167 6.10687 19.9884ZM26.3355 17.1843C20.9926 17.1843 16.656 21.5209 16.656 26.8638C16.656 32.2066 20.9926 36.5433 26.3355 36.5433C31.6784 36.5433 36.015 32.2066 36.015 26.8638C36.015 26.4496 36.3508 26.1138 36.765 26.1138C37.1792 26.1138 37.515 26.4496 37.515 26.8638C37.515 33.0351 32.5068 38.0433 26.3355 38.0433C20.1642 38.0433 15.156 33.0351 15.156 26.8638C15.156 20.6925 20.1642 15.6843 26.3355 15.6843C26.7497 15.6843 27.0855 16.0201 27.0855 16.4343C27.0855 16.8485 26.7497 17.1843 26.3355 17.1843ZM32.5929 15.6843C32.1787 15.6843 31.8429 16.0201 31.8429 16.4343C31.8429 16.8485 32.1787 17.1843 32.5929 17.1843H34.9544L31.02 21.1187C30.7271 21.4116 30.7271 21.8864 31.02 22.1793C31.3129 22.4722 31.7878 22.4722 32.0806 22.1793L36.0147 18.2453V20.6061C36.0147 21.0203 36.3505 21.3561 36.7647 21.3561C37.1789 21.3561 37.5147 21.0203 37.5147 20.6061V16.4572C37.5208 16.2577 37.4477 16.0562 37.2954 15.9039C37.193 15.8016 37.0685 15.735 36.9373 15.7042C36.8819 15.6912 36.8241 15.6843 36.7647 15.6843H32.5929ZM26.039 21.2945C26.039 20.8803 25.7033 20.5445 25.289 20.5445C24.8748 20.5445 24.539 20.8803 24.539 21.2945V23.4104L22.5564 24.0524C22.1624 24.18 21.9463 24.6029 22.0739 24.997C22.2015 25.3911 22.6244 25.6071 23.0185 25.4795L24.539 24.9871V25.8399L22.5564 26.4819C22.1624 26.6095 21.9463 27.0324 22.0739 27.4265C22.2015 27.8206 22.6244 28.0366 23.0185 27.909L24.539 27.4166V33.4441C24.539 33.6698 24.6407 33.8835 24.8158 34.0259C24.991 34.1683 25.2209 34.2243 25.4419 34.1783C26.342 33.9909 27.6872 33.5453 28.8279 32.7949C29.9554 32.0533 31.0418 30.901 31.0418 29.2785C31.0418 28.8643 30.706 28.5285 30.2918 28.5285C29.8776 28.5285 29.5418 28.8643 29.5418 29.2785C29.5418 30.1553 28.9607 30.9122 28.0036 31.5418C27.3836 31.9496 26.672 32.2567 26.039 32.4647V26.9309L28.3786 26.1733C28.7727 26.0457 28.9887 25.6228 28.8611 25.2288C28.7335 24.8347 28.3106 24.6187 27.9165 24.7463L26.039 25.3542V24.5014L28.3786 23.7438C28.7727 23.6162 28.9887 23.1933 28.8611 22.7993C28.7335 22.4052 28.3106 22.1892 27.9165 22.3168L26.039 22.9247V21.2945Z"
        fill="#3D9970"
      />
    </Svg>
  ),
  SocialLogo: (props: any) => (
    <Svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.93778 7.11934C9.57929 5.35841 12.6565 6.3071 14.4174 6.94861C16.1783 7.59012 17.0858 9.53768 16.4443 11.2986C15.8028 13.0595 13.8552 13.967 12.0943 13.3255C10.3333 12.684 8.29627 8.88027 8.93778 7.11934Z"
        fill="#3D9970"
      />
      <Path
        d="M-3.60967e-05 14.3138C-3.59919e-05 13.1143 0.972312 12.142 2.17176 12.142C3.37122 12.142 5.97241 14.6753 5.97241 15.8748C5.97241 17.0742 3.37121 16.4856 2.17176 16.4856C0.972311 16.4856 -3.62016e-05 15.5132 -3.60967e-05 14.3138Z"
        fill="#3D9970"
      />
      <Path
        d="M17.6984 1.67175C17.6984 0.472299 18.6707 -0.500048 19.8702 -0.500048C21.0696 -0.500048 22.042 0.4723 22.042 1.67175C22.042 2.8712 21.0697 5.13306 19.8703 5.13306C18.6708 5.13306 17.6984 2.8712 17.6984 1.67175Z"
        fill="#3D9970"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.51952 16.2578C7.82041 18.1105 6.10674 19.3461 4.19619 19.4886C3.9315 20.8168 3.79268 22.1905 3.79268 23.5965C3.79268 35.1413 13.1515 44.5001 24.6962 44.5001C36.241 44.5001 45.5998 35.1413 45.5998 23.5965C45.5998 12.0518 36.241 2.69297 24.6963 2.69297C24.5299 2.69297 24.364 2.69491 24.1986 2.69878C23.4975 5.10687 21.5555 6.83445 19.2578 7.36617C19.5607 8.58632 19.5699 9.89773 19.2263 11.199C18.1355 15.3305 13.9021 17.7955 9.77059 16.7047C9.33423 16.5895 8.91647 16.4393 8.51952 16.2578ZM35.9113 24.4075C35.9113 21.221 33.3459 18.6504 30.1915 18.6504C28.5541 18.6504 27.0814 19.3432 26.0418 20.4574L31.3223 25.6285L31.9257 26.2193L31.2677 26.7487C30.5423 27.3323 29.3348 28.0922 28.0397 28.4722C26.7557 28.8489 25.1814 28.9004 24.0086 27.7277C22.9301 26.6491 22.2292 26.1874 21.7294 25.9796C21.2724 25.7897 20.9432 25.7899 20.4658 25.7902L20.407 25.7902C19.9873 25.7902 19.5446 25.9723 19.0748 26.3436C18.6046 26.7151 18.1569 27.2379 17.7461 27.8198C17.3381 28.3976 16.986 29.0056 16.6975 29.5292C16.6217 29.667 16.5466 29.806 16.4743 29.9398L16.474 29.9405L16.4738 29.9408C16.2925 30.2765 16.1289 30.5796 16.0144 30.7482C15.9994 30.7702 15.9835 30.7911 15.9667 30.8111C16.306 31.3696 16.681 31.8978 17.0817 32.3954L20.2106 28.0987C20.4544 27.7639 20.9235 27.6901 21.2583 27.9339C21.5932 28.1778 21.667 28.6469 21.4231 28.9817L18.1007 33.5442L18.1176 33.5615C18.464 33.9165 18.8201 34.2509 19.1807 34.5644L22.272 30.423C22.5197 30.0911 22.9897 30.0229 23.3216 30.2706C23.6536 30.5184 23.7218 30.9884 23.474 31.3203L20.3516 35.5034C21.9293 36.6697 23.4773 37.4413 24.546 37.8062L24.546 37.8062L24.5533 37.8088C24.6459 37.8414 24.8169 37.8708 25.0251 37.8708C25.2332 37.8708 25.4042 37.8414 25.4968 37.8088L25.4968 37.8087L25.5041 37.8062C25.9257 37.6623 26.4218 37.455 26.9649 37.1853L25.0419 35.2623C24.2121 34.4325 24.2121 33.0871 25.0419 32.2572C25.5198 31.7793 26.1686 31.5767 26.7916 31.6492C26.8166 31.1409 27.0232 30.6399 27.4113 30.2517C27.8118 29.8512 28.3324 29.644 28.8572 29.6301C28.8786 29.1163 29.0854 28.6088 29.4777 28.2165C30.3075 27.3867 31.6529 27.3867 32.4828 28.2165L34.4448 30.1786C35.342 28.5047 35.9113 26.5792 35.9113 24.4075ZM29.3931 35.7246L26.9864 33.3179C26.7423 33.0738 26.3466 33.0738 26.1026 33.3179C25.8585 33.5619 25.8585 33.9576 26.1026 34.2017L28.3287 36.4278C28.6769 36.2142 29.0334 35.9798 29.3931 35.7246ZM31.7696 33.7262C31.4698 34.0254 31.1634 34.3093 30.8539 34.578L28.472 32.1961C28.228 31.9521 28.228 31.5564 28.472 31.3123C28.7161 31.0683 29.1117 31.0683 29.3558 31.3123L31.7696 33.7262ZM33.6402 31.4952L31.4221 29.2772C31.1781 29.0331 30.7824 29.0331 30.5383 29.2772C30.2943 29.5212 30.2943 29.9169 30.5383 30.161L32.8807 32.5033C33.1455 32.1804 33.3996 31.8444 33.6402 31.4952ZM19.8586 18.6504C21.6189 18.6504 23.2066 19.4611 24.2532 20.7376C24.2904 20.8177 24.3423 20.8926 24.4092 20.958L29.6357 26.0763C29.0574 26.4497 28.3419 26.8203 27.6174 27.0329C26.5524 27.3453 25.6708 27.2685 25.0693 26.667C23.93 25.5277 23.0661 24.9108 22.3051 24.5945C21.566 24.2873 20.9734 24.2888 20.4954 24.2901L20.407 24.2902C19.5355 24.2902 18.7731 24.6702 18.1448 25.1667C17.5168 25.6629 16.9733 26.3136 16.5207 26.9546C16.0653 27.5997 15.682 28.2639 15.3837 28.8055C15.2951 28.9663 15.2172 29.1101 15.1484 29.2373C14.5193 27.7939 14.1388 26.183 14.1388 24.4075C14.1388 21.221 16.7042 18.6504 19.8586 18.6504ZM30.1915 17.1504C34.1818 17.1504 37.4113 20.4001 37.4113 24.4075C37.4113 28.7311 35.407 32.1482 33.0062 34.609C30.6158 37.0591 27.7872 38.6109 25.9921 39.2247C25.6899 39.3306 25.3391 39.3708 25.0251 39.3708C24.711 39.3708 24.3602 39.3306 24.058 39.2247C22.2629 38.6109 19.4343 37.0591 17.044 34.609C14.6431 32.1482 12.6388 28.7311 12.6388 24.4075C12.6388 20.4001 15.8683 17.1504 19.8586 17.1504C21.8795 17.1504 23.7163 17.9945 25.0248 19.3502C26.3306 17.9949 28.1601 17.1504 30.1915 17.1504Z"
        fill="#3D9970"
      />
    </Svg>
  ),
};

export default AdvertisementLogo;