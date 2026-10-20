// Configuration Firebase (Compatible balises script classiques)
const firebaseConfig = {
  apiKey: "AIzaSyC8PVf2sKt-n_8ANjUr7Iiv1PQkGJrjB-E",
  authDomain: "edu-rdc.firebaseapp.com",
  projectId: "edu-rdc",
  storageBucket: "edu-rdc.firebasestorage.app",
  messagingSenderId: "567182543451",
  appId: "1:567182543451:web:0d08c9303bfb18e4200d7e",
  measurementId: "G-3ELD77JK5N"
};

// Initialisation de Firebase avec la version Compat et initialisation de Firestore
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
