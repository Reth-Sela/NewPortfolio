import Link from "./Link"
import design from '../assets/design.png'
import photo from '../assets/photo.png'
import art from '../assets/art.png'


const Header = () => {
  return (
      <div className="pl-[20px]">
        <h1 className="text-[36px] font-raleway font-bold pt-[4px]">MY PORFOLIO</h1>
        <div className="flex items-center pt-[20px] gap-[5px]">
            <p className="text-[15px] font-raleway pr-[20px]">filter: </p>
            <Link text={'ALL'} className={"bg-black text-white text-center rounded-none"} />
            <Link text={'DESIGN'} imgSrc={design} className={"rounded-none"}/>
            <Link text={'PHOTOS'} imgSrc={photo}className={"rounded-none"}/>
            <Link text={'ART'} imgSrc={art}className={"rounded-none"}/>

        </div>
        
      </div>
  )
}

export default Header