import React, { useState, useContext } from "react"
import { RolllStateType } from "shared/models/roll"
import { RollStateIcon } from "staff-app/components/roll-state/roll-state-icon.component"
import { Person } from "shared/models/person"
import { StudentAttendanceContext } from "context-provider/context.provider.component"

interface Props {
  initialState?: RolllStateType
  size?: number
  onStateChange?: (newState: RolllStateType) => void
  individualStudent: Person
}
export const RollStateSwitcher: React.FC<Props> = ({ initialState = "unmark", size = 40, onStateChange, individualStudent }) => {
  const [rollState, setRollState] = useState((individualStudent && individualStudent.type) || initialState)
  const { presentList, lateList, absentList, updatePresentList, updateLateList, updateAbsentList } = useContext(StudentAttendanceContext)

  console.log("presentList", presentList)
  console.log("lateList", lateList)
  console.log("absentList", absentList)

  const nextState = () => {
    const states: RolllStateType[] = ["present", "late", "absent"]
    if (rollState === "unmark" || rollState === "absent") return states[0]
    const matchingIndex = states.findIndex((s) => s === rollState)
    return matchingIndex > -1 ? states[matchingIndex + 1] : states[0]
  }

  const findIndex = (list: any) => {
    return list.findIndex((obj: any) => obj.id === individualStudent.id)
  }

  const onClick = () => {
    const next = nextState()
    setRollState(next)
    if (onStateChange) {
      onStateChange(next)
    }

    if (next === "present") {
      const index = findIndex(presentList)
      if (index === -1) {
        updatePresentList(presentList.push(individualStudent))
        presentList.forEach((item) => ((item.type = next), (item.date = new Date())))

        const index = findIndex(absentList)
        if (index === -1) {
          return ""
        } else {
          updateAbsentList(absentList.pop(individualStudent))
        }

        const index2 = findIndex(lateList)
        if (index2 === -1) {
          return ""
        } else {
          updateLateList(lateList.pop(individualStudent))
        }
      }
    } else if (next === "late") {
      const index = findIndex(lateList)
      if (index === -1) {
        updateLateList(lateList.push(individualStudent))
        lateList.forEach((item) => ((item.type = next), (item.date = new Date())))

        const index = findIndex(presentList)
        if (index === -1) {
          return ""
        } else {
          updatePresentList(presentList.pop(individualStudent))
        }

        const index2 = findIndex(absentList)
        if (index2 === -1) {
          return ""
        } else {
          updateAbsentList(absentList.pop(individualStudent))
        }
      }
    } else if (next === "absent") {
      const index = findIndex(absentList)
      if (index === -1) {
        updateAbsentList(absentList.push(individualStudent))
        absentList.forEach((item) => ((item.type = next), (item.date = new Date())))

        const index2 = findIndex(lateList)
        if (index2 === -1) {
          return ""
        } else {
          updateLateList(lateList.pop(individualStudent))
        }

        const index = findIndex(presentList)
        if (index === -1) {
          return ""
        } else {
          updatePresentList(presentList.pop(individualStudent))
        }
      }
    }
  }

  return <RollStateIcon type={rollState} size={size} onClick={onClick} />
}
