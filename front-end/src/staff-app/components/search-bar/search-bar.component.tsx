import React, { useState } from "react"
import Input from "@material-ui/core/Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "./search-bar.scss"
import getFilteredItems from "../../../shared/helpers/get-filtered-items"

library.add(faSearch)

interface SearchBar<T> {
  studentList: T
  updateMainList: T
}

const SearchBar: React.FC = (props) => {
  // Component local states
  const [query, setQuery] = useState("")

  // Set search query and filter the list with search query
  const handleOnChange = (searchQuery: any) => {
    setQuery(searchQuery)
    getFilteredItems(query, props && props.studentList, props && props.updateMainList)
  }

  return (
    <div className={"search-wrap"}>
      <FontAwesomeIcon icon={"search"} />
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
