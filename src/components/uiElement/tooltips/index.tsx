import React from 'react'
import { Box, Fade, IconButton, Zoom } from '@mui/material'
import Button from '@/components/shared/button'
import DeleteIcon from '@/components/shared/icons/shared/deleteIcon'
import Tooltip from '@/components/shared/tooltip'

const Tooltips = () => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic tooltip</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tooltip title="Delete" data-testid="tooltipTest">
            <IconButton>
              <DeleteIcon className="dark:fill-white" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">tooltip with different positions</div>
        <div className="flex flex-wrap w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tooltip title="Add" placement="top-start">
            <Button variant="contained">top-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button variant="outlined">top</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
          <Tooltip title="Add" placement="left-start">
            <Button variant="contained" color="secondary">
              left-start
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="left">
            <Button variant="outlined" color="secondary">
              left
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="left-end">
            <Button color="secondary">left-end</Button>
          </Tooltip>
          <Tooltip title="Add" placement="right-start">
            <Button variant="contained" color="success">
              right-start
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="right">
            <Button variant="outlined" color="success">
              right
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="right-end">
            <Button color="success">right-end</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-start">
            <Button variant="contained" color="warning">
              bottom-start
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button variant="outlined" color="warning">
              bottom
            </Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button color="warning">bottom-end</Button>
          </Tooltip>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tooltip with arrow</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tooltip title="Add" arrow>
            <Button color="error" variant="contained">
              Arrow
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tooltip with distance from anchor</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tooltip
            title="Add"
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, -14],
                    },
                  },
                ],
              },
            }}
          >
            <Button variant="outlined" color="warning">
              Offset
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tooltip with control</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
            <Button variant="contained" color="success">
              Controlled
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tooltip with transition</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tooltip title="Add">
            <Button variant="outlined">Grow</Button>
          </Tooltip>
          <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
            <Button variant="outlined" color="success">
              Fade
            </Button>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Add">
            <Button variant="outlined" color="warning">
              Zoom
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Tooltip with follow cursor</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tooltip title="You don't have permission to do this" followCursor>
            <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>Disabled Action</Box>
          </Tooltip>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Tooltip with showing and hiding with delay time
        </div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
            <Button>[500ms, 200ms]</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Tooltips
