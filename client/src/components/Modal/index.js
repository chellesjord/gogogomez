import React from "react";
import './style.css'

const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, category, index } = currentPhoto;
  
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <img
            src={require(`../../assets/food_gallery/${index}.jpg`)}
            alt="current category"
          />
          <div className="modalDescription">
            <h3 className="modalTitle">{name}</h3>
            <p>{description}</p>
            <button type="button" onClick={onClose}>
                Close this modal
            </button>
          </div>
        </div>
      </div>
    );
};

export default Modal;