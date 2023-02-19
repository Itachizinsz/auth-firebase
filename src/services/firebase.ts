import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyydjp4wg-GL5sAj9gi-RKCSrkHoTf9Fs",
  authDomain: "fir-react-358b9.firebaseapp.com",
  projectId: "fir-react-358b9",
  storageBucket: "fir-react-358b9.appspot.com",
  messagingSenderId: "113955451175",
  appId: "1:113955451175:web:e8e23970d9dd75611ef902",
  measurementId: "G-FTXFX9N44T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);