const Card = ({href,imgSrc,title,text}) => {
    return (
      <div className="lg:w-[390px] md:w-[340px] h-auto bg-white rounded-lg shadow-lg overflow-hidden my-4">
        <a
          href={href}
          className="block"
        >
          <img
            src={imgSrc}
            alt='picture'
            className="w-full h-[250px] object-cover"
          />
        </a>
        <div className="p-4">
          <h1 className="text-2xl font-raleway mb-2">{title}</h1>
          <p className="text-gray-600 text-base font-raleway">
           {text}
          </p>
        </div>
      </div>
    );
  };
  
  export default Card;
  