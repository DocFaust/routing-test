import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";
import Players from "./components/Players";
import Seasons from "./components/Seasons";
import App3 from "./components/App3";
import Summary from "./components/Summary";
import { FaVolleyballBall } from "react-icons/fa";

function App() {
  return (
    <div>
      <div>
        <Container>
          <Navbar bg="primary" variant="light" expand="sm">
            <Navbar.Brand as={Link} to="/">
              <FaVolleyballBall /> Volleyballbuchung
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavItem eventkey={1} href="/players">
                  <Nav.Link as={Link} to="/players">
                    Spieler
                  </Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/season">
                  <Nav.Link as={Link} to="/season">
                    Saison
                  </Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/app3">
                  <Nav.Link as={Link} to="/app3">
                    App3
                  </Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      <div>
        <Container>
          <Switch>
            <Route exact path="/" component={Summary} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/season" component={Seasons} />
            <Route exact path="/app3" component={App3} />
          </Switch>
        </Container>
      </div>
    </div>
  );
}

export default App;
