import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDSb0LvQslNdrWPB-dIHAc2J4lnXfOx_xQ",
  authDomain: "tenedores-92663.firebaseapp.com",
  projectId: "tenedores-92663",
  storageBucket: "tenedores-92663.appspot.com",
  messagingSenderId: "8598210619",
  appId: "1:8598210619:web:8ef329c01db1d9b647741e",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig); 