import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import Button from "@material-ui/core/ButtonBase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Spacing, BorderRadius, FontWeight } from "shared/styles/styles"
import { Colors } from "shared/styles/colors"
import { CenteredContainer } from "shared/components/centered-container/centered-container.component"
import { Person } from "shared/models/person"
import { useApi } from "shared/hooks/use-api"
import { StudentListTile } from "staff-app/components/student-list-tile/student-list-tile.component"
import { ActiveRollOverlay, ActiveRollAction } from "staff-app/components/active-roll-overlay/active-roll-overlay.component"
import SearchBar from "../components/search-bar/search-bar.component"
import { StudentAttendanceContext } from "context-provider/context.provider.component"

export const HomeBoardPage: React.FC = () => {
  const { studentMainList, updateMainList } = useContext(StudentAttendanceContext)
  const [isRollMode, setIsRollMode] = useState(false)
  // const [list, setList] = useState([])
  // const [getStudents, data, loadState] = useApi<{ students: Person[] }>({ url: "get-homeboard-students" })

  console.log("studentList fromm context", studentMainList)

  // useEffect(() => {
  //   getStudents()
  //   const items = JSON.parse(localStorage.getItem("boardingware.students") && localStorage.getItem("boardingware.students"))
  //   if (items) {
  //     setList(items)
  //   }
  // }, [getStudents])

  const onToolbarAction = (action: ToolbarAction) => {
    if (action === "roll") {
      setIsRollMode(true)
    }
  }

  const onActiveRollAction = (action: ActiveRollAction) => {
    if (action === "exit") {
      setIsRollMode(false)
    }
  }

  // // Update main list on input change
  // const updateMainList = (resultList: any) => {
  //   setStudentMainList(resultList)
  // }

  return (
    <>
      <S.PageContainer>
        <Toolbar onItemClick={onToolbarAction} studentList={studentMainList} updateMainList={updateMainList} />

        {/* {loadState === "loading" && (
          <CenteredContainer>
            <FontAwesomeIcon icon="spinner" size="2x" spin />
          </CenteredContainer>
        )} */}

        {studentMainList && studentMainList.length > 0 ? (
          studentMainList.map((s: any) => <StudentListTile key={s.id} isRollMode={isRollMode} student={s} />)
        ) : (
          <S.NoRecordsFound>{"No records found.."}</S.NoRecordsFound>
        )}

        {/* {loadState === "error" && (
          <CenteredContainer>
            <div>Failed to load</div>
          </CenteredContainer>
        )} */}
      </S.PageContainer>
      <ActiveRollOverlay data={studentMainList} isActive={isRollMode} onItemClick={onActiveRollAction} />
    </>
  )
}

type ToolbarAction = "roll" | "sort"
interface ToolbarProps<T> {
  studentList: T
  updateMainList: T
  onItemClick: (action: ToolbarAction, value?: string) => void
}
const Toolbar: React.FC<ToolbarProps> = (props) => {
  const { onItemClick } = props
  return (
    <S.ToolbarContainer>
      <div onClick={() => onItemClick("sort")}>First Name</div>
      <SearchBar studentList={props && props.studentList} updateMainList={props.updateMainList} />
      <S.Button onClick={() => onItemClick("roll")}>Start Roll</S.Button>
    </S.ToolbarContainer>
  )
}

const S = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: ${Spacing.u4} auto 140px;
  `,
  ToolbarContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: ${Colors.blue.base};
    padding: 6px 14px;
    font-weight: ${FontWeight.strong};
    border-radius: ${BorderRadius.default};
  `,
  Button: styled(Button)`
    && {
      padding: ${Spacing.u2};
      font-weight: ${FontWeight.strong};
      border-radius: ${BorderRadius.default};
    }
  `,
  NoRecordsFound: styled.p`
    text-align: center;
    font-size: 18px;
    color: ${Colors.blue.base};
    font-weight: ${FontWeight.strong};
  `,
}
