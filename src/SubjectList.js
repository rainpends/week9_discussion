import { useState } from "react"

export default function SubjectList() {

  const s = [
    { code: "CMSC 100", desc: "Web Programming" },
    { code: "CMSC 22", desc: "Object-Oriented Programming" },
    { code: "CMSC 123", desc: "Data Structures" }
  ]

  const [subjects, setSubjects] = useState(s)

  function addSubject() {
    setSubjects([...subjects, { code: "CMSC 23", desc: "Mobile Computing" }]) // uses the spread operator
  }

  return (
    <>
      <h1>List of Subjects</h1>
      <ol>
        {
          subjects.map((subject, i) => <li key={i}>{subject.code} - {subject.desc}</li>)
        }
      </ol>

      <button onClick={addSubject}>Add New Subject</button>
    </>
  )
}