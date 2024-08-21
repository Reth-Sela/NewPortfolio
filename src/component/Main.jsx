
import Container from "./Container"
import GroubProfile from "./GroubProfile"


const Main = () => {
  return (
    <div className="flex bg-gray-200 w-[100vw] h-screen overflow-y-auto  flex-col md:flex-row">
        <GroubProfile/>
        <Container/>
    </div>
  )
}

export default Main