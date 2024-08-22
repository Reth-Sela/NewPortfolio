import Container from "./Container";
import GroubProfile from "./GroubProfile";

const Main = () => {
  return (
    <div className="block  w-[100vw] h-screen md:flex-row">
      <div className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] sm:fixed sm:left-0 sm:top-0 sm:h-auto md:h-[100vh] lg:h-[100vh]  border-r-2 border-gray-200 bg-white move-from-left sm:overflow-y-auto">
        <GroubProfile />
      </div>
      <div className="flex-1 ">
        <Container />
      </div>
    </div>
  );
};

export default Main;
