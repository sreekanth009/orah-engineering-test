import React from "react"
import styled from "styled-components"
import Input from "@material-ui/core/Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Colors } from "shared/styles/colors"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "./search-bar.scss"

const SearchBar: React.FC = () => {
  library.add(faSearch)
  return (
    <S.SearchWrap>
      <S.SearchIcon>
        <FontAwesomeIcon icon="search" />
      </S.SearchIcon>
      <Input
        id="search-by-name"
        placeholder={"Search by name"}
        // onChange={}
        aria-describedby="search-by-student-name"
        inputProps={{
          "aria-label": "query",
        }}
      />
    </S.SearchWrap>
  )
}

const S = {
  SearchWrap: styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    background-color: ${Colors.blue.base};
    color: #fff;
  `,
  SearchIcon: styled.div`
    width: auto;
    padding: 0;
  `,
  Input: styled.input`
    border: 1px solid red;
    color: #fff;
  `,
}

export default SearchBar
