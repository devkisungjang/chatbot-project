import React from "react";
import "../styles/ChatSelect.scss";
import bladder from "../assets/img/bladder.png";
import breast from "../assets/img/breast.png";
import kidney from "../assets/img/kidney.png";
import prostate from "../assets/img/prostate.png";
import thyroid from "../assets/img/thyroid.png";

import { Link } from "react-router-dom";

// 암 종류
const cancerType = [
  {
    img: prostate,
    title_kr: "전립선암",
    title_en: "Prostate",
  },
  { img: kidney, title_kr: "신장암", title_en: "Kidney" },
  { img: breast, title_kr: "유방암", title_en: "Breast" },
  { img: bladder, title_kr: "방광암", title_en: "Bladder" },
  { img: thyroid, title_kr: "갑상선암", title_en: "Thyroid" },
];

const ChatSelect = () => {
  return (
    <div className="chat-select-wrapper">
      <h2 className="title">암종을 선택해주세요.</h2>
      <section>
        {/* <article>
          <img src={} alt="" />
          <div>
            <p>전립선암</p>
            <p>Prostate</p>
          </div>
        </article> */}
        {cancerType.map((value, index) => {
          return (
            <article key={index}>
              <img src={value.img} alt="암 이미지" />
              <div>
                <p>{value.title_kr}</p>
                <p>{value.title_en}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ChatSelect;
