import React, { useState, useContext } from "react"
import { SortStateType } from "shared/models/sort"
import SortTypeIcon from "staff-app/components/sort-type/sort-type-icon.component"
import { StudentAttendanceContext } from "context-provider/context.provider.component"
import { ascendingSort, descendingSort, firstNameSort, lastNameSort } from "shared/helpers/get-sorted-items"

interface Props {
  initialState?: SortStateType
  onStateChange?: (newState: SortStateType) => void
}

const SortTypeSwitcher: React.FC<Props> = ({ initialState = "ascending", onStateChange }) => {
  const [sortState, setSortState] = useState(initialState)
  const { studentMainList, updateMainList, labelValue } = useContext(StudentAttendanceContext)

  const nextState = () => {
    const states: SortStateType[] = ["ascending", "descending"]
    if (sortState === "descending") return states[0]
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
        return ascendingSort(studentMainList, updateMainList, labelValue)
      case "descending":
        return descendingSort(studentMainList, updateMainList, labelValue)
      // case "firstname":
      //   return firstNameSort(studentMainList, updateMainList)
      // case "lastname":
      //   return lastNameSort(studentMainList, updateMainList)
      default:
        return updateMainList(studentMainList)
    }
  }

  return <SortTypeIcon type={sortState} size={20} onClick={onClick} />
}

export default SortTypeSwitcher
