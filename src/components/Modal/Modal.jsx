import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Modal.scss";

import { setModalClose } from "../../redux/actions/modal";
import ModalFilter from "../ModalFilter/ModalFilter";
import ModalInfo from "../ModalInfo/ModalInfo";

function Modal({ data }) {
  const dispatch = useDispatch();

  const { state, type } = useSelector(state => state.modal);

  const handlerCloseModal = () => {
    dispatch(setModalClose(false, ""));
  };

  if(state){
    document.body.classList.add("hidden")
  }
  else{
    document.body.classList.remove("hidden")
  }


  return (
    <div className={state ? "modal modal--active" : "modal"} onClick={handlerCloseModal}>
      <div className="modal__content" onClick={e=>e.stopPropagation()}>
        {type === "filter" ? (
          <ModalFilter closeModal={handlerCloseModal} />
        ) : (
          <ModalInfo data={data} closeModal={handlerCloseModal} />
        )}
      </div>

    </div>
  );
}

export default Modal;
