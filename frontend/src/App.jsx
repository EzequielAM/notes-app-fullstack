import { Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import NotesPage from "./pages/NotesPage.jsx";
import ArchivedPage from "./pages/ArchivedPage.jsx";

export default function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Ensolvers Notes
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Active
            </Nav.Link>
            <Nav.Link as={Link} to="/archived">
              Archived
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/archived" element={<ArchivedPage />} />
        </Routes>
      </Container>
    </>
  );
}
