import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="header-section">
      <Container>
        <h1 className="app-title">Event Manager</h1>
        <p className="app-subtitle">Simple event management</p>
      </Container>
    </div>
  );
};

export default Header;