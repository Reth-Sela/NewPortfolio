
import { Link } from "react-scroll";

const Alink = (props) => {
  const { imgSrc, imgAlt, text, className ,To} = props;

  return (
    <Link
      activeClass="active"
      to={To}
      spy={true}
      smooth={true}
      duration={500} 
      containerId="scroll-container"
      className={`flex items-center p-[16px] rounded-lg shadow-lg transition-transform transform hover:scale-95 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {imgSrc && <img src={imgSrc} alt={imgAlt} className="w-6 h-6" />}
      {text && (
        <span
          className={`leading-none ${
            imgSrc ? "pl-[20px]" : "text-center w-full"
          }`}
        >
          {text}
        </span>
      )}
    </Link>
  );
};
export default Alink;
