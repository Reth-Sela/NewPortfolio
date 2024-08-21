import download from "../assets/download.png";
import Alink from "./Alink";

const Download = () => {
  return (
    <div>
      <Alink
        imgSrc={download}
        text={"Download Resume"}
        className={"bg-gray-500"}
      />
    </div>
  );
};

export default Download;
