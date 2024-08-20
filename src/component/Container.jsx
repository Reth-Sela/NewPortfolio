import GroubCard from "./GroubCard"
import GroupAbout from "./GroupAbout"
import GroupContact from "./GroupContact"
import GroupFooter from "./GroupFooter"
import Header from "./Header"
import PageLink from "./PageLink"


const Container = () => {
  return (
   <div className="ml-[300px] h-[100vh] overflow-y-auto">
        <Header/>
        <GroubCard/>
        <PageLink/>
       {/*about page  */}
       <GroupAbout/>
       {/* contact page */}
       <GroupContact/>
       <GroupFooter/>

   </div>
  )
}

export default Container