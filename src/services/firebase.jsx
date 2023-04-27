import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, query, where, doc, getDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDwrOo9BEuim9eG5KN06dfKA8FOX67NpHk",
    authDomain: "anabauerportfolio.firebaseapp.com",
    projectId: "anabauerportfolio",
    storageBucket: "anabauerportfolio.appspot.com",
    messagingSenderId: "1036892483554",
    appId: "1:1036892483554:web:bd158760e89f4a408353bb"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  export async function getItems(){
    const coleccionProductos = collection(db, "principal");
  let snapshotProductos= await getDocs(coleccionProductos);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function getCategory(categoriaURL){
    const coleccionProductos = collection(db, "europa");
    const q = query(coleccionProductos, where("category", "==", categoriaURL));
    let snapshotProductos= await getDocs(q);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function getFotoDigital(){
    const coleccionProductos = collection(db, "fotofija");
  let snapshotProductos= await getDocs(coleccionProductos);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function getFotoFija(){
    const coleccionProductos = collection(db, "foto35mm");
  let snapshotProductos= await getDocs(coleccionProductos);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function getFotoPeriodismo(){
    const coleccionProductos = collection(db, "fotoperiodismo");
  let snapshotProductos= await getDocs(coleccionProductos);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function FotosPeriodismo(){
    const coleccionProductos = collection(db,'europa');
    let snapshotProductos= await getDocs(coleccionProductos);
    const documents= snapshotProductos.docs;
    const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
    return dataProductos
  }
  export async function getVideos(){
    const coleccionProductos = collection(db, "videos");
  let snapshotProductos= await getDocs(coleccionProductos);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function getDiariodeViaje(){
    const coleccionProductos = collection(db, "diariodeviajes");
  let snapshotProductos= await getDocs(coleccionProductos);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function getRetratosFD(){
    const coleccionProductos = collection(db, "retratosFD");
  let snapshotProductos= await getDocs(coleccionProductos);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function getDireccion(){
    const coleccionProductos = collection(db, "direccion");
  let snapshotProductos= await getDocs(coleccionProductos);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }
  export async function getCategoriaDireccion(categoriaURL){
    const coleccionProductos = collection(db, "categoriasdireccion");
    const q = query(coleccionProductos, where("category", "==", categoriaURL));
    let snapshotProductos= await getDocs(q);
  const documents= snapshotProductos.docs;
  const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
  return dataProductos
  }