import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Modal.scss";

import { setModalClose } from "../../redux/actions/modal";
import ModalFilter from "../ModalFilter/ModalFilter";
import ModalInfo from "../ModalInfo/ModalInfo";

function Modal({ data }) {
  const dispatch = useDispatch();

  // const testState = useSelector(test => console.log(test));
  const { state, type } = useSelector(state => state.modal);

  const handlerCloseModal = () => {
    dispatch(setModalClose(false, ""));
  };

  return (
    <div className={state ? "modal modal--active" : "modal"}>
      {type === "filter" ? (
        <ModalFilter closeModal={handlerCloseModal} />
      ) : (
        <ModalInfo data={data} closeModal={handlerCloseModal} />
      )}

      <div className="modal__overside" onClick={handlerCloseModal}></div>
    </div>
  );
}

export default Modal;
