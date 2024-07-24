import { Socio } from "@/interfaces/interfaces";
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

export const obtenerPersonas = async () => {
  const querySnapshot = await getDocs(collection(db, "persona"));
  let personas: Persona[] = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let persona: Persona = {
      apellido: doc.data().apellido,
      nombre: doc.data().nombre,
      correo: doc.data().correo,
      edad: doc.data().edad,
      rut: doc.data().rut,
      fechaNacimiento: doc.data().fechaNacimiento,
      key: doc.id,
    };
    personas.push(persona);
  });
  return personas;
};

export const obtenerPersona = async (key: string) => {
  const docRef = doc(db, "persona", key);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let persona: Persona = {
      apellido: docSnap.data().apellido,
      nombre: docSnap.data().nombre,
      correo: docSnap.data().correo,
      edad: docSnap.data().edad,
      rut: docSnap.data().rut,
      fechaNacimiento: docSnap.data().fechaNacimiento,
      key: docSnap.id,
    };
    return persona;
  } else {
    return undefined;
  }
};

export const modificarPersona = async (persona: Persona) => {
  const ref = doc(collection(db, "persona"), persona.key);
  // con key incluida
  // await updateDoc(ref,{...persona})
  // sin key
  await updateDoc(ref, {
    nombre: persona.nombre,
    apellido: persona.apellido,
    rut: persona.rut,
    edad: persona.edad,
    fechaNacimiento: persona.fechaNacimiento,
    correo: persona.correo,
  });
};

export const eliminarPersona = async (key: string) => {
  const ref = doc(db, "persona", key);
  await deleteDoc(ref);
};
