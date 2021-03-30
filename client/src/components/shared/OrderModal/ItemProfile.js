import React from "react";
import {useDispatch} from "react-redux";
import {allActions} from "../../../store/actions";
import ProductRadioOptions from "./ProductRadioOptions";
import ProfileLayout from "../../layouts/OrderModal/Profile";

function ItemProfile({name, content}) {
  const dispatch = useDispatch();
  const formattedContent = Array.isArray(content) ? (
    content.map(field => (
      <ProductRadioOptions key={field.field} type={field.field} options={field.options} />
    ))
  ) : (
    <p className="text-center">{content}</p>
  );

  return (
    <ProfileLayout name={name} onClick={() => dispatch(allActions.modal.closeModal({}))}>
      {formattedContent}
    </ProfileLayout>
  );
}

export default ItemProfile;
