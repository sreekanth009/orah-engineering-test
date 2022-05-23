import React, { useState } from "react"
import styled from "styled-components"
import { Spacing, FontWeight } from "shared/styles/styles"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
// import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core"
// import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core"

export const ActivityPage: React.FC = () => {
  // const [expanded, setExpanded] = useState<string | false>("panel1")
  // const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
  //   setExpanded(newExpanded ? panel : false)
  // }
  return (
    <S.Container>
      Activity Page
      <S.Wrap>
        <S.Heading>{"Completed List"}</S.Heading>
        {/* <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon color="#fff" icon={faAngleDown} size={"sm"} />}
            style={{ backgroundColor: "#13943b", color: "#fff" }}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>Present List</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon color="#fff" icon={faAngleDown} size={"sm"} />}
            style={{ backgroundColor: "#f5a623", color: "#fff" }}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>Late List</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon color="#fff" icon={faAngleDown} size={"sm"} />}
            style={{ backgroundColor: "#9b9b9b", color: "#fff" }}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>Absent List</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
          </AccordionDetails>
        </Accordion> */}
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
