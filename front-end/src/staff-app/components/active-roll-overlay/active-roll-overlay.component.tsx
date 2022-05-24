import React, { useContext } from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { Snackbar } from "@material-ui/core"
import { BorderRadius, Spacing } from "shared/styles/styles"
import { RollStateList } from "staff-app/components/roll-state/roll-state-list.component"
import { StudentAttendanceContext } from "context-provider/context.provider.component"
// import { useApi } from "shared/hooks/use-api"

export type ActiveRollAction = "filter" | "exit"
interface Props {
  isActive: boolean
  onItemClick: (action: ActiveRollAction, value?: string) => void
}

export const ActiveRollOverlay: React.FC<Props> = (props) => {
  const { isActive, onItemClick } = props
  const { presentList, lateList, absentList, unmarkedList, updateCompletedRollList, open, handleCloseToaster } = useContext(StudentAttendanceContext)
  // const [getRolls, data, loadState] = useApi<{ students: Person[] }>({ url: "save-roll" })

  // useEffect(() => {
  //   getRolls()
  // }, [getRolls])

  const action = (
    <React.Fragment>
      <Button style={{ backgroundColor: "#13943b" }} variant="contained" onClick={handleCloseToaster}>
        Close
      </Button>
    </React.Fragment>
  )

  return (
    <S.Overlay isActive={isActive}>
      <S.Content>
        <div>Class Attendance</div>
        <div>
          <RollStateList
            stateList={[
              { type: "all", count: unmarkedList },
              { type: "present", count: presentList },
              { type: "late", count: lateList },
              { type: "absent", count: absentList },
            ]}
          />
          <div style={{ marginTop: Spacing.u6 }}>
            <Button color="inherit" onClick={() => onItemClick("exit")}>
              Exit
            </Button>
            <Button color="inherit" style={{ marginLeft: Spacing.u2 }} onClick={updateCompletedRollList}>
              Complete
            </Button>
          </div>
        </div>
      </S.Content>
      <Snackbar
        style={{ backgroundColor: "transparent" }}
        open={open === "false" ? false : true}
        onClose={handleCloseToaster}
        action={action}
        autoHideDuration={5000}
        message="Changes saved successfully!"
      />
    </S.Overlay>
  )
}

const S = {
  Overlay: styled.div<{ isActive: boolean }>`
    position: fixed;
    bottom: 0;
    left: 0;
    height: ${({ isActive }) => (isActive ? "120px" : 0)};
    width: 100%;
    background-color: rgba(34, 43, 74, 0.92);
    backdrop-filter: blur(2px);
    color: #fff;
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-between;
    width: 52%;
    height: 100px;
    margin: ${Spacing.u3} auto 0;
    border: 1px solid #f5f5f536;
    border-radius: ${BorderRadius.default};
    padding: ${Spacing.u4};
  `,
}
