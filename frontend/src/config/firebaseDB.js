import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebaseApp";

const firebaseDB = getFirestore(firebaseApp);

export default firebaseDB;
