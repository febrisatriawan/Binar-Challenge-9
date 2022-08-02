import { getAuth } from "firebase/auth";
import firebaseApp from "./firebaseApp";

const firebaseAuth = getAuth(firebaseApp);

export default firebaseAuth;
