import React, { createContext, useState, useEffect } from "react"
import { Person, ContextState } from "../shared/models/person"
import { useApi } from "shared/hooks/use-api"

const contextDefaultValues: ContextState = {
  studentMainList: [],
  updateMainList: () => {},
  loadState: "",
  presentList: [],
  lateList: [],
  absentList: [],
  updatePresentList: () => {},
  updateLateList: () => {},
  updateAbsentList: () => {},
}

export const StudentAttendanceContext = createContext<ContextState>(contextDefaultValues)

const StudentAttendanceProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [studentMainList, setStudentMainList] = useState<Person[]>([])
  const [presentList, setPresentList] = useState<Person[]>([])
  const [lateList, setLateList] = useState<Person[]>([])
  const [absentList, setAbsentList] = useState<Person[]>([])
  const [getStudents, data, loadState] = useApi<{ students: Person[] }>({ url: "get-homeboard-students" })

  useEffect(() => {
    getStudents()
    const items = JSON.parse(localStorage.getItem("boardingware.students") && localStorage.getItem("boardingware.students"))
    if (items) {
      setStudentMainList(items)
    }
  }, [getStudents])

  // Update main list on input change
  const updateMainList = (resultList: any) => {
    setStudentMainList(resultList)
  }

  // Update student present list
  const updatePresentList = (list: any) => {
    setPresentList([...presentList])
  }

  // Update student late list
  const updateLateList = (list: any) => {
    setLateList([...lateList])
  }

  // Update student absent list
  const updateAbsentList = (list: any) => {
    setAbsentList([...absentList])
  }

  return (
    <StudentAttendanceContext.Provider
      value={{
        studentMainList,
        updateMainList,
        loadState: loadState,
        presentList,
        lateList,
        absentList,
        updatePresentList,
        updateLateList,
        updateAbsentList,
      }}
    >
      {children}
    </StudentAttendanceContext.Provider>
  )
}

export default StudentAttendanceProvider
