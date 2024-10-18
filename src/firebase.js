
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyD3fYgc8-UXdo0p9uDtMiIlOLKEhCXjK1Q",
  authDomain: "netflixclone-b7839.firebaseapp.com",
  projectId: "netflixclone-b7839",
  storageBucket: "netflixclone-b7839.appspot.com",
  messagingSenderId: "22645061249",
  appId: "1:22645061249:web:93cf95d3878e978e533f80"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);


const signUp=async(name,email,password)=>{
    try{
      const res=  await createUserWithEmailAndPassword(auth,email,password);
      const user=res.user;
      await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
      })
    }
    catch(error){
       console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email,password)=>{

      try{
        await signInWithEmailAndPassword(auth,email,password);
      }
      catch(error){
           console.log(error);
           toast.error(error.code.split('/')[1].split('-').join(" "));    
      }
}

const logout=()=>{
  signOut(auth);
}

export {auth,db,login,signUp,logout};