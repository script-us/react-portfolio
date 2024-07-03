import React, { useState } from 'react'
import Button from '@/components/shared/button'
import Loader from '@/components/shared/loader'

const Loaders = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Loader</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Button onClick={() => setOpen(true)} variant="contained" color="success">
            Click For Loader
          </Button>
          <Loader open={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </div>
  )
}

export default Loaders
