import React, { ReactElement } from 'react'
import { Switch as MuiSwitch, SwitchProps } from '@mui/material'

const Switch: React.FC<SwitchProps> = ({ defaultChecked = true, onChange, disabled, ...rest }): ReactElement => {
  return (
    <div>
      <MuiSwitch checked={defaultChecked || false} onChange={onChange} disabled={disabled} {...rest} />
    </div>
  )
}

export default Switch
