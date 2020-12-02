  
import Student from "./student.js"

export const getStudentFromData = (data) => {
  const { ten, lop, tuoi, diachi } = data
  return new Student(ten, lop, tuoi, diachi)
}

export const getDataFromDocs = (docs) => {
  return docs.map((doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
  })
}