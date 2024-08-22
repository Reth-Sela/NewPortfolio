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
  const charge = [
    {
      background: "bg-gray-500",
      tittle: "Basic",
      sub1: "Web Design",
      sub2: "Photography",
      sub3: "1GB Storage",
      sub4: "Mail Support",
      price: "$30",
    },
    {
      background: "bg-blue-500",
      tittle: "Pro",
      sub1: "Web Design",
      sub2: "Photography",
      sub3: "50GB Storage",
      sub4: "Endless Support",
      price: "$25",
    },

    {
      background: "bg-gray-500",
      tittle: "Primuim",
      sub1: "Web Design",
      sub2: "Photography",
      sub3: "1GB Storage",
      sub4: "Mail Support",
      price: "$30",
    },
  ];
  return (
    <div className="block mx-[20px]  mt-[50px] mb-[60px]">
      <div className="flex  gap-[10px] sm:gap-5">
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

      <div className=" mx-[5px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] sm:gap-[24px]">
        {charge.map((c) => {
          return (
            <SpendforStudy
              background={c.background}
              title={c.tittle}
              sub1={c.sub1}
              sub2={c.sub2}
              sub3={c.sub3}
              sub4={c.sub4}
              price={c.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GroupAbout;
