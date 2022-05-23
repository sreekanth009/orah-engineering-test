import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SortStateType } from "shared/models/sort"
import { faArrowDown, faArrowUp, faSortAlphaDown, faSortAlphaUp, faFilter } from "@fortawesome/free-solid-svg-icons"

interface Props {
  type: SortStateType
  size?: number
  onClick?: () => void
}

function getIcon(type: SortStateType) {
  switch (type) {
    case "ascending":
      return faArrowUp
    case "descending":
      return faArrowDown
    case "firstname":
      return faSortAlphaUp
    case "lastname":
      return faSortAlphaDown
    default:
      return faFilter
  }
}

const SortTypeIcon: React.FC<Props> = (props) => {
  const { type, size = 20, onClick } = props
  return (
    <div onClick={onClick} style={{ marginLeft: "0.5rem", cursor: "pointer" }}>
      <FontAwesomeIcon icon={getIcon(type)} size={size} />
    </div>
  )
}

export default SortTypeIcon
