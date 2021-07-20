import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyACzmkgMBjcJ6uR8NgwDHH1o4niV5GeVVQ",
  authDomain: "react-72872.firebaseapp.com",
  projectId: "react-72872",
  storageBucket: "react-72872.appspot.com",
  messagingSenderId: "515072426884",
  appId: "1:515072426884:web:8820f8aed46c4eac8353d1",
  measurementId: "G-Z7B1SYNPVF",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const storage = firebase.storage();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { storage, firebase as default };
