import Student from "./student.js"
import StudentCollection from "./studentCollection.js"
import "./cardStudent.js"
import { getStudentFromData, getDataFromDocs } from "./utils.js"

getStudent()
const studentCollection = new StudentCollection()
async function getStudent(){
  const res = await firebase.firestore().collection("student").get()
  const docs = res.docs
  const data = getDataFromDocs(docs)

  data.map((element) => {
    const student = getStudentFromData(element)
    studentCollection.addStd(student)
  })
 studentCollection.showList()
}




