import React, { useMemo, useState } from 'react'
import {
  createTheme,
  FilledTextFieldProps,
  InputAdornment,
  TextField as MuiTextField,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  SxProps,
  ThemeProvider,
} from '@mui/material'
import useAuth from '@/redux/auth/useAuth'
import { getBorderColor } from '../../../../styles/theme/index'
import HideEyeIcon from '../icons/shared/hideEyeIcon'
import VisibleEyeIcon from '../icons/shared/visibleEye'

type TextFieldPropsVariant = FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps

type ITextFieldProps = Partial<TextFieldPropsVariant> & {
  children?: React.ReactNode
}

const TextField: React.FC<ITextFieldProps> = ({
  label,
  required,
  value,
  className,
  variant,
  type,
  children,
  multiline,
  error,
  helperText,
  size,
  color,
  sx,
  ...props
}: ITextFieldProps) => {
  const { colorMode } = useAuth()
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const otherProps =
    type === 'password'
      ? {
          InputProps: {
            endAdornment: (
              <InputAdornment position={'end'}>
                {passwordVisible ? (
                  <HideEyeIcon onClick={() => setPasswordVisible(false)} className="dark:fill-white" />
                ) : (
                  <VisibleEyeIcon onClick={() => setPasswordVisible(true)} className="dark:fill-white" />
                )}
              </InputAdornment>
            ),
          },
        }
      : {}

  return (
    <MuiTextField
      className={`${className}`}
      label={label}
      value={value}
      variant={variant}
      required={required}
      multiline={multiline}
      error={error}
      size={size}
      color={color}
      helperText={helperText}
      autoComplete="off"
      type={type === 'password' ? (passwordVisible ? 'text' : 'password') : type}
      {...otherProps}
      {...props}
      sx={
        {
          sx,
          '& .MuiOutlinedInput-root': {
            borderColor: ({ color }: any) => {
              getBorderColor(colorMode, color)
            },
          },
          '&.Mui-error,&.Mui-warning,&.Mui-focused.Mui-error,&.Mui-focused.Mui-warning,&.Mui-focused.Mui-info': {
            borderColor: ({ color }: any) => {
              getBorderColor(colorMode, color)
            },
          },
        } as SxProps<any>
      }
    />
  )
}

export default TextField
