import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Socio } from "@/interfaces/interfaces";
import { initialStateSocio } from "@/estadosIniciales/Socio";
import { registrarSocio } from "@/firebase/promesas";

//aquí antes estaba la interfaz pero se movio y ahora se IMPORTO

//aquí antes estaba el initialState pero se movio y ahora se IMPORTO

export const rSocio = () => {
  const [socio, setSocio] = useState<Socio>(initialStateSocio);

  const handleSocio = (name: string, value: string | boolean) => {
    setSocio({ ...socio, [name]: value });
  };

  // const handleRegistrar = (event: React.FormEvent) => {
  //   event.preventDefault();

  //   const { nombre, correo, contrasenia, telefono, terminos } = socio;
  //   if (!nombre || !correo || !contrasenia || !telefono || !terminos) {
  //     alert("Por favor, complete todos los campos obligatorios.");
  //     return;
  //   }

  //   registrarSocio(socio)
  //     .then(() => {
  //       alert("Registrado con éxito!");
  //     })
  //     .catch((e) => {
  //       alert("Algo ocurrió");
  //       console.log(e);
  //     });
  // };

  const handleRegistrar = () => {
    const { nombre, correo, contrasenia, telefono, terminos } = socio;
    if (!nombre || !correo || !contrasenia || !telefono || !terminos) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    registrarSocio(socio)
      .then(() => {
        alert("Registrado con éxito!");
        window.location.reload();
      })
      .catch((e) => {
        alert("Algo ocurrió");
        console.log(e);
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <h2>¡Hazte socio/a de NotCo!</h2>
              <p>[Formulario de inscripción]</p>
              <p>*Todos los campos son requeridos</p>
              <Form.Group>
                <Form.Label>Nombre*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  name="nombre"
                  required
                  onChange={(e) => {
                    handleSocio(e.currentTarget.name, e.currentTarget.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Correo*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo"
                  name="correo"
                  required
                  onChange={(e) => {
                    handleSocio(e.currentTarget.name, e.currentTarget.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Contraseña*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  name="contrasenia"
                  required
                  onChange={(e) => {
                    handleSocio(e.currentTarget.name, e.currentTarget.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Teléfono*</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Ingresa tu teléfono"
                  name="telefono"
                  onChange={(e) => {
                    handleSocio(e.currentTarget.name, e.currentTarget.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  name="fechaNacimiento"
                  onChange={(e) => {
                    handleSocio(e.currentTarget.name, e.currentTarget.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Género</Form.Label>
                <Form.Control
                  as="select"
                  name="genero"
                  onChange={(e) => {
                    handleSocio(e.currentTarget.name, e.currentTarget.value);
                  }}
                  value={socio.genero}
                >
                  <option value=""></option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="No especifica">No especifica</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Biografía</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Escribe una breve descripción de ti"
                  name="biografia"
                  onChange={(e) => {
                    handleSocio(e.currentTarget.name, e.currentTarget.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Check
                  type="checkbox"
                  name="terminos"
                  label="Acepta términos y condiciones*"
                  checked={socio.terminos}
                  required
                  onChange={(e) => {
                    handleSocio(e.currentTarget.name, e.currentTarget.checked);
                  }}
                />
              </Form.Group>

              <Button type="button" variant="primary" onClick={handleRegistrar}>
                Registrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default rSocio;
