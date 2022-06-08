import React from "react"
import { Tooltip } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SortStateType } from "shared/models/sort"
import { faArrowDown, faArrowUp, faSortAlphaDown, faSortAlphaUp, faFilter } from "@fortawesome/free-solid-svg-icons"

interface Props {
  type: SortStateType
  size?: number
  onClick?: () => void
}

function getSortTitle(type: SortStateType) {
  switch (type) {
    case "ascending":
      return "Sorted by ascending"
    case "descending":
      return "Sorted by descending"
    // case "firstname":
    //   return "Sorted by first-name"
    // case "lastname":
    //   return "Sorted by last-name"
    default:
      return "Sort Toggle"
  }
}

function getIcon(type: SortStateType) {
  switch (type) {
    case "ascending":
      return faArrowUp
    case "descending":
      return faArrowDown
    // case "firstname":
    //   return faSortAlphaUp
    // case "lastname":
    //   return faSortAlphaDown
    default:
      return faFilter
  }
}

const SortTypeIcon: React.FC<Props> = (props) => {
  const { type, size = 20, onClick } = props
  return (
    <Tooltip title={getSortTitle(type)}>
      <div onClick={onClick} style={{ marginLeft: "0.5rem", cursor: "pointer" }}>
        <FontAwesomeIcon icon={getIcon(type)} size={size > 20 ? "lg" : "sm"} />
      </div>
    </Tooltip>
  )
}

export default SortTypeIcon
