import React, { useState, useContext } from "react"
import { SortStateType } from "shared/models/sort"
import SortTypeIcon from "staff-app/components/sort-type/sort-type-icon.component"
import { StudentAttendanceContext } from "context-provider/context.provider.component"
import { ascendingSort, descendingSort, firstNameSort, lastNameSort } from "shared/helpers/get-sorted-items"

interface Props {
  initialState?: SortStateType
  onStateChange?: (newState: SortStateType) => void
}

const SortTypeSwitcher: React.FC<Props> = ({ initialState = "default", onStateChange }) => {
  const [sortState, setSortState] = useState(initialState)
  const { studentMainList, updateMainList } = useContext(StudentAttendanceContext)

  const nextState = () => {
    const states: SortStateType[] = ["ascending", "descending", "firstname", "lastname"]
    if (sortState === "default" || sortState === "lastname") return states[0]
    const matchingIndex = states.findIndex((s) => s === sortState)
    return matchingIndex > -1 ? states[matchingIndex + 1] : states[0]
  }

  const onClick = () => {
    const next = nextState()
    setSortState(next)
    if (onStateChange) {
      onStateChange(next)
    }

    switch (next) {
      case "ascending":
        return ascendingSort(studentMainList, updateMainList)
      case "descending":
        return descendingSort(studentMainList, updateMainList)
      case "firstname":
        return firstNameSort(studentMainList, updateMainList)
      case "lastname":
        return lastNameSort(studentMainList, updateMainList)
      default:
        return ""
    }
  }

  return <SortTypeIcon type={sortState} size={20} onClick={onClick} />
}

export default SortTypeSwitcher
