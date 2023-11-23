import React from "react";

const ContactsItemImg = ({ image }) => {
  return (
    <div className="item-img">
      <img className="item-img__img" src={image} alt="Contact image" />
    </div>
  );
};

export default ContactsItemImg;
