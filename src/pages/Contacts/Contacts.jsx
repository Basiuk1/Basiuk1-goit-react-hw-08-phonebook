import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/ContactFilter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
// import { selectError, selectIsLoading } from 'redux/contacts/selector';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactsLoader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/operations';
import { Container } from 'components/GlobalStyle/Container.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && !error && <ContactsLoader />}
    </Container>
  );
}
