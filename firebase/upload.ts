import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, StorageReference, uploadBytes } from "firebase/storage";

// address upload
const firebaseConfig = {
  apiKey: "AIzaSyBdN52yU9vqertcMmZ5-bsPAaQGNSRw1vM",
  authDomain: "next-cv-a9572.firebaseapp.com",
  projectId: "next-cv-a9572",
  storageBucket: "next-cv-a9572.appspot.com",
  messagingSenderId: "800727287041",
  appId: "1:800727287041:web:5debf1f112bda48547c700",
  measurementId: "G-S3GV3TR30N"
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default async function uploadImageToFirebase(file: File, name: string) {
  // upload to Firebase
  const imageRef: StorageReference = ref(storage, `images/${name}`);
  const snapshot = await uploadBytes(imageRef, file);
  const url = await getDownloadURL(snapshot.ref);

  return url;
}