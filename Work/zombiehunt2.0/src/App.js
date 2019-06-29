import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import "./index.css";
import NameForm from "./render/Nameform.js";
import BoardAndGrid from "./render/boardAndGrid.js";
import Navtop from "./render/navtop.js";
import Navbottom from "./render/navbottom.js";
import GameControls from "./render/gameControls.js";

class App extends Component {
  render() {
    return (
      <Container className="App-container">
        <Row>
          <Navtop />
        </Row>
        <Row>
          <Col>
            <NameForm />
          </Col>
          <Col>
            <BoardAndGrid />
          </Col>
        </Row>
        <Row>
          <GameControls />
        </Row>
        <Row>
          <Navbottom />
        </Row>
      </Container>
    );
  }
}

export default App;
