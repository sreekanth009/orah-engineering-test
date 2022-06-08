import React, { createContext, useState, useEffect } from "react"
import { Person, ContextState } from "../shared/models/person"
import { useApi } from "shared/hooks/use-api"
import { firstNameSort, nameSort } from "shared/helpers/get-sorted-items"

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
  open: "",
  handleCloseToaster: () => {},
  labelValue: "",
  handleDropDownChange: () => {},
}

export const StudentAttendanceContext = createContext<ContextState>(contextDefaultValues)

const StudentAttendanceProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [studentMainList, setStudentMainList] = useState<Person[]>([])
  const [unmarkedList, setUnmarkedList] = useState<Person[]>([])
  const [presentList, setPresentList] = useState<Person[]>([])
  const [lateList, setLateList] = useState<Person[]>([])
  const [absentList, setAbsentList] = useState<Person[]>([])
  const [completedRollList, setCompletedRollList] = useState<Person[]>([])
  const [open, setOpen] = useState("false")
  const [labelValue, setlabelValue] = useState("fn")

  const [getStudents, data, loadState] = useApi<{ students: Person[] }>({ url: "get-homeboard-students" })

  useEffect(() => {
    getStudents()
    // getData();
    const items = JSON.parse(localStorage.getItem("boardingware.students") && localStorage.getItem("boardingware.students"))
    if (items) {
      setStudentMainList(items)
      setUnmarkedList(items)
    }
    firstNameSort(items, updateMainList)
  }, [getStudents])

  // const getData = async () => {
  //   if (data) {
  //     setStudentMainList(data?.students || [])
  //     setUnmarkedList(data?.students || [])
  //   }
  // }

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
    setOpen("true")
  }

  const handleDropDownChange = (event) => {
    setlabelValue(event.target.value)
    nameSort(studentMainList, updateMainList, event.target.value)
  }

  const handleCloseToaster = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setOpen("false")
  }

  // console.log("studentMainList from context.....", studentMainList)
  // console.log("unmarkedList from context......", unmarkedList)
  // console.log("completedRollList from context......", completedRollList)

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
        open,
        handleCloseToaster,
        labelValue,
        handleDropDownChange,
      }}
    >
      {children}
    </StudentAttendanceContext.Provider>
  )
}

export default StudentAttendanceProvider
