import React from 'react'
import { IconButton } from '@mui/material'
import Button from '@/components/shared/button'
import { Icon } from '@/components/shared/icons'
import DeleteIcon from '@/components/shared/icons/shared/deleteIcon'

interface IButtonsProps {
  handleTest?: () => void
}

const Buttons = ({ handleTest }: IButtonsProps) => {
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Button with lg size</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Button variant="text" size="large" data-testid="button-1" onClick={handleTest}>
            Button
          </Button>
          <Button variant="contained" size="large">
            Button
          </Button>
          <Button variant="outlined" size="large">
            Button
          </Button>
          <Button variant="contained" disabled size="large" data-testid="btn">
            Disabled
          </Button>

          <Button variant="outlined" disabled size="large">
            Disabled Btn
          </Button>
          <Button disabled size="large">
            Disabled
          </Button>
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Button with md size</div>
        <div className="flex  w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Button variant="text" size="large">
            Button
          </Button>
          <Button variant="contained" size="medium">
            Button
          </Button>
          <Button variant="outlined" size="medium">
            Button
          </Button>
          <Button variant="contained" disabled size="medium">
            Disabled
          </Button>

          <Button variant="outlined" disabled size="medium">
            Disabled
          </Button>
          <Button disabled size="medium">
            Disabled
          </Button>
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Button with sm size</div>
        <div className="flex  w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div className="flex flex-wrap w-full gap-[24px] gap-[24px]">
            <Button variant="text" size="small">
              Button
            </Button>
            <Button variant="contained" size="small">
              Button
            </Button>
            <Button variant="outlined" size="small">
              Button
            </Button>
            <Button disabled variant="contained" size="small">
              Disabled
            </Button>
            <Button disabled variant="outlined" size="small">
              Disabled
            </Button>
            <Button disabled size="small">
              Disabled
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Button with startIcon</div>
        <div className="flex  w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div className="flex flex-wrap w-full gap-[24px] gap-[24px]">
            <Button variant="contained" size="large" startIcon={<Icon name="ProfileIcon" />}>
              Button
            </Button>
            <Button variant="outlined" size="large" startIcon={<Icon name="ProfileIcon" />}>
              Button
            </Button>
            <Button variant="contained" size="small" startIcon={<Icon name="ProfileIcon" />}>
              Button
            </Button>
            <Button variant="outlined" size="small" startIcon={<Icon name="ProfileIcon" />}>
              Button
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Button with endIcon</div>
        <div className="flex  w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div className="flex flex-wrap w-full gap-[24px] gap-[24px]">
            <Button variant="contained" size="large" endIcon={<Icon name="ProfileIcon" className="fill-white" />}>
              Button
            </Button>
            <Button variant="outlined" size="large" endIcon={<Icon name="ProfileIcon" className="fill-blue" />}>
              Button
            </Button>
            <Button variant="contained" size="small" endIcon={<Icon name="ProfileIcon" className="fill-white" />}>
              Button
            </Button>
            <Button variant="outlined" size="small" endIcon={<Icon name="ProfileIcon" className="fill-blue" />}>
              Button
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Button with color and icon button</div>
        <div className="flex  w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div className="flex flex-wrap w-full gap-[24px] gap-[24px]">
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
            <IconButton>
              <DeleteIcon className="dark:fill-white" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buttons
