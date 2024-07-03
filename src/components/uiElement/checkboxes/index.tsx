import React from 'react'
import Checkbox from '@/components/shared/checkbox'
import { Icon } from '@/components/shared/icons'

interface ICheckBoxesProps {
  handleTest?: () => void
}

const Checkboxes = ({ handleTest }: ICheckBoxesProps) => {
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic checkbox</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <input type="checkbox" data-testid="checkbox" onClick={handleTest} />
          <Checkbox defaultChecked />
          <Checkbox />
          <Checkbox disabled />
          <Checkbox disabled checked />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Checkbox with label</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Checkbox defaultChecked label="Label" />
          <Checkbox label="Label" />
          <Checkbox required label="Required" />
          <Checkbox disabled checked label="Disabled" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Checkbox with different size</div>
        <div className="flex items-center w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Checkbox defaultChecked label="Label" size="small" />
          <Checkbox defaultChecked label="Label" />
          <Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} label="Label" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Checkbox with different color</div>
        <div className="flex items-center w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Checkbox defaultChecked />
          <Checkbox defaultChecked color="secondary" />
          <Checkbox defaultChecked color="success" />
          <Checkbox defaultChecked color="default" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Checkbox with different checked and unChecked icon
        </div>
        <div className="flex items-center w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Checkbox icon={<Icon name="OutlineHeartIcon" />} checkedIcon={<Icon name="FilledHeartIcon" />} />
          <Checkbox icon={<Icon name="SettingsIcon" />} checkedIcon={<Icon name="ProfileIcon" />} />
        </div>
      </div>
    </div>
  )
}

export default Checkboxes
