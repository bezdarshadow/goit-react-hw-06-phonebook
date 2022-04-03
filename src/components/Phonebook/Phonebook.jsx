import { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';

import ContactFilter from './ContactFilter';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

import styles from './phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(getAllContacts, shallowEqual)
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const addContact = info => {
    if (contacts.find(contact => contact.name === info.name)) {
          alert(`${info.name} is already in contacts`);
          return;
    }
    dispatch(actions.add(info)) 
  }
  const removeContact = id => dispatch(actions.remove(id))
  const changeFilter = (event => {
    const { value } = event.target;
    setFilter(value)
  });
  const filterContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(item => item.name.toLowerCase().includes(normalizeFilter));
    return filteredContacts; 
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Phonebook</h2>
      <ContactForm onChange={addContact} />
      <h2 className={styles.title}>Contacts</h2>
      <ContactFilter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContacts()} onDelete={removeContact} />
    </div>
  );
};

export default Phonebook;
