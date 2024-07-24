import Link from "next/link";
import React from "react";
import { Container, Button, Form } from "react-bootstrap";

export const Login = () => {
  return (
    <>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tú nombre de usuario"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tú contraseña" />
          </Form.Group>

          <Button variant="primary" type="button">
            Iniciar sesión
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
