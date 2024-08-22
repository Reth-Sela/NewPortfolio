const Profile = (props) => {
  const { name, href, imgSrc, imgAlt, text } = props;
  return (
    <div className="block">
      <div className="flex justify-center sm:justify-start sm:pl-4 sm:pt-1">
        <a href={href}>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt}
              className="w-[125px] h-[125px] object-cover mt-4 rounded-[10px]"
            />
          )}
        </a>
      </div>

      <div className="flex justify-center  pt-4 sm:justify-start sm:pl-[30px] sm:pt-4">
        <h4 className="text-[20px] font-raleway font-[400px] ">{name}</h4>
      </div>
      <div className="flex justify-center pt-[18px] pl-4 sm:justify-start sm:pt-[18px] sm:pl-4 ">
        <p className="text-[15px] font-raleway text-[#757575]  transition-transform transform active:scale-105">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Profile;
