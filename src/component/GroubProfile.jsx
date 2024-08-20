import Profile from "./Profile";
import selapic from "../assets/sela.jpg";
import GroupLink from "./GroupLink";
import "../component/animation.css";

import React, { useRef } from 'react';


  

const GroubProfile = () => {
  const profileRef = useRef(null);
  const scrollToProfile = () => {
    if (profileRef.current) {
      profileRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div  id="groub-profile"
    className="w-[300px] h-[100vh] fixed left-0 top-0   border-r-2 border-gray-200 block move-from-left bg-white">
      <Profile
        imgSrc={selapic}
        href={selapic}
        imgAlt={"picture"}
        name={"OGLA"}
        text={"CREATE BY OGLA"}
      />

      <GroupLink scrollToProfile={scrollToProfile}/>
    </div>
  );
};

export default GroubProfile;
