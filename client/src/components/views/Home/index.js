import React from "react";
import {ContentList, ContentLayout, MainLayout} from "../..";
import CouponList from "./CouponList";

function Home({coupons}) {
  // Homepage View
  return (
    <MainLayout>
      <ContentLayout name="Home">
        <CouponList list={coupons} />
        <ContentList content={{name: "HOME TEST"}} />
        <ContentList content={{name: "HOME TEST"}} />
        <ContentList content={{name: "HOME TEST"}} />
        <ContentList content={{name: "HOME TEST"}} />
        <ContentList content={{name: "HOME TEST"}} />
      </ContentLayout>
    </MainLayout>
  );
}

export default Home;
