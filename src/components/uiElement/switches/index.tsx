import React, { useState } from 'react'
import { Switch as MuiSwitch } from '@mui/material'
import Switch from '@/components/shared/switch'
interface ISwitchesProps {
  onChange?: () => void
}
const Switches = ({ onChange }: ISwitchesProps) => {
  const [checked, setChecked] = useState(true)
  const [unChecked, setUnChecked] = useState(false)
  const [disabledChecked, setDisabledChecked] = useState(true)
  const [disabledUnChecked, setDisabledUnChecked] = useState(false)
  const [basicChecked, setBasicChecked] = useState(true)
  const [secondaryChecked, setSecondaryChecked] = useState(true)
  const [warningChecked, setWarningChecked] = useState(true)
  const [defaultChecked, setDefaultChecked] = useState(true)
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Basic switch with default checked and unChecked
        </div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Switch defaultChecked={checked} onChange={(e) => setChecked(e.target.checked)} onClick={() => null} />
          {/* <Switch defaultChecked={unChecked} onChange={(e) => setUnChecked(e.target.checked)} onClick={() => null} /> */}
          <MuiSwitch onChange={onChange} value={unChecked} data-testid="test" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Switch with disable props</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Switch
            defaultChecked={disabledChecked}
            onChange={(e) => setDisabledChecked(e.target.checked)}
            disabled={true}
            onClick={() => null}
          />
          <Switch
            defaultChecked={disabledUnChecked}
            onChange={(e) => setDisabledUnChecked(e.target.checked)}
            disabled={true}
            onClick={() => null}
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Switch with size props</div>
        <div className="flex w-full items-center gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Switch
            defaultChecked={disabledChecked}
            onChange={(e) => setDisabledChecked(e.target.checked)}
            size="small"
            onClick={() => null}
          />
          <Switch
            defaultChecked={disabledUnChecked}
            onChange={(e) => setDisabledUnChecked(e.target.checked)}
            onClick={() => null}
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Switch with color props</div>
        <div className="flex w-full items-center gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Switch defaultChecked={basicChecked} onChange={(e) => setBasicChecked(e.target.checked)} />
          <Switch
            defaultChecked={secondaryChecked}
            onChange={(e) => setSecondaryChecked(e.target.checked)}
            color="secondary"
          />
          <Switch
            defaultChecked={warningChecked}
            onChange={(e) => setWarningChecked(e.target.checked)}
            color="warning"
          />
          <Switch
            defaultChecked={defaultChecked}
            onChange={(e) => setDefaultChecked(e.target.checked)}
            color="default"
          />
        </div>
      </div>
    </div>
  )
}

export default Switches
