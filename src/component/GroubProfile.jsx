import Profile from "./Profile";
import selapic from "../assets/sela.jpg";
import GroupLink from "./GroupLink";
import "../component/animation.css";

const GroubProfile = () => {
  return (
    <div
  id="groub-profile"
  className="w-full sm:fixed sm:w-[200px] md:w-[250px] lg:w-[300px]  border-r-2 border-gray-200 bg-white move-from-left sm:overflow-y-scroll"
>
 

  

      <Profile
        imgSrc={selapic}
        href={selapic}
        imgAlt={"picture"}
        name={"OGLA"}
        text={"CREATE BY OGLA"}
      />
      <GroupLink />
    </div>
  );
};

export default GroubProfile;
