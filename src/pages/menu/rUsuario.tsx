import { registrarUsuario } from "@/firebase/promesas";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const rUsuario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegistrar = async () => {
    try {
      await registrarUsuario({ username, password });
      alert("Usuario registrado");
      router.push("/menu");
    } catch (error) {
      console.log("Error al registrar el usuario", error);
      alert("Error al registrar el usuario.");
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa nombre de usuario"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </Form.Group>

              <Button variant="primary" type="button" onClick={handleRegistrar}>
                Registrar Usuario
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default rUsuario;
