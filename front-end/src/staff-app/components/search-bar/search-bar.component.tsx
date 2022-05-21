import React, { useState } from "react"
import Input from "@material-ui/core/Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "./search-bar.scss"
import debounce from "../../../shared/helpers/debounce"
import getFilteredItems from "../../../shared/helpers/get-filtered-items"

library.add(faSearch)

interface SearchBar<T> {
  studentList: T
}

const SearchBar: React.FC = (props) => {
  // Component states
  const [query, setQuery] = useState("")

  // Set search query
  const updateQuery = (e: any) => {
    setQuery(e.target.value)
  }

  console.log("searchbar props", props)

  return (
    <div className={"search-wrap"}>
      <FontAwesomeIcon icon={"search"} />
      <Input
        id={"search-by-name"}
        placeholder={"Search by name"}
        onChange={(e) => updateQuery(e)}
        aria-describedby={"search-by-student-name"}
        inputProps={{
          "aria-label": "query",
        }}
      />
    </div>
  )
}

export default SearchBar
