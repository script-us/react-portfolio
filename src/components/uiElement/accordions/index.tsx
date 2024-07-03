import React from 'react'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion as MuiAccordion } from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Accordion from '@/components/shared/accordion'
import { Icon } from '@/components/shared/icons'

const accordion = [
  {
    id: 1,
    qes: 'Accordion 1',
    ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget1.',
  },
  {
    id: 2,
    qes: 'Accordion 2',
    ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
]

const accordion1 = [
  {
    id: 1,
    qes: 'Accordion 1',
    ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    disable: true,
  },
  {
    id: 2,
    qes: 'Accordion 2',
    ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    disable: false,
  },
]

const Accordions = () => {
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic accordion</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div>
            <Accordion data={accordion} expandIcon={<Icon name="IndicatorArrow" />} data-testid="mui-accordion" />
          </div>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Basic accordion with different expandIcon
        </div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div>
            {/* <Accordion data={accordion} expandIcon={<Icon name="IndicatorLongArrow" />} /> */}
            <MuiAccordion>
              <AccordionSummary
                expandIcon={<Icon name="IndicatorArrow" />}
                aria-controls="panel-content"
                id="panel-header"
                data-testid="mui-accordion-btn"
              >
                Accordion Header
              </AccordionSummary>
              <AccordionDetails data-testid="mui-accordion">
                <p>Accordion Content</p>
              </AccordionDetails>
            </MuiAccordion>
          </div>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Accordion with disable expand property
        </div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div>
            <Accordion data={accordion1} expandIcon={<Icon name="IndicatorLongArrow" />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordions
