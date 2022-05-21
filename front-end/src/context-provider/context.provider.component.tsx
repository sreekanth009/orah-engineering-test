import React, { createContext, useState, useEffect } from "react"
import { Person, ContextState } from "../shared/models/person"
import { useApi } from "shared/hooks/use-api"

const contextDefaultValues: ContextState = {
  studentMainList: [],
  updateMainList: () => {},
}

export const StudentAttendanceContext = createContext<ContextState>(contextDefaultValues)

const StudentAttendanceProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [studentMainList, setStudentMainList] = useState<Person[]>([])
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

  return <StudentAttendanceContext.Provider value={{ studentMainList, updateMainList }}>{children}</StudentAttendanceContext.Provider>
}

export default StudentAttendanceProvider
