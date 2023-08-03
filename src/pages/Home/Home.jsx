import { Container } from 'components/Layout/Layout.styled';
import { Title } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
