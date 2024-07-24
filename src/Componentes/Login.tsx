import { verificarUsuario } from "@/firebase/promesas";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const eUsuario = await verificarUsuario(username, password);

      if (eUsuario) {
        console.log("Usuario encontrado.");
        router.push("/menu");
      } else {
        console.log("Nombre de usuario o contraseña incorrectos");
        alert("Nombre de usuario o contraseña invalidos");
      }
    } catch {
      console.log("Error");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Iniciar sesion</h2>
            <Form>
              <Form.Group>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tú nombre de usuario"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tú contraseña"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </Form.Group>

              <Button variant="primary" type="button" onClick={handleLogin}>
                Iniciar sesión
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
