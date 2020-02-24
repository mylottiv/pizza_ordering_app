import React from "react";
import {Category, ContentLayout, MainLayout} from "../..";
import CouponList from "./CouponList";

function Home({coupons}) {
  // Homepage View
  return (
    <MainLayout>
      <ContentLayout name="Home">
        <CouponList content={coupons} />
        <Category content={{name: "HOME TEST"}} />
        <Category content={{name: "HOME TEST"}} />
        <Category content={{name: "HOME TEST"}} />
        <Category content={{name: "HOME TEST"}} />
        <Category content={{name: "HOME TEST"}} />
      </ContentLayout>
    </MainLayout>
  );
}

export default Home;
