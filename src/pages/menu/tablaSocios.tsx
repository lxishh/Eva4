import { obtenerSocios } from "@/firebase/promesas";
import { Socio } from "@/interfaces/interfaces";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

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

  return (
    <>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default tablaSocios;
