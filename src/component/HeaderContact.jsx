import ContactComponent from "./ContactComponent";
import email from '../assets/email.png'
import location from '../assets/location.png'
import call from '../assets/call.png'


const HeaderContact = () => {
  return (
    <div className="bg-gray-400 mt-[20px] border border-b-2 border-white pb-[50px]">
      
        <h4 className=" font-raleway text-[20px] font-bold p-5">CONTACT</h4>
      
      <div className='flex mt-[10px] gap-2 mx-3'>
        <ContactComponent imgScr={email} text={'selareth7@gmail.com'} background={'bg-gray-500 text-white'}/>
        <ContactComponent imgScr={location} text={'Charmka dong PP'}  background={'bg-blue-500 text-white'}/>
        <ContactComponent imgScr={call} text={'0967898031'} background={'bg-gray-500 text-white'}/>
      </div>
    </div>
  );
};

export default HeaderContact;
