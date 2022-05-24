import React, { useState, useContext } from "react"
import Input from "@material-ui/core/Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "./search-bar.scss"
import getFilteredItems from "../../../shared/helpers/get-filtered-items"
import { StudentAttendanceContext } from "context-provider/context.provider.component"

const SearchBar: React.FC = (props) => {
  const { studentMainList, updateMainList } = useContext(StudentAttendanceContext)

  // Component local states
  const [query, setQuery] = useState("")

  // Set search query and filter the list based on search query
  const handleOnChange = (searchQuery: any) => {
    setQuery(searchQuery)
    getFilteredItems(query.trim(), studentMainList, updateMainList)
  }

  console.log("query", query)

  return (
    <div className={"search-wrap"}>
      <FontAwesomeIcon icon={faSearch} />
      <Input
        id={"search-by-name"}
        placeholder={"Search by name"}
        onChange={(e) => handleOnChange(e.target.value)}
        aria-describedby={"search-by-student-name"}
        inputProps={{
          "aria-label": "query",
        }}
      />
    </div>
  )
}

export default SearchBar
