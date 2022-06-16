
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAr3PXeMLJNR7cQWHYbejTeDFtwLJ44fvk",
  authDomain: "food-express-8edda.firebaseapp.com",
  projectId: "food-express-8edda",
  storageBucket: "food-express-8edda.appspot.com",
  messagingSenderId: "739951407988",
  appId: "1:739951407988:web:e3766f651d486aaebe3221"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;