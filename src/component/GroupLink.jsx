import { useState } from "react";
import Alink from "./Alink";
import portfolio from "../assets/portfolio.png";
import about from "../assets/about.png";
import contact from "../assets/contact.png";
import facebook from "../assets/facebookblack.png";
import tiktok from "../assets/tiktok.png";
import ig from "../assets/igblack.png";
import telegram from "../assets/telegramblack.png";
import skype from "../assets/skype.png";
import LinkToUrl from "./LinkToUrl";

const GroupLink = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="p-[5px] block">
      <Alink text={"PORTFOLIO"} imgSrc={portfolio} To={"header"} />
      <Alink text={"ABOUT"} imgSrc={about} To={"about"} />
      <Alink text={"CONTACT"} imgSrc={contact} To={"contact"} />

      {/* Button to toggle LinkToUrl visibility */}
      <div className="md:hidden flex justify-center mt-4">
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {showLinks ? "Hide Links" : "Show Links"}
        </button>
      </div>

      {/* LinkToUrl components */}
      <div
        className={`${
          showLinks ? "block" : "hidden"
        } absolute top-50 left-0 w-full bg-white p-4 md:flex justify-start md:relative md:top-0 md:left-0 md:p-0 md:w-auto`}
      >
        <LinkToUrl
          imgSrc={facebook}
          href={"https://www.facebook.com/sela.reth.75"}
        />
        <LinkToUrl
          imgSrc={tiktok}
          href={"https://www.tiktok.com/@sela_reth"}
        />
        <LinkToUrl
          imgSrc={ig}
          href={"https://www.instagram.com/reth.sela"}
        />
        <LinkToUrl
          imgSrc={telegram}
          href={"https://t.me/Selareth"}
        />
        <LinkToUrl
          imgSrc={skype}
          href={"https://join.skype.com/invite/rsqk95Pe1ZDb"}
        />
      </div>
    </div>
  );
};

export default GroupLink;
