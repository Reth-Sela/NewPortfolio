import GroubCard from "./GroubCard"
import GroupAbout from "./GroupAbout"
import GroupContact from "./GroupContact"
import GroupFooter from "./GroupFooter"
import Header from "./Header"
import PageLink from "./PageLink"


const Container = () => {
  return (
    <div id="scroll-container" className="sm:ml-0 md:ml-[250px] lg:ml-[300px]  h-[100vh] overflow-y-auto">
    <div id="header">
        <Header/>
        <GroubCard/>
        <PageLink/>
    </div>


       
       <div id="about">
        <GroupAbout/>
       </div>
       {/*about page  */}
       
       <div id="contact">
       <GroupContact/>
       </div>
       {/* contact page */}
      
       <GroupFooter/>

   </div>
  )
}

export default Container