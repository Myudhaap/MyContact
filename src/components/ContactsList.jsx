import React from "react";
import ContactsItem from "./ContactsItem";

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div className="contacts-list">
      {contacts?.map((contact) => (
        <ContactsItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactsList;
