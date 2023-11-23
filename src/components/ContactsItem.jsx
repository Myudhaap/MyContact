import React from "react";
import ContactsItemImg from "./ContactsItemImg";
import ContactsItemBody from "./ContactsItemBody";
import ContactsItemDelete from "./ContactsItemDelete";

const ContactsItem = ({ contact: { imageUrl, id, name, tag }, onDelete }) => {
  return (
    <div className="list-item">
      <ContactsItemImg image={imageUrl} />
      <ContactsItemBody name={name} tag={tag} />
      <ContactsItemDelete id={id} onDelete={onDelete} />
    </div>
  );
};

export default ContactsItem;
