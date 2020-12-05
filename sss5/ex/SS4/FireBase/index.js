import { getDataFromDoc }  from "./utils.js"

//read one---------------------------------
// getOneDocument()
async function getOneDocument(){

//     promise
//    firebase.firestore().collection('user').doc('B0hRa7HeUsSJkk0ZVmAv').get()
//    .then(res =>{
//        console.log(res)
//    })         

   //async await
   const res = await firebase.firestore().collection('student').doc('B0hRa7HeUsSJkk0ZVmAv').get()
   const user = res.data()
   user.id = res.id
    console.log(user)
}
//get many documents------------------------------------
// getManyDocument()
async function getManyDocument(){
    const res = await firebase.firestore().collection('student').get()
    const user = getDataFromDoc(res.docs[0])
    console.log(user)
}
//add document-------------------------
// addDocument()
function addDocument(){
    const data = {
        lop: '60TH5',
        tuoi: 18
    }
    firebase.firestore().collection('student').add(data)
}
//update document---------------
updateDocument()
function updateDocument(){
    const docID = 'VELPSvyTNLNOn5zJVHYt'
    const data = {
        // ten : 'update',
        // diachi: 'HN'
        phones: firebase.firestore.FieldValue.arrayUnion('0904')
    }
    firebase.firestore().collection('student')
    .doc(docID).update(data)
}
//delete document---------------
deleteDocument()
function deleteDocument(){
    const docID = 'VELPSvyTNLNOn5zJVHYt'
    firebase.firestore().collection('student')
    .doc(docID).delete()
}