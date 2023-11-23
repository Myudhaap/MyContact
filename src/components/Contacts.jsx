import React from "react";
import ContactsList from "./ContactsList";
import { getData } from "../utils/data";
import ContactsInput from "./ContactsInput";

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: contacts,
    });
    console.log(this.state.contacts);
  }

  onAddHandler(payload) {
    const newContacts = {
      id: +new Date(),
      ...payload,
      imageUrl: "/images/rfajri27.jpeg",
    };

    console.log(newContacts);
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContacts],
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="contacts contacts--card">
          <h2 className="contacts__title">Tambah Kontak</h2>
          <ContactsInput onAdd={this.onAddHandler} />
        </div>
        <div className="contacts contacts--card">
          <h2 className="contacts__title">Daftar Kontak</h2>
          <ContactsList
            contacts={this.state.contacts}
            onDelete={this.onDeleteHandler}
          />
        </div>
      </div>
    );
  }
}

export default Contacts;
