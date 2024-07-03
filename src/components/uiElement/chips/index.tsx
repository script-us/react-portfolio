import React from 'react'
import Avatar from '@/components/shared/avatar'
import Chip from '@/components/shared/chip'
import DeleteIcon from '@/components/shared/icons/shared/deleteIcon'
import ProfileIcon from '@/components/shared/icons/shared/profileIcon'

const Chips = () => {
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic chips</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Chip actions</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip label="Clickable" onClick={() => null} />
          <Chip label="Clickable" variant="outlined" onClick={() => null} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Chip avatar</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
          <Chip avatar={<Avatar alt="user-1" src="/images/png/user/user-01.png" />} label="Avatar" variant="outlined" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Chip Deletable</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip label="Deletable" onDelete={() => null} />
          <Chip label="Deletable" variant="outlined" onDelete={() => null} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Chip clickable and deletable</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip label="Clickable Deletable" onClick={() => null} onDelete={() => null} />
          <Chip label="Clickable Deletable" variant="outlined" onClick={() => null} onDelete={() => null} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">chip with different size</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip label="Small" size="small" />
          <Chip label="Small" size="small" variant="outlined" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Icon chip</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip icon={<ProfileIcon />} label="With Icon" />
          <Chip icon={<ProfileIcon />} label="With Icon" variant="outlined" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Chip custom deleteIcon</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip
            label="Custom delete icon"
            onClick={() => null}
            onDelete={() => null}
            deleteIcon={<DeleteIcon className="fill-graydark" />}
          />
          <Chip
            label="Custom delete icon"
            onClick={() => null}
            onDelete={() => null}
            deleteIcon={<DeleteIcon className="fill-graydark" />}
            variant="outlined"
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Chip clickable link</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
          <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">chip with color</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Chip label="primary" color="primary" />
          <Chip label="success" color="success" />
          <Chip label="info" color="info" />
          <Chip label="warning" color="warning" />
          <Chip label="error" color="error" />
          <Chip label="primary" color="primary" variant="outlined" />
          <Chip label="success" color="success" variant="outlined" />
          <Chip label="info" color="info" variant="outlined" />
          <Chip label="warning" color="warning" variant="outlined" />
          <Chip label="error" color="error" variant="outlined" />
        </div>
      </div>
    </div>
  )
}

export default Chips
