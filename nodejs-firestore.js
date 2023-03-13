const admin = require('firebase-admin');
const serviceAccount = require('./accessKey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// const refGuides = db.collection('guides').get();
// refGuides.forEach(doc => {
// 	console.log(doc.data());
// }); 
async function getGuides() {
	const refGuides = db.collection('guides');
	const snapshots = await refGuides.get();
	snapshots.forEach(doc => {
		console.log(doc.data());
	});
}; 

getGuides();