import Profile from "./Profile";
import selapic from "../assets/sela.jpg";
import GroupLink from "./GroupLink";
import "../component/animation.css";

const GroubProfile = () => {
  return (
    <div
      id="groub-profile"
      className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] fixed left-0 top-0 h-[100vh] border-r-2 border-gray-200 block move-from-left bg-white"
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
