import { eliminarSocio, obtenerSocios } from "@/firebase/promesas";
import { Socio } from "@/interfaces/interfaces";
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

export const tablaSocios = () => {
  const [socios, setSocios] = useState<Socio[]>([]);
  useEffect(() => {
    obtenerSocios()
      .then((socios) => {
        console.log(socios);
        setSocios(socios);
      })
      .catch((e) => {
        alert("No se logran cargar los datos");
        console.log(e);
      });
  }, []);

  const handleEliminar = async (key: string) => {
    try {
      await eliminarSocio(key);
      // Eliminar la persona de la lista localmente para evitar una nueva llamada a la base de datos
      setSocios(socios.filter((socio) => socio.key !== key));
    } catch (error) {
      console.error("Error al eliminar la persona: ", error);
      alert("No se pudo eliminar la persona");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Contraseña</th>
                  <th>Telefono</th>
                  <th>Fecha Nacimiento</th>
                  <th>Género</th>
                  <th>Biografia</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {socios.map((p) => {
                  return (
                    <tr>
                      <td>{p.nombre}</td>
                      <td>{p.correo}</td>
                      <td>{p.contrasenia}</td>
                      <td>{p.telefono}</td>
                      <td>{p.fechaNacimiento}</td>
                      <td>{p.genero}</td>
                      <td>{p.biografia}</td>
                      <td>
                        <Link
                          href={{
                            pathname: "/menu/registros/editarSocio",
                            query: { key: p.key },
                          }}
                        >
                          <Button variant="warning">
                            <FaEdit />
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          onClick={() => handleEliminar(p.key || "")}
                        >
                          <MdDelete />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default tablaSocios;
