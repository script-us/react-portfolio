import React from 'react'
import Alert from '@/components/shared/alert'
import Button from '@/components/shared/button'
import DeleteIcon from '@/components/shared/icons/shared/deleteIcon'

const Alerts = () => {
  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="shadow-card w-full">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Alert with different color</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Alert severity="success" data-testid="alert-1">
            This is a success Alert
          </Alert>
          <Alert severity="info">This is an info Alert.</Alert>
          <Alert severity="warning">This is a warning Alert.</Alert>
          <Alert severity="error">This is an error Alert.</Alert>
        </div>
      </div>
      <div className="shadow-card w-full">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Alert with filled variant</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Alert variant="filled" severity="success">
            This is a filled success Alert.
          </Alert>
          <Alert variant="filled" severity="info">
            This is a filled info Alert.
          </Alert>
          <Alert variant="filled" severity="warning">
            This is a filled warning Alert.
          </Alert>
          <Alert variant="filled" severity="error">
            This is a filled error Alert.
          </Alert>
        </div>
      </div>
      <div className="shadow-card w-full">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Alert with outlined variant</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Alert variant="outlined" severity="success">
            This is a filled success Alert.
          </Alert>
          <Alert variant="outlined" severity="info">
            This is a filled info Alert.
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is a filled warning Alert.
          </Alert>
          <Alert variant="outlined" severity="error">
            This is a filled error Alert.
          </Alert>
        </div>
      </div>
      <div className="shadow-card w-full">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Alert with actions</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Alert severity="warning" onClose={() => {}}>
            This Alert displays the default close icon.
          </Alert>
          <Alert
            severity="success"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This Alert uses a Button component for its action.
          </Alert>
        </div>
      </div>
      <div className="shadow-card w-full">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Alert with icons</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Alert icon={<DeleteIcon className="fill-[green]" />} severity="success">
            This success Alert has a custom icon.
          </Alert>
        </div>
      </div>
      <div className="shadow-card w-full">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Alert with titles</div>
        <div className="flex flex-col w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Alert alertTitle="title" severity="success">
            This is a success Alert with an encouraging title.
          </Alert>
          <Alert alertTitle="title" severity="info">
            This is a info Alert with an encouraging title.
          </Alert>
        </div>
      </div>
    </div>
  )
}

export default Alerts
