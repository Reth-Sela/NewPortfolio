

const ContactComponent = ({imgScr, text,background}) => {
  return (
    <div className={`grid   place-items-center w-[390px] h-[100px] ${background}`} >
        <img src={imgScr} alt="icon" className="w-[50px] h-[50px]"/>
        <p>{text}</p>
    </div>
  )
}

export default ContactComponent