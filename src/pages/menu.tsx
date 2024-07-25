import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export const menu = () => {
  const router = useRouter();
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item
                action
                onClick={() => router.push("/menu/rUsuario")}
              >
                Registrar nuevo usuario
              </ListGroup.Item>

              <ListGroup.Item
                action
                onClick={() => router.push("/menu/rSocio")}
              >
                Registrar nuevo socio NotCo
              </ListGroup.Item>

              <ListGroup.Item
                action
                onClick={() => router.push("/menu/registros/tablaSocios")}
              >
                Visualizar registros de socios NotCo
              </ListGroup.Item>

              <ListGroup.Item action onClick={() => router.push("/")}>
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
