import React, { Component } from "react";

import "./AddressBook.css";
import Card from "./Card";

class AddressBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          name: "Jane Smith",
          initials: "JS",
          favorite: true,
          phone: "212-111-1234",
          email: "jane@email.com",
        },
        {
          name: "Sarah Carter",
          initials: "SN",
          favorite: false,
          phone: "212-222-5323",
          email: "sarah@email.com",
        },
        {
          name: "Mike Pearson",
          initials: "MP",
          favorite: false,
          phone: "212-333-1212",
          email: "mike@email.com",
        },
      ],
    };

    this.handleFavoriteToggle = this.handleFavoriteToggle.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    //lifecycle method that tracks changes to state and keep localStorage up to date
    const prevStateString = JSON.stringify(prevState.contacts);
    const updatedStateString = JSON.stringify(this.state.contacts);

    if (prevStateString !== updatedStateString) {
      console.log("Save This:", updatedStateString);
      localStorage.setItem("contacts", updatedStateString);
    }
  }

  componentDidMount() {
    //lifecycle method which checks user for existing localStorage data and sets state to their previous settings
    const savedStateFromLocalStorage = localStorage.getItem("contacts");

    if (savedStateFromLocalStorage) {
      this.setState({
        contacts: JSON.parse(savedStateFromLocalStorage),
      });
    }
  }

  handleFavoriteToggle(contactIndex) {
    const newContactsState = [...this.state.contacts]; //copies the current state of contacts into a new variable

    newContactsState[contactIndex] = {
      //updates favorite key of currently selected item
      ...newContactsState[contactIndex],
      favorite: !newContactsState[contactIndex].favorite,
    };

    this.setState({
      //sets state of contacts to copied array
      contacts: newContactsState,
    });
  }

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h3>Address Book</h3>
        {!contacts.length && <p>No contacts!</p>}

        {contacts.map((contact, index) => {
          return (
            <Card
              contact={contact}
              handleFavoriteToggle={this.handleFavoriteToggle}
              index={index}
              key={index}
            />
          );
        })}
      </>
    );
  }
}

export default AddressBook;
