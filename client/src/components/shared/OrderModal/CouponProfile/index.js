import React from "react";
import {ModalProfileLayout as ProfileLayout} from "../../../";

function CouponProfile({name, description}) {
  return (
    <ProfileLayout name={name}>
      <p className="text-center">{description}</p>
    </ProfileLayout>
  );
}

export default CouponProfile;
