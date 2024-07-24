import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export const menu = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item action href="/menu/rUsuario">
                Registrar nuevo usuario
              </ListGroup.Item>

              <ListGroup.Item action href="/menu/rSocio">
                Registrar nuevo socio
              </ListGroup.Item>

              <ListGroup.Item action href="/menu/tablaSocios">
                Visualizar registros de socios
              </ListGroup.Item>

              <ListGroup.Item action href="/">
                Salir
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default menu;
