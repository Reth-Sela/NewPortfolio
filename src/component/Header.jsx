import Alink from "./Alink";
import design from "../assets/design.png";
import photo from "../assets/photo.png";
import art from "../assets/art.png";

const Header = () => {
  return (
    <div className="pl-[20px]">
      <h1 className="text-[36px] font-raleway font-bold pt-[4px]">
        MY PORFOLIO
      </h1>
      <div className="flex items-center pt-[20px] gap-[5px]">
        <p className="text-[15px] font-raleway pr-[20px]">filter: </p>
        <Alink
          text={"ALL"}
          className={"bg-black text-white text-center rounded-none"}
        />
        <Alink text={"DESIGN"} imgSrc={design} className={"rounded-none"} />
        <Alink text={"PHOTOS"} imgSrc={photo} className={"rounded-none hidden md:flex"} />
        <Alink text={"ART"} imgSrc={art} className={"rounded-none hidden md:flex"} />
      </div>
    </div>
  );
};

export default Header;
