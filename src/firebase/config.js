import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBbnAvcdVkNjJRwbhi_76Y2Tkg_HZBHf84",
    authDomain: "mybrary-d3fa1.firebaseapp.com",
    projectId: "mybrary-d3fa1",
    storageBucket: "mybrary-d3fa1.appspot.com",
    messagingSenderId: "994855263871",
    appId: "1:994855263871:web:2a9bf5e6fc60244906e94a"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig);

 

  //init services
  const projectFirestore = firebase.firestore();
  
 

  export { projectFirestore}
  