import { Container } from 'components/Layout/Layout.styled';
import { Title } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Hello, this is your PhoneBook. It is designed to help your brain not
        remember numbers, but write them down. Create your own unique account
        and get the opportunity to record your contacts.
      </Title>
    </Container>
  );
}
