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
  return (
    <div className="p-[5px] block">
      <Alink text={"PORTFOLIO"} imgSrc={portfolio} To={"header"} />

      <Alink text={"ABOUT"} imgSrc={about} To={"about"} />
      <Alink text={"CONTACT"} imgSrc={contact} To={"contact"} />
      <div className="flex justify-start">
        <LinkToUrl
          imgSrc={facebook}
          href={"https://www.facebook.com/sela.reth.75"}
        />
        <LinkToUrl imgSrc={tiktok} href={"https://www.tiktok.com/@sela_reth"} />
        <LinkToUrl imgSrc={ig} href={"https://www.instagram.com/reth.sela"} />
        <LinkToUrl imgSrc={telegram} href={"https://t.me/Selareth"} />
        <LinkToUrl
          imgSrc={skype}
          href={"https://join.skype.com/invite/rsqk95Pe1ZDb"}
        />
      </div>
    </div>
  );
};

export default GroupLink;
