import Bigphoto from "./Bigphoto";
import boko from "../assets/bokko.jpg";
import handsomeboy from "../assets/handsomeboy.jpg";
import Description from "./Description";
import Technical from "./Technical";
import Progressbar from "./Progressbar";
import Download from "./Download";
import SpendforStudy from "./SpendforStudy";
import Link from "./Alink";

const GroupAbout = () => {
  return (
    <div className="block ml-[20px]  mt-[50px] mb-[60px]">
      <div className="flex  gap-[20px]">
        <Bigphoto imgScr={boko} href={boko} />
        <Bigphoto imgScr={handsomeboy} href={handsomeboy} />
      </div>

      <div className="mt-[50px]">
        <Description />
      </div>
      <div className=" block mt-[40px] ">
        <Technical technical={"Technical Skill"} skill={"Photography"} />
        <Progressbar number={"90%"} />
        <Technical skill={"Web Design"} />
        <Progressbar number={"85%"} />
        <Technical skill={"PhotoShop"} />
        <Progressbar number={"80%"} />
      </div>
      <div className="w-[240px] h-[40px] mt-[30px] ">
        <Download />
      </div>
      {/* how much i charge  */}
      <div className="mt-[70px]">
        <h1 className="font-raleway text-[20px] font-bold">
          How much I charge
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] sm:gap-[24px]">
        <div>
          <SpendforStudy
            background={"bg-gray-500"}
            title={"Basic"}
            sub1={"Web design "}
            sub2={"photography"}
            sub3={"1GB Storage"}
            sub4={"Mail support"}
            price={"$30"}
          />
        </div>
        <div>
          <SpendforStudy
            background={"bg-blue-500"}
            title={"Pro"}
            sub1={"Web design "}
            sub2={"photography"}
            sub3={"50GB Storage"}
            sub4={"Endless support"}
            price={"$25"}
          />
        </div>
        <div>
          <SpendforStudy
            background={"bg-gray-500"}
            title={"Primuim"}
            sub1={"Web design "}
            sub2={"photography"}
            sub3={"1GB Storage"}
            sub4={"Mail support"}
            price={"$30"}
          />
        </div>
      </div>
    </div>
  );
};

export default GroupAbout;
