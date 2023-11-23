import React from "react";

const ContactsItemDelete = ({ onDelete, id }) => {
  return (
    <div className="item-delete">
      <span
        className="item-delete__delete"
        onClick={() => {
          return onDelete(id);
        }}
      >
        X
      </span>
    </div>
  );
};

export default ContactsItemDelete;
