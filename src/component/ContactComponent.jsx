

const ContactComponent = ({imgScr, text,background}) => {
  return (
    <div className={`grid place-items-center h-[80px] px-[10px] sm:w-[390px] sm:h-[100px] text-[12px] sm:text-base md:text-lg lg:text-xl xl:text-2xl  ${background}`}>
  <img 
    src={imgScr} 
    alt="icon" 
    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]" 
  />
  <p className="px-5 text-center">{text}</p>
</div>

  )
}

export default ContactComponent