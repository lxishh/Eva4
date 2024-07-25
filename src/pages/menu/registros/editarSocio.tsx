import { initialStateSocio } from "@/estadosIniciales/Socio";
import { modificarSocio, obtenerSocio } from "@/firebase/promesas";
import { Socio } from "@/interfaces/interfaces";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export const editarSocio = () => {
  const [socio, setSocio] = useState<Socio>(initialStateSocio);
  const handleSocio = (name: string, value: string) => {
    setSocio({ ...socio, [name]: value });
  };

  const router = useRouter();
  useEffect(() => {
    const key = router.query.key;
    if (typeof key === "string") {
      obtenerSocio(key).then((p) => {
        if (p != undefined) {
          setSocio(p);
        } else {
          router.push("/menu/registros/tablaSocios");
        }
      });
    } else {
      router.push("/menu/registros/tablaSocios");
    }
  }, []);

  const handleModificar = () => {
    modificarSocio(socio)
      .then(() => {
        alert("Se modifico con exito");
        router.push("/menu/registros/tablaSocios");
      })
      .catch((e) => {
        console.log(e);
        alert("Algo ocurrio");
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Nombre*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={socio.nombre}
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
                  value={socio.correo}
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
                  value={socio.contrasenia}
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
                  value={socio.telefono}
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
                  value={socio.fechaNacimiento}
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
                  value={socio.biografia}
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
                    handleSocio(e.currentTarget.name, e.currentTarget.value);
                  }}
                />
              </Form.Group>

              <Button type="button" variant="primary" onClick={handleModificar}>
                Modificar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default editarSocio;
