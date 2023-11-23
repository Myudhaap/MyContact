import React from "react";

const ContactsItemBody = ({ name, tag }) => {
  return (
    <div className="item-body">
      <h2 className="item-body__name">{name}</h2>
      <p className="item-body__tag">@{tag}</p>
    </div>
  );
};

export default ContactsItemBody;
