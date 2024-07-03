import React from 'react'
import Typography from '@/components/shared/typography'

const Typographies = () => {
  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Typography with different variant</div>
        <div className="flex w-full gap-[24px] items-center px-[16px] py-[16px] text-black">
          <Typography variant="subtitle2">subtitle2</Typography>
          <Typography variant="subtitle1">subtitle1</Typography>
          <Typography variant="body2">Body2</Typography>
          <Typography variant="body1">Body1</Typography>
          <Typography variant="h6">H6</Typography>
          <Typography variant="h5">H5</Typography>
          <Typography variant="h4">H4</Typography>
          <Typography variant="h3">H3</Typography>
          <Typography variant="h2">H2</Typography>
          <Typography variant="h1">H1</Typography>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Typography with gutterBottom</div>
        <div className="flex w-full gap-[24px] items-center px-[16px] py-[16px] text-black">
          <Typography variant="h6" gutterBottom={true}>
            H6
          </Typography>
          <Typography variant="h5" gutterBottom={true}>
            H5
          </Typography>
          <Typography variant="h4" gutterBottom={true}>
            H4
          </Typography>
          <Typography variant="h3" gutterBottom={true}>
            H3
          </Typography>
          <Typography variant="h2" gutterBottom={true}>
            H2
          </Typography>
          <Typography variant="h1" gutterBottom={true}>
            H1
          </Typography>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Typography with align property</div>
        <div className="flex flex-col w-full gap-[16px] items-center px-[16px] py-[16px] text-black">
          <Typography variant="body1" gutterBottom={true} align="left" className="w-full">
            Typography with align left property
          </Typography>
          <Typography variant="h6" gutterBottom={true} align="center" className="w-full">
            Typography with align center property
          </Typography>
          <Typography variant="h5" gutterBottom={true} align="right" className="w-full">
            Typography with align right property
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Typographies
