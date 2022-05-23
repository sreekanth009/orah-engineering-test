import React, { useContext } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { RollStateIcon } from "staff-app/components/roll-state/roll-state-icon.component"
import { Spacing, FontWeight } from "shared/styles/styles"
import { RolllStateType } from "shared/models/roll"
import { Person } from "shared/models/person"
import { StudentAttendanceContext } from "context-provider/context.provider.component"

interface Props {
  stateList: StateList[]
  onItemClick?: (type: ItemType) => void
  size?: number
}
export const RollStateList: React.FC<Props> = ({ stateList, size = 14, onItemClick }) => {
  const { updateMainList, presentList, lateList, absentList, unmarkedList } = useContext(StudentAttendanceContext)

  const onClick = (type: ItemType) => {
    if (onItemClick) {
      onItemClick(type)
    }
    switch (type) {
      case "all":
        return updateMainList(unmarkedList && unmarkedList)
      case "present":
        return updateMainList(presentList && presentList)
      case "late":
        return updateMainList(lateList && lateList)
      case "absent":
        return updateMainList(absentList && absentList)
      default:
        return updateMainList(unmarkedList && unmarkedList)
    }
  }

  return (
    <S.ListContainer>
      {stateList.map((s: any, i: any) => {
        if (s.type === "all") {
          return (
            <S.ListItem key={i}>
              <FontAwesomeIcon icon="users" size="sm" style={{ cursor: "pointer" }} onClick={() => onClick(s.type)} />
              <span>{s.count.length}</span>
            </S.ListItem>
          )
        }

        return (
          <S.ListItem key={i}>
            <RollStateIcon type={s.type} size={size} onClick={() => onClick(s.type)} />
            <span>{s.count.length}</span>
          </S.ListItem>
        )
      })}
    </S.ListContainer>
  )
}

const S = {
  ListContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  ListItem: styled.div`
    display: flex;
    align-items: center;
    margin-right: ${Spacing.u2};

    span {
      font-weight: ${FontWeight.strong};
      margin-left: ${Spacing.u2};
    }
  `,
}

interface StateList {
  type: ItemType
  count: Person[]
}

type ItemType = RolllStateType | "all"
