import React from 'react'
import Textarea from '@/components/shared/textarea'

const Textareas = () => {
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic Textarea</div>
        <div className="flex  w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div className="flex items-end flex-wrap w-full gap-[24px] gap-[24px]">
            <Textarea value={'Hello World'} />
            <Textarea label="With Label" />
          </div>
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Textarea with minimum rows props</div>
        <div className="flex  w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div className="flex flex-wrap w-full gap-[24px] gap-[24px]">
            <Textarea minRows={3} label="With MinRows" />
            <Textarea maxRows={3} label="With MaxRows" />
          </div>
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Textarea with error props</div>
        <div className="flex  w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div className="flex flex-wrap w-full gap-[24px] gap-[24px]">
            <Textarea error={true} label="With Error" helperText="helper text" />
          </div>
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Textarea with helper text</div>
        <div className="flex  w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <div className="flex flex-wrap w-full gap-[24px] gap-[24px]">
            <Textarea label="With Error" helperText="helper text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Textareas
