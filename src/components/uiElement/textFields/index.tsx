import React from 'react'
import { InputAdornment, MenuItem } from '@mui/material'
import ProfileIcon from '@/components/shared/icons/shared/profileIcon'
import TextField from '@/components/shared/textField'
import useColorMode from '@/hooks/useColorMode'

const TextFields = () => {
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic input</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <input type="text" data-testid="textFieldTest" placeholder="test" />
        </div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <TextField variant="outlined" label="text" />
          <TextField variant="filled" label="Filled" />
          <TextField variant="standard" label="Standard" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Textfield with form props</div>
        <div className="flex flex-wrap w-full gap-[24px] px-[16px] py-[16px]">
          <TextField required label="Required" defaultValue="Hello World" />
          <TextField required variant="filled" label="Required" defaultValue="Hello World" />
          <TextField required variant="standard" label="Required" defaultValue="Hello World" />
          <TextField disabled variant="outlined" label="Disabled" defaultValue="Hello World" />
          <TextField disabled variant="standard" label="Disabled" defaultValue="Hello World" />
          <TextField disabled variant="filled" label="Disabled" defaultValue="Hello World" />
          <TextField
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Textfield with validation</div>
        <div className="flex flex-wrap w-full gap-[24px] px-[16px] py-[16px]">
          <TextField error id="outlined-error" label="Error" defaultValue="Hello World" />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField error id="filled-error" label="Error" defaultValue="Hello World" variant="filled" />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
          <TextField error id="standard-error" label="Error" defaultValue="Hello World" variant="standard" />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Textfield with multiline</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <TextField label="Multiline" multiline maxRows={4} />
          <TextField label="Multiline Placeholder" placeholder="Placeholder" multiline />
          <TextField label="Multiline" multiline rows={4} defaultValue="Default Value" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Textfield with start and end adornment
        </div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ProfileIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ProfileIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Textfield with password</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <TextField label="password" type="password" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Textfield with different size</div>
        <div className="flex flex-wrap w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <TextField label="Small Size" defaultValue="Small" size="small" />
          <TextField label="Size" defaultValue="Normal" />
          <TextField label="Size" defaultValue="Small" variant="filled" size="small" />
          <TextField label="Size" defaultValue="Normal" variant="filled" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Textfield with different color</div>
        <div className="flex flex-wrap w-full gap-[24px]  px-[16px] py-[16px]">
          <TextField label="Outlined primary" color="primary" variant="outlined" focused />
          <TextField label="filled primary" variant="filled" color="primary" focused />
          <TextField label="standard primary" variant="standard" color="primary" focused />
          <TextField label="Outlined secondary" color="secondary" variant="outlined" focused />
          <TextField label="filled secondary" variant="filled" color="secondary" focused />
          <TextField label="standard secondary" variant="standard" color="secondary" focused />
          <TextField label="Outlined success" color="success" variant="outlined" focused />
          <TextField label="filled success" variant="filled" color="success" focused />
          <TextField label="standard success" variant="standard" color="success" focused />
          <TextField label="Outlined warning" color="warning" variant="outlined" focused />
          <TextField label="filled warning" variant="filled" color="warning" focused />
          <TextField label="standard warning" variant="standard" color="warning" focused />
          <TextField label="Outlined error" color="error" variant="outlined" focused />
          <TextField label="filled error" variant="filled" color="error" focused />
          <TextField label="standard error" variant="standard" color="error" focused />
          <TextField label="Outlined info" color="info" variant="outlined" focused />
          <TextField label="filled info" variant="filled" color="info" focused />
          <TextField label="standard info" variant="standard" color="info" focused />
        </div>
      </div>
    </div>
  )
}

export default TextFields
