import React, { createContext, useState, useEffect } from "react"
import { Person, ContextState } from "../shared/models/person"
import { useApi } from "shared/hooks/use-api"

const contextDefaultValues: ContextState = {
  studentMainList: [],
  unmarkedList: [],
  updateMainList: () => {},
  loadState: "",
  presentList: [],
  lateList: [],
  absentList: [],
  completedRollList: [],
  updatePresentList: () => {},
  updateLateList: () => {},
  updateAbsentList: () => {},
  updateCompletedRollList: () => {},
}

export const StudentAttendanceContext = createContext<ContextState>(contextDefaultValues)

const StudentAttendanceProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [studentMainList, setStudentMainList] = useState<Person[]>([])
  const [unmarkedList, setUnmarkedList] = useState<Person[]>([])
  const [presentList, setPresentList] = useState<Person[]>([])
  const [lateList, setLateList] = useState<Person[]>([])
  const [absentList, setAbsentList] = useState<Person[]>([])
  const [completedRollList, setCompletedRollList] = useState<Person[]>([])
  const [getStudents, data, loadState] = useApi<{ students: Person[] }>({ url: "get-homeboard-students" })

  useEffect(() => {
    getStudents()
    const items = JSON.parse(localStorage.getItem("boardingware.students") && localStorage.getItem("boardingware.students"))
    if (items) {
      setStudentMainList(items)
      setUnmarkedList(items)
    }
  }, [getStudents])

  // Update main list on input change
  const updateMainList = (resultList: any) => {
    setStudentMainList(resultList)
  }

  // Update student present list
  const updatePresentList = () => {
    setPresentList([...presentList])
  }

  // Update student late list
  const updateLateList = () => {
    setLateList([...lateList])
  }

  // Update student absent list
  const updateAbsentList = () => {
    setAbsentList([...absentList])
  }

  // Update comlpeted roll list
  const updateCompletedRollList = () => {
    setCompletedRollList([...presentList, ...lateList, ...absentList])
  }

  console.log("studentMainList from context.....", studentMainList)
  console.log("unmarkedList from context......", unmarkedList)
  console.log("completedRollList from context......", completedRollList)

  return (
    <StudentAttendanceContext.Provider
      value={{
        studentMainList,
        unmarkedList,
        updateMainList,
        loadState: loadState,
        presentList,
        lateList,
        absentList,
        completedRollList,
        updatePresentList,
        updateLateList,
        updateAbsentList,
        updateCompletedRollList,
      }}
    >
      {children}
    </StudentAttendanceContext.Provider>
  )
}

export default StudentAttendanceProvider
