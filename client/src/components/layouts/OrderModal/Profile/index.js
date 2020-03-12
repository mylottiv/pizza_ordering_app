import React from "react";
import ProfileImage from "./ProfileImage";
import Header from "./Header";

function Profile({name, children}) {
  return (
    <div className="flex flex-row">
      <ProfileImage />
      <div className="flex-1 flex-col">
        <Header name={name} />
        {children}
      </div>
    </div>
  );
}

export default Profile;
