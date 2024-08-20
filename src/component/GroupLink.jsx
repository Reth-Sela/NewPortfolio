import Link from "./Link";
import portfolio from "../assets/portfolio.png";
import about from "../assets/about.png";
import contact from "../assets/contact.png";
import facebook from "../assets/facebookblack.png";
import tiktok from "../assets/tiktok.png";
import ig from "../assets/igblack.png";
import telegram from "../assets/telegramblack.png";
import skype from "../assets/skype.png";


const GroupLink = () => {
  return (
    <div className="p-[5px] block">
       
<Link text={"PORTFOLIO"} imgSrc={portfolio} />
      
        
  

      <Link text={"ABOUT"} imgSrc={about} />
      <Link text={"CONTACT"} imgSrc={contact} />
      <div className="flex justify-start">
        <Link imgSrc={facebook} href={"https://www.facebook.com/sela.reth.75"} />
        <Link imgSrc={tiktok} href={"https://www.tiktok.com/@sela_reth"} />
        <Link imgSrc={ig} href={"https://www.instagram.com/reth.sela"}/>
        <Link imgSrc={telegram}href={"https://t.me/Selareth"} />
        <Link imgSrc={skype} href={"https://join.skype.com/invite/rsqk95Pe1ZDb"}/>
      </div>
    </div>
  );
};

export default GroupLink;
