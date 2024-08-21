import mountain from "../assets/mountian.jpg";
import sea from "../assets/sea.jpg";
import { TagDesign } from "./TagDesign";

const GroupFooter = () => {
  return (
    <div className="block">
      <div className="bg-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 sm:p-8">
        {/* Footer Information */}
        <div className="w-full h-full">
          <h1 className="text-[18px] md:text-[20px] font-raleway font-bold pb-4 md:pb-5 text-white">
            FOOTER
          </h1>
          <p className="font-raleway text-[14px] md:text-[15px] text-white pb-4 md:pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            corrupti quo aliquam blanditiis nulla, dolor esse adipisci libero,
            voluptatem nam consectetur error provident molestiae natus amet.
            Maiores odio amet doloremque!
          </p>
          <p className="text-white text-[14px] md:text-[15px] font-raleway">
            Powered by OGLA
          </p>
        </div>

        {/* Blog Posts */}
        <div className="w-full h-full">
          <h1 className="text-[18px] md:text-[20px] font-raleway font-bold pb-4 md:pb-5 text-white">
            BLOG POSTS
          </h1>
          <div className="flex border-b-2 border-white pb-4 md:pb-5 my-[8px] md:my-[10px]">
            <img src={sea} alt="picture" className="w-10 h-10 md:w-12 md:h-12" />
            <p className="text-white font-raleway text-[14px] md:text-[15px] pl-4 md:pl-5">
              Sea <br />
              Kep provin
            </p>
          </div>
          <div className="flex pt-2">
            <img src={mountain} alt="picture" className="w-10 h-10 md:w-12 md:h-12" />
            <p className="text-white font-raleway text-[14px] md:text-[15px] pl-4 md:pl-5">
              Mountain <br />
              Kompot province
            </p>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="w-full h-full">
          <h1 className="text-[18px] md:text-[20px] font-raleway font-bold pb-4 md:pb-5 text-white">
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
            <TagDesign text={"Adventure"} />
            <TagDesign text={"Camping"} />
            <TagDesign text={"Dog"} />
            <TagDesign text={"Monkey"} />
            <TagDesign text={"Mom"} />
            <TagDesign text={"Dad"} />
            <TagDesign text={"Travel"} />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full h-[50px] md:h-[60px] bg-black flex items-center justify-center">
        <h1 className="text-white text-[14px] md:text-[15px] font-raleway">
          POWERED BY OGLA
        </h1>
      </div>
    </div>
  );
};

export default GroupFooter;
