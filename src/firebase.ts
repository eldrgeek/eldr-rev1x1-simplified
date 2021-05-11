import firebase from "firebase/app";
import "@firebase/database";
import "firebase/storage";
import {
  uniqueNamesGenerator,
  names,
  Config,
  adjectives,
  colors,
  animals
} from "unique-names-generator";
import emailjs from "emailjs-com";
import { BitlyClient } from "bitly";
const bitAccess = "ab4a242802cbe718ce645bb6c0b24ee1d289fc90";

const bitly = new BitlyClient(bitAccess, {});
let nameKey: string | null = "";
let pushRef;
let values = {};

const firebaseConfig = {
  apiKey: "AIzaSyC9O-Cnnm5sBDGlcfGPc0oWQjA2-pMOrwg",
  authDomain: "revolution-1x1.firebaseapp.com",
  databaseURL: "https://revolution-1x1.firebaseio.com",
  projectId: "revolution-1x1",
  storageBucket: "revolution-1x1.appspot.com",
  messagingSenderId: "779744556471",
  appId: "1:779744556471:web:28e6cd98d83fc44aabe432",
  measurementId: "G-X2X53JN2LF"
};

const customConfig: Config = {
  dictionaries: [adjectives, adjectives, colors, animals, names],
  separator: "-",
  length: 3
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log(e);
}

// Get a reference to the database service
const database = firebase.database();
const storage = firebase.storage();
const storageRef = storage.ref();

const createInvite = () => {
  const name: string = uniqueNamesGenerator(customConfig); // big-donkey
  const inviteRef = firebase.database().ref("invites/" + name);
  inviteRef.set({ from: nameKey, to: [] });
  //@ts-ignore
  values.inviteLink = name;
  console.log("invited ", name);
};
const sendEmail = () => {
  console.log("created email with", values);
  emailjs
    .send(
      "service_xxcai49",
      "template_nqc8gsr",
      values,
      "user_wR2kAffqBvmMh8Mp2Mzoj"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  //bcc: mw@mike-wolf.com,npstookey@gmail.com,djs.neworldmultimedia@gmail.com
};
async function shortenURL(URL: string) {
  let result;
  try {
    result = await bitly.shorten(URL);
    console.log("Short URL is ", result.link);
    //@ts-ignore
    values.selfieURL = result.link;
    pushRef.update(values);
    createInvite();
    sendEmail();
  } catch (e) {
    throw e;
  }
  return result;
}

const writeImage = (setStatus, data: string) => {
  console.log("Writing image");
  let key = nameKey ? nameKey : "undefined";

  const imageRef = storageRef.child("/images/" + key + ".png");
  // console.log('database', database);/

  const task = imageRef.putString(data, "data_url"); //, { contentType: "image/png" });
  setStatus("uploading");
  task.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      console.log("Error here", error);
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      task.snapshot.ref.getDownloadURL().then((downloadURL) => {
        setStatus("uploaded");

        console.log("File available at", downloadURL);
        shortenURL(downloadURL);
      });
    }
  );
};

const writeData = (data: {}) => {
  values = data;
  // values.inviteLink = pushRef.key;
  console.log("writing", data);
  pushRef = firebase.database().ref("buttonsTest").push(data);
  nameKey = pushRef.key;
  console.log("pushref", pushRef.key);
};
const getButtons = () => {
  const buttonRef = database.ref("buttons").limitToLast(10);
  buttonRef.once("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key;
      const data = childSnapshot.val();
      console.log("key", key);
      console.log("data", data);
      // ...
    });
  });
};
// writeData({ id: 2,
// 	 name: 'name',
// 	  email: 'mikewolf@mike-wolf.com' });
export { createInvite, getButtons, writeData, writeImage, sendEmail };
