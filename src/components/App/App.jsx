import initialContact from "./contact.json";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContact] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContact;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContact((prevContact) => {
      const updatedContacts = [...prevContact, newContact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const deleteContact = (contactId) => {
    setContact((prevContact) => {
      const updatedContacts = prevContact.filter(
        (contact) => contact.id !== contactId
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContact} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
