import React, { useContext } from "react"
import styled from "styled-components"
import { Tooltip } from "@material-ui/core"
import { Spacing, FontWeight } from "shared/styles/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Card, CardContent, CardMedia, Typography, Grid } from "@material-ui/core"
import avatar from "assets/images/avatar.png"
import { PersonHelper } from "shared/models/person"
import { StudentAttendanceContext } from "context-provider/context.provider.component"

export const ActivityPage: React.FC = () => {
  const { completedRollList } = useContext(StudentAttendanceContext)
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }

  console.log("completedRollList....", completedRollList)

  function getBgColor(type: any) {
    switch (type) {
      case "present":
        return "#13943b"
      case "absent":
        return "#9b9b9b"
      case "late":
        return "#f5a623"
      default:
        return "#ccc"
    }
  }

  return (
    <S.Container>
      Activity Page
      <S.Wrap>
        <S.Heading>{"Completed List"}</S.Heading>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop: "1rem" }}>
          {completedRollList && completedRollList.length > 0 ? (
            completedRollList.map((item) => {
              return (
                <Card style={{ width: "30%", margin: "1rem" }}>
                  <CardMedia component="img" height="120" image={avatar} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom component="p" style={{ fontWeight: 600 }}>
                      Student Name: {PersonHelper.getFullName(item)}
                    </Typography>

                    <Typography gutterBottom component="p">
                      Completed On: {item && item.date.toLocaleDateString("en-IN", options)}
                    </Typography>

                    <Typography gutterBottom component="p">
                      Student Id: {item.id}
                    </Typography>

                    <Typography gutterBottom component="p">
                      Roll:{" "}
                      <Tooltip title={item.type}>
                        <span>
                          <FontAwesomeIcon color={getBgColor(item.type)} icon={faStar} size={"sm"} />
                        </span>
                      </Tooltip>
                    </Typography>
                  </CardContent>
                </Card>
              )
            })
          ) : (
            <p>{"No records found"}</p>
          )}
        </Grid>
      </S.Wrap>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: ${Spacing.u4} auto 0;
  `,
  Wrap: styled.div`
    padding: 1rem 0;
    font-size: 18px;
  `,
  Heading: styled.div`
    background: #13943b;
    padding: 1rem;
    color: #fff;
    font-weight: ${FontWeight.strong};
  `,
}
