import { getDataFromDoc }  from "./utils.js"

getOneDocument()
//read one
async function getOneDocument(){

    //promise
//    firebase.firestore().collection('user').doc('B0hRa7HeUsSJkk0ZVmAv').get()
//    .then(res =>{
//        console.log(res)
//    })         

   //async await
   const res = await firebase.firestore().collection('user').doc('B0hRa7HeUsSJkk0ZVmAv').get()
   const user = res.data()
   user.id = res.id
    console.log(user)
}
//get many documents
getManyDocument()
async function getManyDocument(){
    const res = await firebase.firestore().collection('user').get()
    const user = getDataFromDoc(res.docs[0])
    console.log(user)
}