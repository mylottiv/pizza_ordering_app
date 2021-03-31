import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ModalOrderFormContext} from "../../";
import ItemForm from "./ItemForm";
import submitHandlerFactory from "./submitHandlerFactory";

function OrderModal(props) {
  const [retrievedData, setRetrievedData] = useState();
  // const storeData = useSelector(state => state.storeData);
  const {open, coupon} = useSelector(state => state.modal);
  const {openCoupon, openCouponName, openCouponSlotIndex, selectedItem} = useSelector(
    state => state.orderWizard
  );
  console.log("Reducer Selected Item", selectedItem);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3020/api/product/${selectedItem.productID}`,
        {
          method: "GET",
        }
      );
      const productFields = await response.json();
      console.log("async test orderModal", productFields);
      setRetrievedData(productFields);
    };
    selectedItem.productID > 1 && fetchData();
  }, [selectedItem]);
  const dispatch = useDispatch();
  console.log("Was Data Fetched?", retrievedData);

  // Coupon info stored in selectedItem while Product info must be fetched from storeData
  // const itemGetter = () =>
  //   coupon
  //     ? selectedItem
  //     : storeData.menu[selectedItem.type][selectedItem.categoryIndex].products[
  //         selectedItem.productIndex
  //       ];

  // If product is opened from inside a coupon, reference for submit handler will be different
  const couponRef =
    !coupon && openCoupon
      ? {
          couponName: openCouponName,
          open: openCoupon,
          couponSlotIndex: openCouponSlotIndex,
        }
      : {couponName: "", open: false, couponSlotIndex: -1};

  return (
    <>
      {open && (
        <div className="container ml-8 p-5 my-8 z-10 top-0 left-0 h-11/12 fixed">
          <div className="flex-1 flex-row p-5 rounded bg-blue-100 h-full overflow-y-scroll">
            <ModalOrderFormContext>
              <ItemForm
                // item={retrievedData ? retrievedData : debugData}
                item={retrievedData ? retrievedData : false}
                onSubmit={submitHandlerFactory(dispatch, couponRef)}
              />
            </ModalOrderFormContext>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderModal;
