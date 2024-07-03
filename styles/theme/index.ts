import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    error: {
      main: '#ff5252',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    primary: {
      main: '#00acc1',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          '& .MuiButton-startIcon svg,& .MuiButton-endIcon svg': {
            fill: 'rgba(0, 0, 0, 0.87)',
          },
        },
        outlinedPrimary: {
          '& .MuiButton-startIcon svg,& .MuiButton-endIcon svg': {
            fill: '#00acc1',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          svg: {
            fill: '#fff',
          },
        },
        outlined: {
          svg: {
            fill: '#fff',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .Mui-selected': {
            svg: {
              fill: '#00acc1',
            },
          },
        },
      },
    },
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    primary: {
      main: '#00acc1',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#ffffff',
          '& .MuiButton-startIcon svg': {
            fill: '#fff',
          },
        },
        outlinedPrimary: {
          '& .MuiButton-startIcon svg': {
            fill: '#00acc1',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .Mui-selected': {
            svg: {
              fill: '#00acc1',
            },
          },
        },
      },
    },
  },
})

export const getBorderColor = (colorMode: string, color: string) => {
  const theme = colorMode === 'dark' ? darkTheme : lightTheme
  switch (color) {
    case 'error':
      return theme.palette.error.main
    case 'info':
      return theme.palette.info.main
    case 'warning':
      return theme.palette.warning.main
    case 'primary':
      return theme.palette.primary.main
    default:
      return theme.palette.primary.main
  }
}
