import React from "react";
import { nanoid } from 'nanoid'
import './App.css';
import contacts from './contacts.json';
import ContactList from './components/ContactList/ContactList';
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

class App extends React.Component {
  state = {
    contacts: contacts,
    filter: '',
  };
  
  addcontact = (contact) => {
    const { name } = contact;
    const filterName = this.state.contacts.find(contact => contact.name === name);
    filterName ? alert(`${name} is already in contacts!`) :
      this.setState(preState => ({
        contacts: [...preState.contacts, { id: nanoid(), ...contact }]
      }))
  };

  deleteContact = (nameID) => {
    this.setState(preState => ({
      contacts: preState.contacts.filter(name => name.id !== nameID)
    }))
  };

  handleChangeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  getVisibledContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state; 
    const visibledContacts = this.getVisibledContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addcontact}/>
        
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.handleChangeFilter} />
        <ContactList
          contacts={visibledContacts}
          onDeleteContact={this.deleteContact} />
      </div>
    )
  }
}

export default App;
