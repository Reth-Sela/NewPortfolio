

const ContactComponent = ({imgScr, text,background}) => {
  return (
    <div className={`grid   place-items-center w-[390px] h-[100px] text-[12px] sm:text-base md:text-lg lg:text-xl xl:text-2xl ${background}`} >
        <img src={imgScr} alt="icon" className="w-[50px] h-[50px]"/>
        <p className="px-5">{text}</p>
    </div>
  )
}

export default ContactComponent