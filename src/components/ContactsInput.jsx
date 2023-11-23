import React from "react";

class ContactsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.props.onAdd(this.state);
  }

  render() {
    return (
      <div className="contacts-input">
        <form
          className="input-form"
          id="input-form"
          onSubmit={this.onSubmitHandler}
        >
          <input
            className="input-form__input"
            type="text"
            name="name"
            id="name"
            value={this.state.nama}
            placeholder="Name..."
            onChange={this.onChangeHandler}
          />
          <input
            className="input-form__input"
            type="text"
            name="tag"
            id="tag"
            value={this.state.tag}
            placeholder="Tag..."
            onChange={this.onChangeHandler}
          />
          <button className="input-form__button" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default ContactsInput;
