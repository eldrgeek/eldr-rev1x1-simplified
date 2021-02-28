import firebase from 'firebase/app';
import '@firebase/database';
const firebaseConfig = {
	apiKey: 'AIzaSyC9O-Cnnm5sBDGlcfGPc0oWQjA2-pMOrwg',
	authDomain: 'revolution-1x1.firebaseapp.com',
	databaseURL: 'https://revolution-1x1.firebaseio.com',
	projectId: 'revolution-1x1',
	storageBucket: 'revolution-1x1.appspot.com',
	messagingSenderId: '779744556471',
	appId: '1:779744556471:web:28e6cd98d83fc44aabe432',
	measurementId: 'G-X2X53JN2LF'
};
try {
	firebase.initializeApp(firebaseConfig);
} catch (e) {
	console.log(e);
}
// Get a reference to the database service
const database = firebase.database();
console.log('database', database);

const writeData = (data) => {
	console.log('writing', data);
	firebase.database().ref('buttons').push(data);
};
// writeData({ id: 2,
// 	 name: 'name',
// 	  email: 'mikewolf@mike-wolf.com' });
export { writeData };
