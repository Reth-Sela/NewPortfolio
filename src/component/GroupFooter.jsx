import mountain from "../assets/mountian.jpg";
import sea from "../assets/sea.jpg";
import { TagDesign } from "./TagDesign";

const GroupFooter = () => {
  return (
    <div className="block">
      <div className="px-8 bg-gray-500 flex">
      <div className="w-[420px] h-[285px] py-12">
        <h1 className="text-[20px] font-raleway font-bold pb-5 text-white">
          FOOTER
        </h1>
        <p className="font-raleway text-[15px] text-white pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          corrupti quo aliquam blanditiis nulla, dolor esse adipisci libero,
          voluptatem nam consectetur error provident molestiae natus amet.
          Maiores odio amet doloremque!
        </p>
        <p className="text-white text-[15px] font-raleway ">Powered by OGLA</p>
      </div>

      <div className=" px-5 w-[420px] h-[285px] py-12 block  ">
        <h1 className="text-[20px] font-raleway font-bold pb-5 text-white">
          BLOG POSTS
        </h1>
        <div className="flex px-5  border-b-2 border-white pb-5 my-[10px]">
          <img src={sea} alt="picture" className="w-12 h-12" />
          <p className="text-white font-raleway text-[15px] pl-5">
            Sea <br />
            Kep provin
          </p>
        </div>

        <div className="flex px-5 pt-2">
          <img src={mountain} alt="picture" className="w-12 h-12" />
          <p className="text-white font-raleway text-[15px] pl-5">
            Mountain <br />
            Kompot province
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="px-5 w-[420px] h-[285px] py-12 block">
        <h1 className="text-[20px] font-raleway font-bold pb-5 text-white">
          POPULAR TAGS
        </h1>
        <div className="flex flex-wrap gap-2 overflow-auto">
          <TagDesign text={"MeyNeang"} />
          <TagDesign text={"London"} />
          <TagDesign text={"New York"} />
          <TagDesign text={"Phnom Penh"} />
          <TagDesign text={"Reading"} />
          <TagDesign text={"Game"} />
          <TagDesign text={"Sport"} />
          <TagDesign text={"Avanture"} />
          <TagDesign text={"Champing"} />
          <TagDesign text={"Dog"} />
          <TagDesign text={"Monkey"} />
          <TagDesign text={"Mom"} />
          <TagDesign text={"Dad"} />
          <TagDesign text={"Travel"} />
        </div>
      </div>

     
    </div>

    <div className="w-full h-[60px] bg-black flex items-center justify-center " >
      <h1 className="text-white text-[15px] font-raleway ">POWERED BY OGLA</h1>
    </div>

    </div>
    
  );
};

export default GroupFooter;
