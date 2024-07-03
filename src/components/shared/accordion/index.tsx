import React, { useState } from 'react'
import { Accordion as MuiAccordion } from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

interface IAccordionProps {
  data: { id: number; qes: string; ans: string; disable?: boolean }[]
  expandIcon: React.ReactNode
}

const Accordion = ({ data, expandIcon }: IAccordionProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(-1)

  const handleToggle = (id: number) => {
    if (expandedId === id) {
      setExpandedId(-1)
    } else {
      setExpandedId(id)
    }
  }

  return (
    <>
      {data.map((item, index) => {
        return (
          <MuiAccordion disabled={item.disable}>
            <AccordionSummary expandIcon={expandIcon} onClick={() => handleToggle(item.id)} key={index}>
              {item.qes}
            </AccordionSummary>
            {expandedId === item.id && <AccordionDetails>{item.ans}</AccordionDetails>}
          </MuiAccordion>
        )
      })}
    </>
  )
}

export default Accordion
