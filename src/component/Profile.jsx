const Profile = (props) => {
  const { name, href, imgSrc, imgAlt, text } = props;
  return (
    <div className="block">
      <a href={href} className="block pl-[16px] pt-[4px]">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-[125px] h-[125px] object-cover mt-4 rounded-[10px]"
          />
        )}
      </a>

      <h4 className="text-[20px] font-raleway font-[400px] pt-[30px] pl-[16px]">
        {name}
      </h4>
      <p className="text-[15px] font-raleway text-[#757575] pt-[18px] pl-[16px] transition-transform transform active:scale-105">
        {text}
      </p>
    </div>
  );
};

export default Profile;
