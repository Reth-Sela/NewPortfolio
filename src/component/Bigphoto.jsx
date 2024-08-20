

const Bigphoto = ({imgScr,href}) => {
  return (
    <div className="w-[580px] h-[365px] shadow-lg overflow-hidden rounded-[10px]">
      <a href={href}>
         <img src={imgScr} alt="picture" className="w-full h-full object-cover "/>
      </a>
        
       

    </div>
  )
}

export default Bigphoto