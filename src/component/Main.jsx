
import Container from "./container"
import GroubProfile from "./GroubProfile"


const Main = () => {
  return (
    <div className="flex bg-gray-200 w-[100vw] h-screen overflow-hidden">
        <GroubProfile/>
        <Container/>
    </div>
  )
}

export default Main