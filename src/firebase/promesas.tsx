import { Socio, Usuario } from "@/interfaces/interfaces";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const registrarSocio = async (socio: Socio) => {
  const docRef = await addDoc(collection(db, "socios"), socio);
};

export const obtenerSocios = async () => {
  const querySnapshot = await getDocs(collection(db, "socios"));
  let socios: Socio[] = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let socio: Socio = {
      nombre: doc.data().nombre,
      correo: doc.data().correo,
      contrasenia: doc.data().contrasenia,
      telefono: doc.data().telefono,
      fechaNacimiento: doc.data().fechaNacimiento,
      genero: doc.data().genero,
      biografia: doc.data().biografia,
      terminos: doc.data().terminos,
      key: doc.id,
    };
    socios.push(socio);
  });
  return socios;
};

export const obtenerSocio = async (key: string) => {
  const docRef = doc(db, "socios", key);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let socio: Socio = {
      nombre: docSnap.data().nombre,
      correo: docSnap.data().correo,
      contrasenia: docSnap.data().contrasenia,
      telefono: docSnap.data().telefono,
      fechaNacimiento: docSnap.data().fechaNacimiento,
      genero: docSnap.data().genero,
      biografia: docSnap.data().biografia,
      terminos: docSnap.data().terminos,
      key: docSnap.id,
    };
    return socio;
  } else {
    return undefined;
  }
};

export const modificarSocio = async (socio: Socio) => {
  const ref = doc(collection(db, "socios"), socio.key);
  // con key incluida
  // await updateDoc(ref,{...persona})
  // sin key
  await updateDoc(ref, {
    nombre: socio.nombre,
    correo: socio.correo,
    contrasenia: socio.contrasenia,
    telefono: socio.telefono,
    fechaNacimiento: socio.fechaNacimiento,
    genero: socio.genero,
    biografia: socio.biografia,
  });
};

export const eliminarSocio = async (key: string) => {
  const ref = doc(db, "persona", key);
  await deleteDoc(ref);
};

export const verificarUsuario = async (username: string, password: string) => {
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  let eUsuario = false;

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.username === username && data.password === password) {
      eUsuario = true;
    }
  });
  return eUsuario;
};

export const registrarUsuario = async (usuario: Usuario) => {
  const docRef = await addDoc(collection(db, "usuarios"), usuario);
};
