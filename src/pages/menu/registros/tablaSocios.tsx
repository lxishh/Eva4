import { eliminarSocio, obtenerSocios } from "@/firebase/promesas";
import { Socio } from "@/interfaces/interfaces";
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
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

  const [showModal, setShowModal] = useState(false);
  const [keyToDelete, setKeyToDelete] = useState<string | null>(null);

  // Mostrar modal y guardar clave del registro a eliminar
  const handleEliminar = (key: string) => {
    setKeyToDelete(key);
    setShowModal(true);
  };

  // Confirmar la eliminación del registro
  const confirmarEliminacion = async () => {
    if (keyToDelete) {
      try {
        await eliminarSocio(keyToDelete); // Elimina el socio
      } catch (error) {
        console.error("Error al eliminar el socio: ", error);
        alert("No se pudo eliminar el socio");
      } finally {
        setShowModal(false);
        setKeyToDelete(null);
        window.location.reload();
      }
    }
  };

  // Cancelar la eliminación y ocultar el modal
  const cancelarEliminacion = () => {
    setShowModal(false);
    setKeyToDelete(null);
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
                        {/* Modal */}
                        <Modal show={showModal} onHide={cancelarEliminacion}>
                          <Modal.Header closeButton>
                            <Modal.Title>Confirmar Eliminación</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            ¿Estás seguro de que deseas eliminar a {p.nombre}?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={cancelarEliminacion}
                            >
                              Cancelar
                            </Button>
                            <Button
                              variant="primary"
                              onClick={confirmarEliminacion}
                            >
                              Confirmar
                            </Button>
                          </Modal.Footer>
                        </Modal>
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
