// import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import Container from '../Container';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    filtredContacts: [],
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps:', prevProps);
    // console.log('prevState:', prevState);
    // console.log('this.state.contacts', this.state.contacts);

    if (this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      this.setState({
        contacts: localStorageContacts,
      });
    }
  }

  handleState = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });

    // console.log('value', value);
  };

  filterContactsByName = e => {
    this.handleState(e);

    if (this.state.filter !== '') {
      const result = this.state.contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(this.state.filter.toLowerCase());
      });
      this.setState({ filteredContacts: result });
      return;
    }
    this.setState({ filteredContacts: [] });

    // console.log('state', this.state.filter);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  updateState = data => {
    this.setState({
      contacts: data,
    });
  };

  render() {
    return (
      <Container>
        <ContactForm
          updateState={this.updateState}
          handleChangeInState={this.handleChangeInState}
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h1>Contacts</h1>
        <Filter
          filterContactsByName={this.filterContactsByName}
          name="filter"
          value={this.state.filter}
        />
        <ContactsList
          filtredContacts={this.state.filtredContacts}
          contacts={
            this.state.filter !== ''
              ? this.state.filteredContacts
              : this.state.contacts
          }
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default PhoneBook;
