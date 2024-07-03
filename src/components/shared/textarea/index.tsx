import React, { ReactElement } from 'react'
import { TextareaAutosize as BaseTextareaAutosize, styled, SxProps, TextareaAutosizeProps } from '@mui/material'

interface TextAreaTypes extends TextareaAutosizeProps {
  label?: string | JSX.Element
  error?: boolean
  helperText?: string
  className?: string
  sx?: SxProps<any>
}

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
}

const Textarea: React.FC<TextAreaTypes> = ({ label, error, helperText, className, sx, ...props }): ReactElement => {
  const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
  box-sizing: border-box;
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border:${error ? `1px solid ${theme.palette.mode === 'dark' ? `#ff5252` : `#f44336`}` : `1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]}`} ;
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
&:hover {
   border-color:${error ? ` ${theme.palette.mode === 'dark' ? `#ff5252` : `#f44336`}` : `${theme.palette.mode === 'dark' ? `#ffffff` : `#000000`}`} ;
  }
&:focus {
   border-color:${error ? `${theme.palette.mode === 'dark' ? `#ff5252` : `#f44336`}` : `#00acc1`} ;
   
  }
  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
  )

  return (
    <div className={`${className} flex flex-col`}>
      <label className={`${error && 'text-red'} text-[14px]`}>{label}</label>
      <TextareaAutosize
        sx={sx}
        aria-label="empty textarea"
        className={`border-[1px] border-solid border-green`}
        {...props}
      />
      <span className={`${error && 'text-red'} text-[12px] mt-[5px]`}> {helperText} </span>
    </div>
  )
}

export default Textarea
