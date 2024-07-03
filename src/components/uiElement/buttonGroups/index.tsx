import React from 'react'
import ButtonGroup from '@/components/shared/buttonGroup'

const optionList = ['One', 'Two', 'Three']

const ButtonGroups = () => {
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic ButtonGroup</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <ButtonGroup variant="contained" aria-label="Basic button group" options={optionList} />
          <ButtonGroup variant="outlined" aria-label="Basic button group" options={optionList} />
          <ButtonGroup variant="text" aria-label="Basic button group" options={optionList} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          ButtonGroup with small sizes and different colors
        </div>
        <div className="flex flex-wrap w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <ButtonGroup size="small" variant="contained" options={optionList} />
          <ButtonGroup size="small" color="success" options={optionList} />
          <ButtonGroup size="small" color="error" variant="text" options={optionList} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          ButtonGroup with large sizes and different colors
        </div>
        <div className="flex flex-wrap w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <ButtonGroup size="large" color="success" variant="contained" options={optionList} />
          <ButtonGroup size="large" color="warning" options={optionList} />
          <ButtonGroup size="large" color="primary" variant="text" options={optionList} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">ButtonGroup with vertical alignment</div>
        <div className="flex flex-wrap w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <ButtonGroup orientation="vertical" options={optionList} />
          <ButtonGroup orientation="vertical" color="secondary" variant="contained" options={optionList} />
          <ButtonGroup orientation="vertical" variant="text" options={optionList} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">ButtonGroup with disable elevation</div>
        <div className="flex flex-wrap w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <ButtonGroup disableElevation variant="contained" options={optionList} />
        </div>
      </div>
    </div>
  )
}

export default ButtonGroups
